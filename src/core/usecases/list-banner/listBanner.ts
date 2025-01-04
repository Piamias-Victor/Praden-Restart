import { Laboratory } from '@core/entities/laboratory';
import { LaboratoryGateway } from '@core/gateways/laboratoryGateway';
import { useLaboratoryStore } from '@store/laboratoryStore';
import { UUID } from 'crypto';
import { BannerGateway } from '@core/gateways/bannerGateway';
import { useBannerStore } from '@store/bannerStore';

export const listBanner = async (bannerGateway: BannerGateway) => {
  const banner: Array<any> = await bannerGateway.get();
  const bannerStore = useBannerStore();
  bannerStore.list(banner);
};
