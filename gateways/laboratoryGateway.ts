import { RealLaboratoryGateway } from '../src/adapters/secondary/laboratory-gateway/realLaboratoryGateway';

export const laboratoryGateway = () => {
  return new RealLaboratoryGateway('https://ecommerce-backend-production.admin-a5f.workers.dev');
};
