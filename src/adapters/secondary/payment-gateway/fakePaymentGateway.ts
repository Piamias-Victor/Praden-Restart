import { CreateCheckoutDTO, PaymentGateway } from '@core/gateways/paymentGateway';

export class FakePaymentGateway implements PaymentGateway {
  createCheckoutSession(createCheckoutDTO: CreateCheckoutDTO): Promise<string> {
    return Promise.resolve(`/payment/new/${createCheckoutDTO.orderUuid}`);
  }
}
