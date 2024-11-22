import { User } from '@core/types/type';
import { useUserStore } from '@store/userStore';

export const logoutUser = () => {
  const userStore = useUserStore();
  userStore.disconnect();
};
