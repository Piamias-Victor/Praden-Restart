import { InMemoryDeliveryGateway } from '../src/adapters/secondary/delivery-gateway/inMemoryDeliveryGateway';
import { DeliveryMethod, DeliveryType } from '@core/entities/deliveryMethod';

const deliveryGateway = new InMemoryDeliveryGateway();

export const pickup: DeliveryMethod = {
  uuid: '570bdcfa-b704-4ed2-9fc0-175d687c1d8d',
  name: 'Retrait en pharmacie',
  description: '198 avenue des Frères Lumières 30100 Alès',
  type: DeliveryType.ClickAndCollect,
  price: 0,
};

export const relais: DeliveryMethod = {
  uuid: '505209a2-7acb-4891-b933-e084d786d7ea ',
  name: 'Point Relais',
  description: '2-5 jours ouvrés',
  type: DeliveryType.Delivery,
  price: 800,
};

export const express: DeliveryMethod = {
  uuid: 'b5f26b31-ad03-4aaf-af89-395471795066',
  name: 'Express',
  description: '2-5 jours ouvrés',
  type: DeliveryType.Delivery,
  price: 1600,
};

deliveryGateway.feedWith(pickup, relais, express);
export default deliveryGateway;
