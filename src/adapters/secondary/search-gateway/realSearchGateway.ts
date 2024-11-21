import { Product } from '@core/entities/product';
import { SearchGateway } from '@core/gateways/searchGateway';
import { ProductsWithFacets, Filters, UUID } from '@core/types/type';
import axios from 'axios';

export class RealGateway {
  protected readonly baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }
}

export class RealSearchGateway extends RealGateway implements SearchGateway {
  constructor(baseUrl: string) {
    super(baseUrl);
  }

  async getCategory(categoryUuid: UUID): Promise<ProductsWithFacets> {
    const res = await axios.get(`${this.baseUrl}/search/products-for-category/${categoryUuid}/?size=200`);
    return Promise.resolve(res.data);
  }

  async search(categoryUuid: UUID, filters: Partial<Filters>): Promise<Array<Product>> {
    const body = {
      laboratories: filters.laboratorys,
      subCategories: filters.categories,
    };
    const res = await axios.get(`${this.baseUrl}/products-for-category/${categoryUuid}/`);
    return Promise.resolve(res.data.products);
  }

  async searchProduct(
    query: string,
    options?: {
      laboratoryUuids?: Array<string>;
      size?: number;
      isInPromotion?: string;
    },
  ): Promise<Array<Product>> {
    try {
      console.log('Options reçues dans searchProduct:', options); // Ajoutez ce log

      const payload = {
        query: query || undefined,
        laboratoryUuids: options?.laboratoryUuids || undefined,
        size: options?.size || undefined,
        isInPromotion: options?.isInPromotion || undefined,
      };

      console.log('Payload construit pour searchProduct:', payload); // Ajoutez ce log

      const res = await axios.post(`${this.baseUrl}/search/products`, payload);

      console.log('res :', res);
      return Promise.resolve(res.data.items);
    } catch (error) {
      console.error('Erreur lors de la récupération des produits :', error);
      return Promise.reject(error);
    }
  }

  async searchFacet(
    query?: string,
    options?: {
      laboratoryUuids?: Array<string>;
      size?: number;
      isInPromotion?: string;
    },
  ): Promise<Array<any>> {
    try {
      const payload = {
        query: query || undefined, // Inclure seulement si `query` est défini
        laboratoryUuids: options?.laboratoryUuids || undefined,
        size: options?.size || undefined,
        isInPromotion: options?.isInPromotion || undefined,
      };

      console.log('laboratoryUuids', payload.laboratoryUuids);

      const res = await axios.post(`${this.baseUrl}/search/products`, payload);

      return Promise.resolve(res.data.facets);
    } catch (error) {
      console.error('Erreur lors de la récupération des facettes :', error);
      return Promise.reject(error);
    }
  }
}
