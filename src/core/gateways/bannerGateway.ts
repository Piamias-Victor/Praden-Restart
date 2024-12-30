import { UUID } from '@core/types/types';

export interface BannerGateway {
  get(): Promise<any>;
}
