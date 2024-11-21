import { UUID } from '@core/types/types';

export class DeliveryMethodDoesNotExistsError extends Error {
  constructor(uuid: UUID) {
    super(`DeliveryMethod ${uuid} does not exists`);
  }
}
