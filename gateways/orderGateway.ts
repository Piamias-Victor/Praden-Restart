// useOrderGateway.ts
import { useRuntimeConfig } from 'nuxt/app';
import {
  RealOrderGateway,
  FakeUUIDGenerator,
  RealDateProvider,
} from '../src/adapters/secondary/order-gateway/RealOrderGatewayTest';
import { CreditAgricolePaymentGateway } from '../src/adapters/secondary/payment-gateway/CreditAgricolePaymentGateway';

export const useOrderGateway = () => {
  const {
    public: { STRIPE_SECRET_KEY },
  } = useRuntimeConfig();
  const orderGateway = new RealOrderGateway(
    new FakeUUIDGenerator(),
    new CreditAgricolePaymentGateway(STRIPE_SECRET_KEY),
    new RealDateProvider(),
  );
  orderGateway.feedWith(); // Ajoutez des commandes de test si nécessaire
  return orderGateway;
};
