import { Laboratory } from '@core/entities/laboratory'
import { LaboratoryGateway } from '@core/gateways/laboratoryGateway'
import { UUID } from '@core/types/types'
import axios from 'axios'

export class RealLaboratoryGateway implements LaboratoryGateway {
  private readonly baseUrl: string
  private readonly laboratoryUrl: string

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl
    this.laboratoryUrl = `${this.baseUrl}/laboratories`
  }

  async getByUuid(uuid: UUID): Promise<Laboratory> {
    const res = await axios.get(`${this.laboratoryUrl}/${uuid}/`)
    return Promise.resolve(res.data)
  }

  async listAll(): Promise<Array<Laboratory>> {
    const res = await axios.get(`${this.laboratoryUrl}`)
    return Promise.resolve(res.data.items)
  }
}
