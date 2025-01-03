// useOrderGateway.ts
import { useRuntimeConfig } from 'nuxt/app';
import {
  RealOrderGateway,
  FakeUUIDGenerator,
  RealDateProvider,
} from '../src/adapters/secondary/order-gateway/RealOrderGatewayTest';
import { StripePaymentGateway } from '@adapters/secondary/payment-gateway/stripePaymentGateway';

export const useOrderGateway = () => {
  // const STRIPE_SECRET_KEY = "sk_test_51Qc3eEP2AD3Jx99Ykwucclq2og4003IujgMNq2QOqprVnO0rvVbF6gVEBFn2bymcRCerDGytvziuzd4Gu5DoI1hl00wGkQFzFv"
  const { public: { STRIPE_SECRET_KEY } } = useRuntimeConfig();
  console.log('STRIPE_SECRET_KEY', STRIPE_SECRET_KEY);

  const orderGateway = new RealOrderGateway(
    new FakeUUIDGenerator(),
    new StripePaymentGateway(STRIPE_SECRET_KEY),
    new RealDateProvider(),
  );
  orderGateway.feedWith(); // Ajoutez des commandes de test si nécessaire
  return orderGateway;
};
