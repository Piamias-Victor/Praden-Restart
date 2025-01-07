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
    { minWeight: 0, maxWeight: 500, price: 637 },        // 531 × 1.20 = 637.2 → 637 centimes
    { minWeight: 501, maxWeight: 1000, price: 809 },     // 674 × 1.20 = 808.8 → 809 centimes
    { minWeight: 1001, maxWeight: 2000, price: 928 },    // 773 × 1.20 = 927.6 → 928 centimes
    { minWeight: 2001, maxWeight: 3000, price: 1033 },   // 861 × 1.20 = 1033.2 → 1033 centimes
    { minWeight: 3001, maxWeight: 4000, price: 1142 },   // 952 × 1.20 = 1142.4 → 1142 centimes
    { minWeight: 4001, maxWeight: 5000, price: 1248 },   // 1040 × 1.20 = 1248 centimes
    { minWeight: 5001, maxWeight: 6000, price: 1314 },   // 1095 × 1.20 = 1314 centimes
    { minWeight: 6001, maxWeight: 7000, price: 1417 },   // 1181 × 1.20 = 1417.2 → 1417 centimes
    { minWeight: 7001, maxWeight: 8000, price: 1520 },   // 1267 × 1.20 = 1520.4 → 1520 centimes
    { minWeight: 8001, maxWeight: 9000, price: 1627 },   // 1356 × 1.20 = 1627.2 → 1627 centimes
    { minWeight: 9001, maxWeight: 10000, price: 1732 },  // 1443 × 1.20 = 1731.6 → 1732 centimes
    { minWeight: 10001, maxWeight: 15000, price: 2208 }, // 1840 × 1.20 = 2208 centimes
    { minWeight: 15001, maxWeight: 20000, price: 2719 }, // 2266 × 1.20 = 2719.2 → 2719 centimes
    { minWeight: 20001, maxWeight: 25000, price: 3198 }, // 2665 × 1.20 = 3198 centimes
    { minWeight: 25001, maxWeight: 30000000, price: 3706 },
  ],
};

export const express: DeliveryMethod = {
  uuid: 'b5f26b31-ad03-4aaf-af89-395471795066',
  name: 'À domicile',
  description: '2-5 jours ouvrés',
  type: DeliveryType.Delivery,
  priceRanges: [
    { minWeight: 0, maxWeight: 250, price: 835 },         // 696 × 1.20 = 835.2 → 835 centimes
    { minWeight: 251, maxWeight: 500, price: 925 },       // 771 × 1.20 = 925.2 → 925 centimes
    { minWeight: 501, maxWeight: 750, price: 1020 },      // 850 × 1.20 = 1020 centimes
    { minWeight: 751, maxWeight: 1000, price: 1097 },     // 914 × 1.20 = 1096.8 → 1097 centimes
    { minWeight: 1001, maxWeight: 2000, price: 1236 },    // 1030 × 1.20 = 1236 centimes
    { minWeight: 2001, maxWeight: 3000, price: 1321 },    // 1101 × 1.20 = 1321.2 → 1321 centimes
    { minWeight: 3001, maxWeight: 4000, price: 1430 },    // 1192 × 1.20 = 1430.4 → 1430 centimes
    { minWeight: 4001, maxWeight: 5000, price: 1536 },    // 1280 × 1.20 = 1536 centimes
    { minWeight: 5001, maxWeight: 6000, price: 1602 },    // 1335 × 1.20 = 1602 centimes
    { minWeight: 6001, maxWeight: 7000, price: 1705 },    // 1421 × 1.20 = 1705.2 → 1705 centimes
    { minWeight: 7001, maxWeight: 8000, price: 1808 },    // 1507 × 1.20 = 1808.4 → 1808 centimes
    { minWeight: 8001, maxWeight: 9000, price: 1915 },    // 1596 × 1.20 = 1915.2 → 1915 centimes
    { minWeight: 9001, maxWeight: 10000, price: 2020 },   // 1683 × 1.20 = 2019.6 → 2020 centimes
    { minWeight: 10001, maxWeight: 15000, price: 2496 },  // 2080 × 1.20 = 2496 centimes
    { minWeight: 15001, maxWeight: 20000, price: 3007 },  // 2506 × 1.20 = 3007.2 → 3007 centimes
    { minWeight: 20001, maxWeight: 25000, price: 3486 },  // 2905 × 1.20 = 3486 centimes
    { minWeight: 25001, maxWeight: 30000000, price: 3994 },
  ],
};

deliveryGateway.feedWith(pickup, relais, express);
export default deliveryGateway;
