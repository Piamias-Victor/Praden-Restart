import { UUID } from '@core/types/types'
import { DeliveryMethod } from '@core/entities/deliveryMethod'
import { Address, Contact, OrderLine } from '@core/entities/order'

export interface SendOrderConfirmationDTO {
  orderUuid: UUID
  contact: Contact
  shippingAddress: Address
  billingAddress: Address
  orderLines: Array<OrderLine>
  deliveryMethod: DeliveryMethod
}

export interface EmailGateway {
  sendOrderConfirmation(
    sendOrderConfirmationDTO: SendOrderConfirmationDTO
  ): void
}
