import {
  InMemoryOrderGateway,
  FakeUUIDGenerator,
  RealDateProvider,
} from '@adapters/secondary/order-gateway/inMemoryOrderGateway';
import { StripePaymentGateway } from '@adapters/secondary/payment-gateway/stripePaymentGateway';

export const useOrderGateway = () => {
  // const { BACKEND_URL } = useRuntimeConfig().public
  // const orderGateway = new RealOrderGateway(BACKEND_URL)
  // const { STRIPE_API_KEY } = useRuntimeConfig()
  const orderGateway = new InMemoryOrderGateway(
    new FakeUUIDGenerator(),
    new StripePaymentGateway('test'),
    new RealDateProvider(),
  );
  orderGateway.feedWith();
  return orderGateway;
};
