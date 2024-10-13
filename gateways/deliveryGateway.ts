import { InMemoryDeliveryGateway } from '../src/adapters/secondary/delivery-gateway/inMemoryDeliveryGateway'
import { DeliveryMethod, DeliveryType } from '@core/entities/deliveryMethod'

const deliveryGateway = new InMemoryDeliveryGateway()

export const pickup: DeliveryMethod = {
  uuid: 'clickAndCollect',
  name: 'Retrait en pharmacie',
  description: '198 avenue des Frères Lumières 30100 Alès',
  type: DeliveryType.ClickAndCollect,
  price: 0
}

export const relais: DeliveryMethod = {
  uuid: 'relais-uuid',
  name: 'Point Relais',
  description: '2-5 jours ouvrés',
  type: DeliveryType.Delivery,
  price: 800
}

export const express: DeliveryMethod = {
  uuid: 'express-uuid',
  name: 'Express',
  description: '2-5 jours ouvrés',
  type: DeliveryType.Delivery,
  price: 1600
}

deliveryGateway.feedWith(pickup, relais, express)
export default deliveryGateway
