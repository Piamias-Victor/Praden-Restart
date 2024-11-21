import { Product, ProductDetail } from '@core/entities/product';
import { UUID } from '@core/types/type';

export interface ProductGateway {
  listBestSales(): Promise<Array<UUID>>;
  listPromotions(): Promise<Array<UUID>>;
  list(): Promise<Array<Product>>;
  getByUuid(uuid: UUID): Promise<ProductDetail>;
}
