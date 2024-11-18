import { Laboratory } from '@core/entities/laboratory'
import { UUID } from '@core/types/types'

export interface LaboratoryGateway {
  listAll(): Promise<Array<Laboratory>>
  getByUuid(uuid: UUID): Promise<Laboratory>
}
