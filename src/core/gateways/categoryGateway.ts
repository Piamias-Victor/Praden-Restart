import { Category } from '@core/entities/category'
import { UUID } from '@core/types/types'

export interface CategoryGateway {
  listAll(): Promise<Array<Category>>
  getByUuid(uuid: UUID): Promise<Category>
}
