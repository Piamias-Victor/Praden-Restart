import { useCartStore } from '@store/cartStore'

export const removeAllItemFromCartByUuid = async (productUuid: UUID) => {
  console.log('ici')
  const cartStore = useCartStore()
  cartStore.removeAllItemByUuid(productUuid)
}
