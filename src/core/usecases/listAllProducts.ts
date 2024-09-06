import { ProductGateway } from '@core/gateways/productGateway'
import { useProductStore } from '@store/productStore'

export const listAllProducts = async (productGateway: ProductGateway) => {
  const productStore = useProductStore()
  const products = await productGateway.list()
  productStore.list(products)
}
