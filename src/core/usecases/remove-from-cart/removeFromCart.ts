import { UUID } from '@core/types/types';
import { useCartStore } from '@store/cartStore';

export const removeFromCart = async (productUuid: UUID) => {
  const cartStore = useCartStore();
  cartStore.remove(productUuid);
};
