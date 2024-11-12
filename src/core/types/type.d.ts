import { FullAddress } from '@core/usecases/orders/order-creation/createOrder';

declare global {
    const definePageMeta: typeof import('nuxt').definePageMeta;
}

export type UUID = string

export interface HashTable<T> {
    [key: string]: T
}

export type Timestamp = number

export type EmailMessage = SendOrderConfirmationDTO

export interface User {
  id: string,
  mail: string,
  pwd: string
  firstName: string
  lastName: string
  phoneNumber: string
  photo: string
  country: string
  address: string
  appartement: string
  postal: string
  city: string
  billingAddress?: FullAddress
  deliveryAddress?: FullAddress
}
export interface laboratoryFacet {
  name: string
  quantity: number
}

export interface Facets {
    laboratorys: Array<laboratoryFacet>
    priceRange: {
      min: number
      max: number
    }
    subCategories: Array<Category>
  }

  export interface Filters {
    laboratorys: Array<string>
    categories: Array<UUID>
  }

  export interface ProductsWithFacets {
    products: Array<Product>
    facets: Partial<Facets>
  }