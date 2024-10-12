import { ProductGateway } from '@core/gateways/productGateway'
import { UUID } from '@core/types/types'
import { useProductStore } from '@store/productStore'

export const getProduct = async (
  productUuid: UUID,
  productGateway: ProductGateway
) => {
  console.log('product test1')
  const product = await productGateway.getByUuid(productUuid)
  console.log('product test', product)
  const productStore = useProductStore()
  productStore.setCurrent(product)
}
