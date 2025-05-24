import { InMemoryDeliveryGateway } from '../src/adapters/secondary/delivery-gateway/inMemoryDeliveryGateway';
import { DeliveryMethod, DeliveryType } from '@core/entities/deliveryMethod';

const deliveryGateway = new InMemoryDeliveryGateway();

export const start: DeliveryMethod = {
  uuid: '1',
  name: 'start',
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
    { minWeight: 0, maxWeight: 500, price: 637 },
    { minWeight: 501, maxWeight: 1000, price: 809 },
    { minWeight: 1001, maxWeight: 2000, price: 928 },
    { minWeight: 2001, maxWeight: 3000, price: 1033 },
    { minWeight: 3001, maxWeight: 4000, price: 1142 },
    { minWeight: 4001, maxWeight: 5000, price: 1248 },
    { minWeight: 5001, maxWeight: 6000, price: 1314 },
    { minWeight: 6001, maxWeight: 7000, price: 1417 },
    { minWeight: 7001, maxWeight: 8000, price: 1520 },
    { minWeight: 8001, maxWeight: 9000, price: 1627 },
    { minWeight: 9001, maxWeight: 10000, price: 1732 },
    { minWeight: 10001, maxWeight: 15000, price: 2208 },
    { minWeight: 15001, maxWeight: 20000, price: 2719 },
    { minWeight: 20001, maxWeight: 25000, price: 3198 },
    { minWeight: 25001, maxWeight: 30000000, price: 3706 },
  ],
};

export const express: DeliveryMethod = {
  uuid: 'b5f26b31-ad03-4aaf-af89-395471795066',
  name: 'À domicile',
  description: '2-5 jours ouvrés',
  type: DeliveryType.Delivery,
  zones: [
    {
      country: 'France',
      priceRanges: [
        { minWeight: 0, maxWeight: 250, price: 835 },     // 696 * 1.20 = 835
        { minWeight: 251, maxWeight: 500, price: 925 },   // 771 * 1.20 = 925
        { minWeight: 501, maxWeight: 750, price: 1020 },  // 850 * 1.20 = 1020
        { minWeight: 751, maxWeight: 1000, price: 1097 }, // 914 * 1.20 = 1097
        { minWeight: 1001, maxWeight: 2000, price: 1236 }, // 1030 * 1.20 = 1236
        { minWeight: 2001, maxWeight: 3000, price: 1321 }, // 1101 * 1.20 = 1321
        { minWeight: 3001, maxWeight: 4000, price: 1430 }, // 1192 * 1.20 = 1430
        { minWeight: 4001, maxWeight: 5000, price: 1536 }, // 1280 * 1.20 = 1536
        { minWeight: 5001, maxWeight: 6000, price: 1602 }, // 1335 * 1.20 = 1602
        { minWeight: 6001, maxWeight: 7000, price: 1705 }, // 1421 * 1.20 = 1705
        { minWeight: 7001, maxWeight: 8000, price: 1508 }, // 1507 * 1.20 = 1808
        { minWeight: 8001, maxWeight: 9000, price: 1915 }, // 1596 * 1.20 = 1915
        { minWeight: 9001, maxWeight: 10000, price: 2020 }, // 1683 * 1.20 = 2020
        { minWeight: 10001, maxWeight: 15000, price: 2496 }, // 2080 * 1.20 = 2496
        { minWeight: 15001, maxWeight: 20000, price: 3007 }, // 2506 * 1.20 = 3007
        { minWeight: 20001, maxWeight: 25000, price: 3486 }, // 2905 * 1.20 = 3486
        { minWeight: 25001, maxWeight: 30000, price: 3994 }, // 3328 * 1.20 = 3994
      ],
    },
    {
      country: 'Allemagne',
      priceRanges: [
        { minWeight: 0, maxWeight: 250, price: 1076 },   // 897 * 1.20 = 1076
        { minWeight: 251, maxWeight: 500, price: 1076 }, // 897 * 1.20 = 1076
        { minWeight: 501, maxWeight: 750, price: 1076 }, // 897 * 1.20 = 1076
        { minWeight: 751, maxWeight: 1000, price: 1313 }, // 1094 * 1.20 = 1313
        { minWeight: 1001, maxWeight: 2000, price: 1405 }, // 1171 * 1.20 = 1405
        { minWeight: 2001, maxWeight: 3000, price: 1508 }, // 1257 * 1.20 = 1508
        { minWeight: 3001, maxWeight: 4000, price: 1610 }, // 1342 * 1.20 = 1610
        { minWeight: 4001, maxWeight: 5000, price: 1704 }, // 1420 * 1.20 = 1704
        { minWeight: 5001, maxWeight: 6000, price: 1799 }, // 1499 * 1.20 = 1799
        { minWeight: 6001, maxWeight: 7000, price: 1892 }, // 1577 * 1.20 = 1892
        { minWeight: 7001, maxWeight: 8000, price: 1987 }, // 1656 * 1.20 = 1987
        { minWeight: 8001, maxWeight: 9000, price: 2082 }, // 1735 * 1.20 = 2082
        { minWeight: 9001, maxWeight: 10000, price: 2177 }, // 1814 * 1.20 = 2177
        { minWeight: 10001, maxWeight: 15000, price: 2717 }, // 2264 * 1.20 = 2717
        { minWeight: 15001, maxWeight: 20000, price: 3257 }, // 2714 * 1.20 = 3257
        { minWeight: 20001, maxWeight: 25000, price: 3799 }, // 3166 * 1.20 = 3799
        { minWeight: 25001, maxWeight: 30000, price: 4339 }, // 3616 * 1.20 = 4339
      ],
    },
    {
      country: 'Belgique',
      priceRanges: [
        { minWeight: 0, maxWeight: 250, price: 1055 },   // 879 * 1.20 = 1055
        { minWeight: 251, maxWeight: 500, price: 1055 }, // 879 * 1.20 = 1055
        { minWeight: 501, maxWeight: 750, price: 1055 }, // 879 * 1.20 = 1055
        { minWeight: 751, maxWeight: 1000, price: 1288 }, // 1073 * 1.20 = 1288
        { minWeight: 1001, maxWeight: 2000, price: 1378 }, // 1148 * 1.20 = 1378
        { minWeight: 2001, maxWeight: 3000, price: 1478 }, // 1232 * 1.20 = 1478
        { minWeight: 3001, maxWeight: 4000, price: 1578 }, // 1315 * 1.20 = 1578
        { minWeight: 4001, maxWeight: 5000, price: 1670 }, // 1392 * 1.20 = 1670
        { minWeight: 5001, maxWeight: 6000, price: 1763 }, // 1469 * 1.20 = 1763
        { minWeight: 6001, maxWeight: 7000, price: 1855 }, // 1546 * 1.20 = 1855
        { minWeight: 7001, maxWeight: 8000, price: 1948 }, // 1623 * 1.20 = 1948
        { minWeight: 8001, maxWeight: 9000, price: 2041 }, // 1701 * 1.20 = 2041
        { minWeight: 9001, maxWeight: 10000, price: 2134 }, // 1778 * 1.20 = 2134
        { minWeight: 10001, maxWeight: 15000, price: 2663 }, // 2219 * 1.20 = 2663
        { minWeight: 15001, maxWeight: 20000, price: 3192 }, // 2660 * 1.20 = 3192
        { minWeight: 20001, maxWeight: 25000, price: 3724 }, // 3103 * 1.20 = 3724
        { minWeight: 25001, maxWeight: 30000, price: 4253 }, // 3544 * 1.20 = 4253
      ],
    },
    {
      country: 'Espagne',
      priceRanges: [
        { minWeight: 0, maxWeight: 250, price: 1212 },   // 1010 * 1.20 = 1212
        { minWeight: 251, maxWeight: 500, price: 1212 }, // 1010 * 1.20 = 1212
        { minWeight: 501, maxWeight: 750, price: 1212 }, // 1010 * 1.20 = 1212
        { minWeight: 751, maxWeight: 1000, price: 1541 }, // 1284 * 1.20 = 1541
        { minWeight: 1001, maxWeight: 2000, price: 1723 }, // 1436 * 1.20 = 1723
        { minWeight: 2001, maxWeight: 3000, price: 1836 }, // 1530 * 1.20 = 1836
        { minWeight: 3001, maxWeight: 4000, price: 1936 }, // 1613 * 1.20 = 1936
        { minWeight: 4001, maxWeight: 5000, price: 2041 }, // 1701 * 1.20 = 2041
        { minWeight: 5001, maxWeight: 6000, price: 2140 }, // 1783 * 1.20 = 2140
        { minWeight: 6001, maxWeight: 7000, price: 2254 }, // 1878 * 1.20 = 2254
        { minWeight: 7001, maxWeight: 8000, price: 2352 }, // 1960 * 1.20 = 2352
        { minWeight: 8001, maxWeight: 9000, price: 2450 }, // 2042 * 1.20 = 2450
        { minWeight: 9001, maxWeight: 10000, price: 2551 }, // 2126 * 1.20 = 2551
        { minWeight: 10001, maxWeight: 15000, price: 3102 }, // 2585 * 1.20 = 3102
        { minWeight: 15001, maxWeight: 20000, price: 3638 }, // 3032 * 1.20 = 3638
        { minWeight: 20001, maxWeight: 25000, price: 4172 }, // 3477 * 1.20 = 4172
        { minWeight: 25001, maxWeight: 30000, price: 4711 }, // 3926 * 1.20 = 4711
      ],
    },
    {
      country: 'Italie',
      priceRanges: [
        { minWeight: 0, maxWeight: 250, price: 1218 },   // 1015 * 1.20 = 1218
        { minWeight: 251, maxWeight: 500, price: 1218 }, // 1015 * 1.20 = 1218
        { minWeight: 501, maxWeight: 750, price: 1218 }, // 1015 * 1.20 = 1218
        { minWeight: 751, maxWeight: 1000, price: 1548 }, // 1290 * 1.20 = 1548
        { minWeight: 1001, maxWeight: 2000, price: 1732 }, // 1443 * 1.20 = 1732
        { minWeight: 2001, maxWeight: 3000, price: 1604 }, // 1337 * 1.20 = 1604
        { minWeight: 3001, maxWeight: 4000, price: 1945 }, // 1621 * 1.20 = 1945
        { minWeight: 4001, maxWeight: 5000, price: 2051 }, // 1709 * 1.20 = 2051
        { minWeight: 5001, maxWeight: 6000, price: 2150 }, // 1792 * 1.20 = 2150
        { minWeight: 6001, maxWeight: 7000, price: 2266 }, // 1888 * 1.20 = 2266
        { minWeight: 7001, maxWeight: 8000, price: 2364 }, // 1970 * 1.20 = 2364
        { minWeight: 8001, maxWeight: 9000, price: 2464 }, // 2053 * 1.20 = 2464
        { minWeight: 9001, maxWeight: 10000, price: 2564 }, // 2137 * 1.20 = 2564
        { minWeight: 10001, maxWeight: 15000, price: 3118 }, // 2598 * 1.20 = 3118
        { minWeight: 15001, maxWeight: 20000, price: 3656 }, // 3047 * 1.20 = 3656
        { minWeight: 20001, maxWeight: 25000, price: 4194 }, // 3495 * 1.20 = 4194
        { minWeight: 25001, maxWeight: 30000, price: 4735 }, // 3946 * 1.20 = 4735
      ],
    },
  ],
};

deliveryGateway.feedWith(start, pickup, relais, express);
export default deliveryGateway;