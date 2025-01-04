import { User } from '@core/types/type';
import { useMyOrderStore } from '@store/myOrderStore';
import { useUserStore } from '@store/userStore';
import { useBannerStore } from '@store/bannerStore';

export const getBannerVM = () => {
  const bannerStore = useBannerStore();

  // Utilisation de `computed` pour garantir la réactivité
  const banners = computed(() => bannerStore.items);

  return banners;
};
