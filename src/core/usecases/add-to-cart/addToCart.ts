import { ProductGateway } from '../../gateways/productGateway'
import { UUID } from '@core/types/types'
import { useCartStore } from '@store/cartStore'
import { useProductStore } from '@store/productStore'

export const addToCart = async (
  productUuid: UUID,
  productGateway: ProductGateway
) => {
  const cartStore = useCartStore()
  const productStore = useProductStore()
  cartStore.add(productUuid)
  const product = await productGateway.getByUuid(productUuid)
  console.log('product', product)
  productStore.add(product)
}
