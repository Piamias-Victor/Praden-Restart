import { UUID } from '@core/types/type'

export enum ReductionType {
  Fixed = 'FIXED',
  Percentage = 'PERCENTAGE'
}

export interface Promotion {
  uuid: UUID
  type: ReductionType
  amount: number
}

export interface Product {
  uuid: UUID
  name: string
  laboratory: string
  price: number
  images: string
  promotion?: Promotion
  isMedicine: boolean
}

export interface ProductSearch {
  uuid: UUID
  name: string
  laboratory: string
  priceWithTax: number
  images: string
  promotion?: Promotion
}

export interface ProductDetail extends Product {
  description: string
  rating?: number
  notice?: string
  composition: string
  instructionsForUse?: string
}

export const getProductPriceWithPromotion = (
  product: Product
): number | undefined => {
  const promotion = product.promotions[0]
  if (!promotion) return undefined
  if (promotion.type === ReductionType.Fixed) {
    return product.price - promotion.amount
  }
  return product.price - (product.price * promotion.amount) / 100
}
