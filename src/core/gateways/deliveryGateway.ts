import { DeliveryMethod } from '@core/entities/deliveryMethod';

export interface DeliveryGateway {
  listMethods(): Promise<Array<DeliveryMethod>>;
}
