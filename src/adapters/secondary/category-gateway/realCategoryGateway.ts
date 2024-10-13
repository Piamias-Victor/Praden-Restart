import { Category } from '@core/entities/category'
import { CategoryGateway } from '@core/gateways/categoryGateway'
import { UUID } from '@core/types/types'
import axios from 'axios'

export class RealCategoryGateway implements CategoryGateway {
  private readonly baseUrl: string
  private readonly categoryUrl: string

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl
    this.categoryUrl = `${this.baseUrl}/categories`
  }

  async getByUuid(uuid: UUID): Promise<Category> {
    const res = await axios.get(`${this.categoryUrl}/${uuid}/`)
    return Promise.resolve(res.data)
  }

  async listAll(): Promise<Array<Category>> {
    const res = await axios.get(`${this.categoryUrl}`)
    return Promise.resolve(res.data.items)
  }
}
