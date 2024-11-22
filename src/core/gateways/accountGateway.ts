import { User } from '@core/types/types';

export interface UserGateway {
  listUser(): Promise<Array<User>>;
  returnIsConnected(): Promise<boolean>;
}
