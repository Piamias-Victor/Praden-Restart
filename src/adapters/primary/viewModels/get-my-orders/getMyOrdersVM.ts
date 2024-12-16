import { User } from '@core/types/type';
import { useMyOrderStore } from '@store/myOrderStore';
import { useUserStore } from '@store/userStore';

export const getMyOrdersVM = (): any => {
  const myOrderStore = useMyOrderStore();
  const orders = myOrderStore.items;
  return orders;
};
