import { RealCategoryGateway } from '../src/adapters/secondary/category-gateway/realCategoryGateway';

export const categoryGateway = () => {
  return new RealCategoryGateway('https://ecommerce-backend-production.admin-a5f.workers.dev');
};
