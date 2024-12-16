import { UUID } from '@core/types/types';

export interface MyOrderGateway {
  listAll(): Promise<Array<any>>;
}
