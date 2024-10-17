import axios from 'axios'
import { DeliveryMethod } from '@core/entities/deliveryMethod'
import {
  Address,
  Contact,
  OrderLine,
  getOrderLineUnitAmount
} from '@core/entities/order'
import {
  EmailGateway,
  SendOrderConfirmationDTO
} from '@core/usecases/orders/order-creation/emailGateway'
import { priceFormatter } from '@utils/formater'

export class RealEmailGateway implements EmailGateway {
  private readonly baseUrl: string
  private readonly confirmationTemplateID: string
  private formatter = priceFormatter('fr-FR', 'EUR')

  constructor(baseUrl: string, confirmationTemplateID: string) {
    this.baseUrl = baseUrl
    this.confirmationTemplateID = confirmationTemplateID
  }

  async sendOrderConfirmation(
    confirmationDTO: SendOrderConfirmationDTO
  ): Promise<void> {
    console.log('Dans sendOrderConfirmation')

    const shippingAddress = this.getShippingAddress(
      confirmationDTO.shippingAddress,
      confirmationDTO.contact
    )
    const billingAddress = this.getBillingAddress(
      confirmationDTO.billingAddress,
      confirmationDTO.contact
    )
    const lines = this.getLines(confirmationDTO.orderLines)
    const total = this.getTotals(
      confirmationDTO.orderLines,
      confirmationDTO.deliveryMethod
    )

    const body = {
      to: confirmationDTO.contact.email,
      templateId: this.confirmationTemplateID,
      data: {
        link: `https://www.pharmacieagnespraden.com/order/${confirmationDTO.orderUuid}/`,
        shipp: shippingAddress,
        bill: billingAddress,
        missing: {
          lines
        },
        total
      }
    }

    console.log('Sending email with body:', body)

    await fetch(`${this.baseUrl}/sendEmail/`, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json'
      }
    })
  }

  private getShippingAddress(address: Address, contact: Contact) {
    return {
      first_name: address.firstname,
      last_name: address.lastname,
      address: `${address.address}, ${address.zip}, ${address.city}`,
      phone: contact.phone,
      link: 'https://www.pharmacieagnespraden.com/'
    }
  }

  private getBillingAddress(address: Address, contact: Contact) {
    return {
      first_name: address.firstname,
      last_name: address.lastname,
      address: `${address.address}, ${address.zip}, ${address.city}`,
      phone: contact.phone
    }
  }

  private getLines(orderLines: Array<OrderLine>) {
    return orderLines.map((line) => {
      const amount = getOrderLineUnitAmount(line)
      return {
        img: line.img,
        name: line.name,
        unitPrice: this.formatter.format(amount / 100),
        quantity: line.quantity,
        total: this.formatter.format((amount * line.quantity) / 100)
      }
    })
  }

  private getTotals(
    orderLines: Array<OrderLine>,
    deliveryMethod: DeliveryMethod
  ) {
    const subTotal = orderLines.reduce((acc, line) => {
      const amount = getOrderLineUnitAmount(line)
      return acc + amount * line.quantity
    }, 0)
    const total = deliveryMethod.price + subTotal
    return {
      product_price: this.formatter.format(subTotal / 100),
      shipping_price:
        deliveryMethod.price > 0
          ? this.formatter.format(deliveryMethod.price / 100)
          : 'Gratuit',
      price: this.formatter.format(total / 100)
    }
  }
}
