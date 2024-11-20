import { UUID } from '@core/types/types'

export class LaboratoryDoesNotExistsError extends Error {
  constructor(uuid: UUID) {
    super(`Laboratory ${uuid} does not exists`)
  }
}
