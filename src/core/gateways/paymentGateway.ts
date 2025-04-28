import { Order } from '@core/entities/order';

export type CreateCheckoutDTO = Pick<Order, 'lines' | 'delivery' | 'contact'> & {
  orderUuid: Order['uuid'];
};

export interface PaymentGateway {
  createCheckoutSession(
    createCheckoutDTO: CreateCheckoutDTO, 
    deliveryPrice: string,
    orderUuid: string,
    promotionCode?: string,
    discountAmount?: number
  ): Promise<string>;
}