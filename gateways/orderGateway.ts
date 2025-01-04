// useOrderGateway.ts
import { useRuntimeConfig } from 'nuxt/app';
import {
  RealOrderGateway,
  FakeUUIDGenerator,
  RealDateProvider,
} from '../src/adapters/secondary/order-gateway/RealOrderGatewayTest';
import { StripePaymentGateway } from '@adapters/secondary/payment-gateway/stripePaymentGateway';

export const useOrderGateway = () => {
  const {
    public: { STRIPE_SECRET_KEY },
  } = useRuntimeConfig();
  const orderGateway = new RealOrderGateway(
    new FakeUUIDGenerator(),
    new StripePaymentGateway(STRIPE_SECRET_KEY),
    new RealDateProvider(),
  );
  orderGateway.feedWith(); // Ajoutez des commandes de test si nécessaire
  return orderGateway;
};
