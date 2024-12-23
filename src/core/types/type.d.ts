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

return {
  email: user.mail,
  firstname: user.firstName,
  lastname: user.lastName,
  phone: user.phoneNumber,
  address: {
    firstname: user.firstName,
    lastname: user.lastName,
    address: user.address,
    city: user.city,
    zip: user.postal,
    country: user.country,
    appartement: user.appartement,
  },
};
export interface User {
  uuid: string,
  email: string,
  firstName: string
  lastName: string
  address: {
    address: string,
    appartement?: string,
    city: string,
    firstname: string,
    lastname: string,
    zip: string
  }
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

  // types/nuxt.d.ts
import Keycloak from 'keycloak-js'

declare module '#app' {
  interface NuxtApp {
    $keycloak: Keycloak.KeycloakInstance
    $keycloakReady: Promise<void>
  }
}
