// import { RealbannerGateway } from '../src/adapters/secondary/banner-gateway/realBannerGateway.js';

import { RealBannerGateway } from '../src/adapters/secondary/banner-gateway/realBannerGateway';

export const bannerGateway = () => {
  return new RealBannerGateway('https://ecommerce-backend-production.admin-a5f.workers.dev');
};
