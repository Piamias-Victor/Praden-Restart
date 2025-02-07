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

  return Math.round(priceFloat * 100);
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
      throw new Error('❌ ERREUR : La clé HMAC est absente des variables d’environnement.');
    }
  }

  async createCheckoutSession(
    createCheckoutDTO: CreateCheckoutDTO,
    deliveryPrice: string,
    orderUuid: string
  ): Promise<string> {

    const currency = '978'; // EUR

    // ✅ Correction du calcul de `totalAmount` en utilisant `parsePriceToCents`
    const totalAmount =
      createCheckoutDTO.lines.reduce((total, line) => {
        let price = line.unitAmount;
        if (line.promotion && line.promotion.type !== ReductionType.Fixed) {
          price -= line.unitAmount * (line.promotion.amount / 100);
        }
        return total + Math.round(price) * line.quantity;
      }, 0) + parsePriceToCents(deliveryPrice);

    const dateTime = new Date().toISOString();

    const data: Record<string, string> = {
      PBX_SITE: this.payboxConfig.payboxSite,
      PBX_RANG: this.payboxConfig.payboxRang,
      PBX_IDENTIFIANT: this.payboxConfig.payboxIdentifiant,
      PBX_SOURCE: this.payboxConfig.payboxSource,
      PBX_TOTAL: String(totalAmount), // ✅ Montant correctement calculé
      PBX_DEVISE: currency,
      PBX_CMD: orderUuid, // ✅ Référence dynamique
      PBX_PORTEUR: createCheckoutDTO.contact.email, // ✅ Email dynamique
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

    // 📌 Génération du HMAC
    const sortedParams = Object.entries(data)
      .filter(([key]) => key !== 'PBX_HMAC')
      .map(([key, value]) => `${key}=${value}`)
      .join('&');

    // 📌 Utilisation de la clé HMAC depuis l'`env`
    const hmacKey = CryptoJS.enc.Hex.parse(this.hmacKey);
    const hmac = CryptoJS.HmacSHA512(sortedParams, hmacKey)
      .toString(CryptoJS.enc.Hex)
      .toUpperCase();

    data.PBX_HMAC = hmac;

    const queryString = new URLSearchParams(data).toString();
    return `${this.gatewayUrl}?${queryString}`;
  }
}
