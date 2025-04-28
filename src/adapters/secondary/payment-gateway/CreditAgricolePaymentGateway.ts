import { PaymentGateway } from '@core/gateways/paymentGateway';
import CryptoJS from 'crypto-js';
import { CreateCheckoutDTO } from '@core/gateways/paymentGateway';
import { ReductionType } from '@core/entities/product';
import { useRuntimeConfig } from 'nuxt/app';

/**
 * Convertit une chaîne de caractères représentant un prix formaté en un nombre en centimes.
 * @param priceStr - Le prix formaté en string, ex: "6,96 €".
 * @returns Le prix en centimes (ex: 696).
 */
function parsePriceToCents(priceStr: string): number {
  if (typeof priceStr !== 'string') {
    throw new Error('Le prix doit être une chaîne de caractères.');
  }

  const cleanedStr = priceStr.replace(/[^\d,.-]/g, '').trim();
  if (cleanedStr.length === 0) {
    throw new Error('Le prix fourni est vide ou invalide.');
  }

  const normalizedStr = cleanedStr.replace(',', '.');
  const priceFloat = parseFloat(normalizedStr);

  if (isNaN(priceFloat)) {
    throw new Error(`Le prix "${priceStr}" n'est pas un nombre valide.`);
  }

  const result = Math.round(priceFloat * 100);
  console.log(`[PAYMENT] parsePriceToCents: "${priceStr}" -> ${result} centimes`);
  return result;
}

export class CreditAgricolePaymentGateway implements PaymentGateway {
  private readonly gatewayUrl: string;
  private readonly payboxConfig: any;
  private readonly hmacKey: string;

  constructor() {
    this.gatewayUrl = 'https://tpeweb.e-transactions.fr/php/';

    this.payboxConfig = {
      payboxSite: '1284395',
      payboxRang: '001',
      payboxIdentifiant: '260542563',
      payboxSource: 'RWD',
      payboxEffectue: 'https://www.pharmacieagnespraden.com/checkout/success',
      payboxRefuse: 'https://www.pharmacieagnespraden.com/checkout/error',
      payboxAnnule: 'https://www.pharmacieagnespraden.com/checkout/cancel',
      payboxAttente: 'https://www.example.com/payment/waiting',
    };

    const {
      public: { HMAC },
    } = useRuntimeConfig();
    
    this.hmacKey = HMAC as string || '';

    if (!this.hmacKey) {
      throw new Error('Error: HMAC key is missing from environment variables.');
    }
  }

  async createCheckoutSession(
    createCheckoutDTO: CreateCheckoutDTO,
    deliveryPrice: string,
    orderUuid: string,
    promotionCode?: string,
    discountAmount?: number
  ): Promise<string> {
    console.log(`[PAYMENT] Début createCheckoutSession avec code promo: ${promotionCode || 'aucun'}`);
    console.log(`[PAYMENT] Réduction code promo: ${discountAmount || 0} centimes`);
    console.log(`[PAYMENT] Frais de livraison: ${deliveryPrice}`);
    console.log(`[PAYMENT] Nombre d'articles: ${createCheckoutDTO.lines.length}`);

    const currency = '978'; // EUR

    // Log des lignes individuelles
    console.log('[PAYMENT] Détail des articles:');
    createCheckoutDTO.lines.forEach((line, index) => {
      console.log(`[PAYMENT] Article ${index + 1}: ${line.name || 'Sans nom'}`);
      console.log(`[PAYMENT]   - Prix unitaire: ${line.unitAmount} centimes`);
      console.log(`[PAYMENT]   - Quantité: ${line.quantity}`);
      if (line.promotion) {
        console.log(`[PAYMENT]   - Promotion: type=${line.promotion.type}, montant=${line.promotion.amount}`);
      }
    });

    // Calcul du montant des produits avec promotion
    let productsAmount = createCheckoutDTO.lines.reduce((total, line) => {
      let price = line.unitAmount;
      if (line.promotion) {
        const originalPrice = price;
        if (line.promotion.type === ReductionType.Fixed) {
          price = line.unitAmount - line.promotion.amount;
          console.log(`[PAYMENT] Prix après réduction fixe: ${originalPrice} - ${line.promotion.amount} = ${price} centimes`);
        } else {
          price = line.unitAmount - (line.unitAmount * line.promotion.amount / 100);
          console.log(`[PAYMENT] Prix après réduction pourcentage: ${originalPrice} - ${line.promotion.amount}% = ${price} centimes`);
        }
      }
      const lineTotal = Math.round(price) * line.quantity;
      console.log(`[PAYMENT] Sous-total ligne: ${lineTotal} centimes`);
      return total + lineTotal;
    }, 0);

    console.log(`[PAYMENT] Montant total des produits: ${productsAmount} centimes`);

    // Ajout des frais de livraison
    const deliveryAmount = parsePriceToCents(deliveryPrice);
    console.log(`[PAYMENT] Frais de livraison en centimes: ${deliveryAmount}`);
    
    let totalAmount = productsAmount + deliveryAmount;
    console.log(`[PAYMENT] Montant total avant réduction code promo: ${totalAmount} centimes`);

    // Application de la réduction du code promo
    if (discountAmount && discountAmount > 0) {
      console.log(`[PAYMENT] Application de la réduction code promo: -${discountAmount} centimes`);
      totalAmount = Math.max(0, totalAmount - discountAmount);
      console.log(`[PAYMENT] Montant total après réduction code promo: ${totalAmount} centimes`);
    } else if (promotionCode) {
      console.log(`[PAYMENT] ATTENTION: Code promo ${promotionCode} fourni mais sans montant de réduction`);
    }

    const dateTime = new Date().toISOString();
    console.log(`[PAYMENT] Date et heure de la transaction: ${dateTime}`);

    const data: Record<string, string> = {
      PBX_SITE: this.payboxConfig.payboxSite,
      PBX_RANG: this.payboxConfig.payboxRang,
      PBX_IDENTIFIANT: this.payboxConfig.payboxIdentifiant,
      PBX_SOURCE: this.payboxConfig.payboxSource,
      PBX_TOTAL: String(totalAmount),
      PBX_DEVISE: currency,
      PBX_CMD: orderUuid,
      PBX_PORTEUR: createCheckoutDTO.contact.email,
      PBX_RETOUR: 'montant:M;ref:R;auto:A;idtrans:S;erreur:E;sign:K',
      PBX_HASH: 'SHA512',
      PBX_TIME: dateTime,
      PBX_SHOPPINGCART:
        '<shoppingcart><total><totalQuantity>02</totalQuantity></total></shoppingcart>',
      PBX_BILLING:
        '<Billing><Address><FirstName>John</FirstName><LastName>Doe</LastName><Address1>16 avenue Emile Zola</Address1><ZipCode>75015</ZipCode><City>Paris</City><CountryCode>250</CountryCode></Address></Billing>',
      PBX_SOUHAITAUTHENT: '01',
      PBX_EFFECTUE: this.payboxConfig.payboxEffectue,
      PBX_REFUSE: this.payboxConfig.payboxRefuse,
      PBX_ANNULE: this.payboxConfig.payboxAnnule,
      PBX_ATTENTE: this.payboxConfig.payboxAttente,
      PBX_HMAC: '',
    };

    console.log(`[PAYMENT] Montant envoyé au Crédit Agricole: ${data.PBX_TOTAL} centimes`);

    // Génération du HMAC
    const sortedParams = Object.entries(data)
      .filter(([key]) => key !== 'PBX_HMAC')
      .map(([key, value]) => `${key}=${value}`)
      .join('&');

    const hmacKey = CryptoJS.enc.Hex.parse(this.hmacKey);
    const hmac = CryptoJS.HmacSHA512(sortedParams, hmacKey)
      .toString(CryptoJS.enc.Hex)
      .toUpperCase();

    data.PBX_HMAC = hmac;

    const queryString = new URLSearchParams(data).toString();
    const finalUrl = `${this.gatewayUrl}?${queryString}`;
    
    console.log(`[PAYMENT] URL de paiement créée: ${this.gatewayUrl}?...`);
    return finalUrl;
  }
}