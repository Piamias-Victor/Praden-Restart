import { useCartStore } from '@store/cartStore';

export const removeAllFromCart = async () => {
  const cartStore = useCartStore();
  cartStore.removeAll();
};
