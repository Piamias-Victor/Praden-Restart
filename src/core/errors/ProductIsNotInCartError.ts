import { UUID } from '@core/types/types';

export class ProductIsNotInCartError extends Error {
  constructor(uuid: UUID) {
    super(`Product ${uuid} is not in the cart`);
  }
}
