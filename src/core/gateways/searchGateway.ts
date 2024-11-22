import { Product } from '@core/entities/product';
import { Filters, ProductsWithFacets, UUID } from '@core/types/type';

export interface SearchGateway {
  getCategory(categoryUuid: UUID): Promise<ProductsWithFacets>;
  search(categoryUuid: UUID, filters: Partial<Filters>): Promise<Array<Product>>;
  searchProduct(
    query?: string,
    laboratoryUuids?: Array<string>,
    size?: number,
    isInPromotion?: string,
  ): Promise<Array<Product>>;
  searchFacet(query?: string, laboratoryUuids?: Array<string>, size?: number, isInPromotion?: string): any;
}
