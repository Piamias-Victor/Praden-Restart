import { RealmyOrderGateway } from '../src/adapters/secondary/order-gateway/realmyOrderGateway';

export const myOrderGateway = () => {
  return new RealmyOrderGateway('https://ecommerce-backend-production.admin-a5f.workers.dev');
};
