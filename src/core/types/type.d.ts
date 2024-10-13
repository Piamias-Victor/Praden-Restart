declare global {
    const definePageMeta: typeof import('nuxt').definePageMeta;
}

export type UUID = string

export interface HashTable<T> {
    [key: string]: T
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