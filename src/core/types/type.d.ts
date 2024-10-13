declare global {
    const definePageMeta: typeof import('nuxt').definePageMeta;
}

export type UUID = string

export interface HashTable<T> {
    [key: string]: T
}

export interface BrandFacet {
  name: string
  quantity: number
}

export interface Facets {
    brands: Array<BrandFacet>
    priceRange: {
      min: number
      max: number
    }
    subCategories: Array<Category>
  }

  export interface Filters {
    brands: Array<string>
    categories: Array<UUID>
  }

  export interface ProductsWithFacets {
    products: Array<Product>
    facets: Partial<Facets>
  }