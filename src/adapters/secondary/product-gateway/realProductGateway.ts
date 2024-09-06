import { Product, ProductDetail } from '@core/entities/product'
import axios from 'axios'
import { ProductGateway } from '@core/gateways/productGateway'
import { UUID } from '@core/types/type'

export interface ItemProductDetail {
  item: ProductDetail
}
export class RealProductGateway implements ProductGateway {
  private readonly baseUrl: string
  private readonly productUrl: string

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl
    this.productUrl = `${this.baseUrl}/products`
  }
  async getByUuid(uuid: UUID): Promise<ProductDetail> {
    const url = `${this.productUrl}/${uuid}`
    try {
      const response = await axios.get<ItemProductDetail>(url)
      return response.data.item
    } catch (error) {
      throw error
    }
  }

  async list(): Promise<Array<Product>> {
    const res = await axios.get(`${this.productUrl}/`)
    return Promise.resolve(JSON.parse(JSON.stringify(res.data.items)))
  }

  async listBestSales(): Promise<Array<UUID>> {
    const res = await axios.get(`${this.baseUrl}/best-sales/`)
    return Promise.resolve(JSON.parse(JSON.stringify(res.data.items)))
  }

  async listPromotions(): Promise<Array<UUID>> {
    const res = await axios.get(`${this.baseUrl}/best-sales/`)
    return Promise.resolve(JSON.parse(JSON.stringify(res.data.items)))
  }
}
