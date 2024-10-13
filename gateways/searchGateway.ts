import { RealSearchGateway } from '@adapters/secondary/search-gateway/realSearchGateway'

export const searchGateway = () => {
  return new RealSearchGateway(
    'https://ecommerce-backend.admin-a5f.workers.dev'
  )
}
