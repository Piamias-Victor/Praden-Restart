import { UUID } from '@core/types/types'
import { DeliveryMethod } from '@core/entities/deliveryMethod'
import { Promotion, ReductionType } from '@core/entities/product'
import { Timestamp } from '@core/types/type'

export interface OrderLine {
  productUuid: UUID
  name: string
  unitAmount: number
  promotion?: Promotion
  quantity: number
  img: string
  description: string
  deliveryStatus: DeliveryStatus
  updatedAt: Timestamp
}

export const getOrderLineUnitAmount = (line: OrderLine): number => {
  let res = line.unitAmount
  if (line.promotion) {
    const promotion = line.promotion
    if (promotion.type === ReductionType.Fixed) {
      res = line.unitAmount - promotion.amount
    } else {
      res = line.unitAmount - (line.unitAmount * promotion.amount) / 100
    }
  }
  return res
}

export const getOrderLineTotalAmount = (line: OrderLine): number => {
  return getOrderLineUnitAmount(line) * line.quantity
}

export const getOrderLineTotalAmountWithoutPromotion = (
  line: OrderLine
): number => {
  return line.unitAmount * line.quantity
}

export enum PaymentStatus {
  WaitingForPayment,
  Payed
}

export interface Payment {
  sessionUrl: string
  status: PaymentStatus
}

export interface Contact {
  email: string
  phone: string
}

export interface Address {
  firstname: string
  lastname: string
  address: string
  city: string
  zip: string
  appartement?: string
}

export enum DeliveryStatus {
  Created,
  Processing,
  Shipped,
  Delivered
}

export interface OrderDelivery {
  method: DeliveryMethod
}

export interface Order {
  uuid: UUID
  createdAt: Timestamp
  lines: Array<OrderLine>
  delivery: OrderDelivery
  payment: Payment
  contact: Contact
  deliveryAddress: Address
}
