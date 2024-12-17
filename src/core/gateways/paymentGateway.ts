import { Order } from '@core/entities/order';

export type CreateCheckoutDTO = Pick<Order, 'lines' | 'delivery'> & {
  orderUuid: Order['uuid'];
};

export interface PaymentGateway {
  createCheckoutSession(createCheckoutDTO: CreateCheckoutDTO, deliveryPrice: string): Promise<string>;
}
