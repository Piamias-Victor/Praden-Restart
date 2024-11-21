import { defineStore } from 'pinia';
import { Product, ProductSearch } from '@core/entities/product';
import { Facets, Filters, UUID } from '@core/types/type';

const defaultProducts: any = [];
const defaultFacets: Partial<Facets> = {};
const defaultFilters: Partial<Filters> = {};

export const useSearchStore = defineStore('SearchStore', {
  state: () => {
    return {
      currentCategory: undefined as UUID | undefined,
      products: defaultProducts,
      facets: defaultFacets,
      filters: defaultFilters,
      resultSet: new Set() as Set<ProductSearch>,
    };
  },
  getters: {
    result: (state) => {
      return Array.from(state.resultSet);
    },
  },
  actions: {
    setCurrentCategory(uuid: UUID) {
      this.currentCategory = uuid;
    },
    setProducts(products: Array<ProductSearch>) {
      this.products = products;
    },
    setFacets(facets: Partial<Facets>) {
      this.facets = facets;
    },
    setFilters(filters: Partial<Filters>) {
      this.filters = Object.assign(this.filters, filters);
    },
    reset() {
      this.products = defaultProducts;
      this.facets = defaultFacets;
      this.filters = Object.assign({}, defaultFilters);
      this.currentCategory = '';
    },
    setSearchResult(products: Array<ProductSearch>) {
      this.resultSet = new Set(products);
    },
  },
});
