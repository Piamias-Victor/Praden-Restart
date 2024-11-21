import { useCartStore } from '@store/cartStore';

export const removeAllItemFromCartByUuid = async (productUuid: UUID) => {
  const cartStore = useCartStore();
  cartStore.removeAllItemByUuid(productUuid);
};
