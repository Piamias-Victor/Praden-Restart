// useOrderGateway.ts
import {
  RealOrderGateway,
  FakeUUIDGenerator,
  RealDateProvider,
} from '../src/adapters/secondary/order-gateway/RealOrderGateway';
import { StripePaymentGateway } from '@adapters/secondary/payment-gateway/stripePaymentGateway';

export const useOrderGateway = () => {
  const STRIPE_SECRET_KEY =
    process.env.STRIPE_SECRET_KEY ||
    'sk_test_51QX3QlGuxqvBq6HV7BzwHuV9QOc2d7UtYZwPef5M4LoWOJQwgytsdbUoJVOiDaU1bmZd45UDcHVnv6qrmhdUbOM2007qateo9k'; // Remplacez par la clé réelle en production

  const orderGateway = new RealOrderGateway(
    new FakeUUIDGenerator(),
    new StripePaymentGateway(STRIPE_SECRET_KEY),
    new RealDateProvider(),
  );
  orderGateway.feedWith(); // Ajoutez des commandes de test si nécessaire
  return orderGateway;
};
