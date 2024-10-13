import { UUID, URL } from '@core/types/types'

export interface Category {
  uuid: UUID
  name: string
  img: URL
  parentUuid: UUID | null
  description: string
}
