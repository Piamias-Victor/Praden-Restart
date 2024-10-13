import { Product } from '@core/entities/product'
import { SearchGateway } from '@core/gateways/searchGateway'
import { ProductsWithFacets, Filters, UUID } from '@core/types/type'
import axios from 'axios'

export class RealGateway {
  protected readonly baseUrl: string

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl
  }
}

export class RealSearchGateway extends RealGateway implements SearchGateway {
  constructor(baseUrl: string) {
    super(baseUrl)
  }

  async getCategory(categoryUuid: UUID): Promise<ProductsWithFacets> {
    const res = await axios.post(
      `${this.baseUrl}/search/products-by-category/${categoryUuid}/`,
      JSON.stringify({})
    )
    return Promise.resolve(res.data)
  }

  async search(
    categoryUuid: UUID,
    filters: Partial<Filters>
  ): Promise<Array<Product>> {
    const body = {
      laboratories: filters.laboratorys,
      subCategories: filters.categories
    }
    const res = await axios.post(
      `${this.baseUrl}/products-by-category/${categoryUuid}/`,
      JSON.stringify(body)
    )
    return Promise.resolve(res.data.products)
  }

  async searchProduct(query: string): Promise<Array<Product>> {
    const res = await axios.get(`${this.baseUrl}/search/products`, {
      params: { query }
    })
    return Promise.resolve(res.data.items)
  }
}
