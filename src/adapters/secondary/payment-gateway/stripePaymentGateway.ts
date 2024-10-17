import {
  CreateCheckoutDTO,
  PaymentGateway
} from '@core/gateways/paymentGateway'
import axios, { AxiosInstance } from 'axios'
import { getOrderLineUnitAmount } from '@core/entities/order'

export class StripePaymentGateway implements PaymentGateway {
  private stripe: AxiosInstance

  constructor(apiKey: string) {
    this.stripe = axios.create({
      baseURL: 'https://api.stripe.com/v1',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    })
  }

  async createCheckoutSession(
    createCheckoutDTO: CreateCheckoutDTO
  ): Promise<string> {
    return ''
    const currency = 'eur'
    const lineItems = createCheckoutDTO.lines.map((line) => {
      return {
        price_data: {
          currency,
          unit_amount: getOrderLineUnitAmount(line),
          product_data: {
            name: line.name
          }
        },
        quantity: line.quantity
      }
    })
    const deliveryMethod = createCheckoutDTO.delivery
    lineItems.push({
      price_data: {
        currency,
        unit_amount: deliveryMethod.method.price,
        product_data: {
          name: deliveryMethod.method.name
        }
      },
      quantity: 1
    })

    const session = {
      payment_method_types: ['card'],
      mode: 'payment',
      line_items: lineItems,
      success_url: 'http://localhost:3000/checkout/success',
      cancel_url: 'http://localhost:3000/checkout/cancel'
    }

    const res = await this.stripe.post('/checkout/sessions', session)
    return res.data.url
  }
}
