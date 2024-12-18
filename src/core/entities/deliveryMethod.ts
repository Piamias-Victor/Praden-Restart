import { UUID } from '@core/types/types';

export enum DeliveryType {
  ClickAndCollect,
  Delivery,
}

export interface DeliveryMethod {
  uuid: UUID;
  name: string;
  description: string;
  type: DeliveryType;
  point?: number;
  priceRanges: PriceRange[];
}

export interface PriceRange {
  minWeight: number;
  maxWeight: number;
  price: number;
}
