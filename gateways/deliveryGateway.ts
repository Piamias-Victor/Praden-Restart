import { InMemoryDeliveryGateway } from '../src/adapters/secondary/delivery-gateway/inMemoryDeliveryGateway';
import { DeliveryMethod, DeliveryType } from '@core/entities/deliveryMethod';

const deliveryGateway = new InMemoryDeliveryGateway();

export const pickup: DeliveryMethod = {
  uuid: '570bdcfa-b704-4ed2-9fc0-175d687c1d8d',
  name: 'Retrait en pharmacie',
  description: '198 avenue des Frères Lumières 30100 Alès',
  type: DeliveryType.ClickAndCollect,
  priceRanges: [
    {
      minWeight: 0,
      maxWeight: 0,
      price: 0,
    },
  ],
};

export const relais: DeliveryMethod = {
  uuid: '505209a2-7acb-4891-b933-e084d786d7ea',
  name: 'Point Relais',
  description: '2-5 jours ouvrés',
  type: DeliveryType.Delivery,
  point: 0,
  priceRanges: [
    { minWeight: 0, maxWeight: 500, price: 531 },
    { minWeight: 501, maxWeight: 1000, price: 674 },
    { minWeight: 1001, maxWeight: 2000, price: 773 },
    { minWeight: 2001, maxWeight: 3000, price: 861 },
    { minWeight: 3001, maxWeight: 4000, price: 952 },
    { minWeight: 4001, maxWeight: 5000, price: 1040 },
    { minWeight: 5001, maxWeight: 6000, price: 1095 },
    { minWeight: 6001, maxWeight: 7000, price: 1181 },
    { minWeight: 7001, maxWeight: 8000, price: 1267 },
    { minWeight: 8001, maxWeight: 9000, price: 1356 },
    { minWeight: 9001, maxWeight: 10000, price: 1443 },
    { minWeight: 10001, maxWeight: 15000, price: 1840 },
    { minWeight: 15001, maxWeight: 20000, price: 2266 },
    { minWeight: 20001, maxWeight: 25000, price: 2665 },
    { minWeight: 25001, maxWeight: 30000000, price: 3088 },
  ],
};

export const express: DeliveryMethod = {
  uuid: 'b5f26b31-ad03-4aaf-af89-395471795066',
  name: 'À domicile',
  description: '2-5 jours ouvrés',
  type: DeliveryType.Delivery,
  priceRanges: [
    { minWeight: 0, maxWeight: 250, price: 696 },
    { minWeight: 251, maxWeight: 500, price: 771 },
    { minWeight: 501, maxWeight: 750, price: 850 },
    { minWeight: 751, maxWeight: 1000, price: 914 },
    { minWeight: 1001, maxWeight: 2000, price: 1030 },
    { minWeight: 2001, maxWeight: 3000, price: 1101 },
    { minWeight: 3001, maxWeight: 4000, price: 1192 },
    { minWeight: 4001, maxWeight: 5000, price: 1280 },
    { minWeight: 5001, maxWeight: 6000, price: 1335 },
    { minWeight: 6001, maxWeight: 7000, price: 1421 },
    { minWeight: 7001, maxWeight: 8000, price: 1507 },
    { minWeight: 8001, maxWeight: 9000, price: 1596 },
    { minWeight: 9001, maxWeight: 10000, price: 1683 },
    { minWeight: 10001, maxWeight: 15000, price: 2080 },
    { minWeight: 15001, maxWeight: 20000, price: 2506 },
    { minWeight: 20001, maxWeight: 25000, price: 2905 },
    { minWeight: 25001, maxWeight: 30000000, price: 3328 },
  ],
};

deliveryGateway.feedWith(pickup, relais, express);
export default deliveryGateway;
