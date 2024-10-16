import { DeliveryMethod } from '@core/entities/deliveryMethod'
import {
  Address,
  Contact,
  getOrderLineUnitAmount,
  OrderLine
} from '@core/entities/order'
import {
  EmailGateway,
  SendOrderConfirmationDTO
} from '@core/usecases/orders/order-creation/emailGateway'
import { priceFormatter } from '@utils/formater'
import axios from 'axios'

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
    console.log('dans le sendOrderConfirmation')
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
      templateId: 6388430, // Remplacez par l'ID de votre template
      data: {
        shipp: shippingAddress,
        bill: billingAddress,
        lines,
        total
      }
    }

    const headers = {
      'Content-Type': 'application/json'
    }

    await axios.post('/api/sendEmail', body, { headers })
  }

  // async sendOrderConfirmation(
  //   confirmationDTO: SendOrderConfirmationDTO
  // ): Promise<void> {
  //   console.log('dans le sendOrderConfirmation')
  //   const shippingAddress = this.getShippingAddress(
  //     confirmationDTO.shippingAddress,
  //     confirmationDTO.contact
  //   )
  //   const billingAddress = this.getBillingAddress(
  //     confirmationDTO.billingAddress,
  //     confirmationDTO.contact
  //   )
  //   const lines = this.getLines(confirmationDTO.orderLines)
  //   const total = this.getTotals(
  //     confirmationDTO.orderLines,
  //     confirmationDTO.deliveryMethod
  //   )
  //   const body = {
  //     to: confirmationDTO.contact.email,
  //     templateId: this.confirmationTemplateID,
  //     data: {
  //       shipp: shippingAddress,
  //       bill: billingAddress,
  //       lines,
  //       total
  //     }
  //   }
  //   const headers = {
  //     'Content-Type': 'application/json'
  //   }
  //   console.log('voila le body', body)
  //   await axios.post(this.baseUrl, body, { headers })
  // }

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
