import { RealProductGateway } from '@adapters/secondary/product-gateway/realProductGateway'

export const useProductGateway = () => {
  return new RealProductGateway(
    'https://ecommerce-backend.admin-a5f.workers.dev'
  )
}
