import { DeliveryMethod } from '@core/entities/deliveryMethod'
import { DeliveryGateway } from '@core/gateways/deliveryGateway'

export class InMemoryDeliveryGateway implements DeliveryGateway {
  private methods: Array<DeliveryMethod> = []

  async listMethods(): Promise<Array<DeliveryMethod>> {
    return Promise.resolve(this.methods)
  }

  feedWith(...methods: Array<DeliveryMethod>) {
    this.methods = methods
  }
}
