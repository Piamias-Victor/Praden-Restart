import { ProductGateway } from '../../gateways/productGateway'
import { UUID } from '@core/types/types'
import { useLikeStore } from '@store/likeStore'
import { useProductStore } from '@store/productStore'

export const addToFavorite = async (
  productUuid: UUID,
  productGateway: ProductGateway
) => {
  const likeStore = useLikeStore()
  const productStore = useProductStore()
  likeStore.add(productUuid)
  const product = await productGateway.getByUuid(productUuid)
  productStore.add(product)
}

export const removeFromFavorite = async (productUuid: UUID) => {
  const likeStore = useLikeStore()
  likeStore.remove(productUuid)
}
