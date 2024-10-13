import { Product } from '@core/entities/product'
import { Filters, ProductsWithFacets } from '@core/types/type'
import { UUID } from 'crypto'

export interface SearchGateway {
  getCategory(categoryUuid: UUID): Promise<ProductsWithFacets>
  search(categoryUuid: UUID, filters: Partial<Filters>): Promise<Array<Product>>
  searchProduct(query: string): Promise<Array<Product>>
}
