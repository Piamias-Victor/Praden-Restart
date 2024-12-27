// StripePaymentGateway.ts

import { CreateCheckoutDTO, PaymentGateway } from '@core/gateways/paymentGateway';
import axios, { AxiosInstance } from 'axios';
import { getOrderLineUnitAmount } from '@core/entities/order';
import qs from 'qs'; // Importez qs pour formater les données en x-www-form-urlencoded

/**
 * Convertit une chaîne de caractères représentant un prix formaté en un nombre en centimes.
 *
 * @param priceStr - Le prix formaté en string, par exemple "6,96 €".
 * @returns Le prix en centimes sous forme de nombre, par exemple 696.
 * @throws {Error} Si le format de la chaîne n'est pas valide.
 */
function parsePriceToCents(priceStr: string): number {
  if (typeof priceStr !== 'string') {
    throw new Error('Le prix doit être une chaîne de caractères.');
  }

  // Étape 1 : Supprimer les espaces, y compris les espaces insécables, et les symboles monétaires
  // Utilisation d'une expression régulière pour conserver uniquement les chiffres et la virgule
  const cleanedStr = priceStr.replace(/[^\d,.-]/g, '').trim();

  if (cleanedStr.length === 0) {
    throw new Error('Le prix fourni est vide ou invalide.');
  }

  // Étape 2 : Remplacer la virgule par un point pour convertir en nombre flottant
  const normalizedStr = cleanedStr.replace(',', '.');

  // Étape 3 : Convertir la chaîne en nombre
  const priceFloat = parseFloat(normalizedStr);

  if (isNaN(priceFloat)) {
    throw new Error(`Le prix "${priceStr}" n'est pas un nombre valide.`);
  }

  // Étape 4 : Multiplier par 100 pour obtenir les centimes et arrondir correctement
  const priceCents = Math.round(priceFloat * 100);

  return priceCents;
}

export class StripePaymentGateway implements PaymentGateway {
  private stripe: AxiosInstance;

  constructor(apiKey: string) {
    this.stripe = axios.create({
      baseURL: 'https://api.stripe.com/v1',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });
  }

  async createCheckoutSession(
    createCheckoutDTO: CreateCheckoutDTO,
    deliveryPrice: string,
    orderUuid: string,
  ): Promise<string> {
    const currency = 'eur';
    const lineItems = createCheckoutDTO.lines.map((line) => {
      return {
        price_data: {
          currency,
          unit_amount: line.unitAmount * line.quantity,
          product_data: {
            name: line.name,
          },
        },
        quantity: line.quantity,
      };
    });

    const deliveryMethod = createCheckoutDTO.delivery;
    lineItems.push({
      price_data: {
        currency,
        unit_amount: parsePriceToCents(deliveryPrice),
        product_data: {
          name: deliveryMethod.method.name,
        },
      },
      quantity: 1,
    });

    const session = {
      payment_method_types: ['card'],
      mode: 'payment',
      line_items: lineItems,
      success_url: 'http://localhost:3000/checkout/success', // Mettez à jour pour la production
      cancel_url: 'http://localhost:3000/checkout/error', // Mettez à jour pour la production
      payment_intent_data: {
        metadata: {
          orderUuid: orderUuid,
        },
      },
    };

    // Utiliser qs pour formater les données
    const res = await this.stripe.post('/checkout/sessions', qs.stringify(session));
    return res.data.url;
  }
}
