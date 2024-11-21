import { SearchGateway } from '@core/gateways/searchGateway';
import { useSearchStore } from '@store/searchStore';

export const searchProduct = async (query: string, searchGateway: SearchGateway) => {
  const searchStore = useSearchStore();
  if (!query) {
    searchStore.setSearchResult([]);
  } else {
    const products = await searchGateway.searchProduct(query);
    const facets = await searchGateway.searchFacet(query);
    searchStore.setFacets(facets);
    searchStore.setSearchResult(products);
  }
};

export const searchLaboratory = async (laboratoryUuids: string | Array<string>, searchGateway: SearchGateway) => {
  const searchStore = useSearchStore();
  if (!laboratoryUuids || (Array.isArray(laboratoryUuids) && laboratoryUuids.length === 0)) {
    searchStore.setSearchResult([]);
  } else {
    const uuidsArray = Array.isArray(laboratoryUuids) ? laboratoryUuids : [laboratoryUuids];

    const options = {
      laboratoryUuids: uuidsArray,
    };

    const products = await searchGateway.searchProduct('', options);
    const facets = await searchGateway.searchFacet(options);
    searchStore.setFacets(facets);
    searchStore.setSearchResult(products);
  }
};
