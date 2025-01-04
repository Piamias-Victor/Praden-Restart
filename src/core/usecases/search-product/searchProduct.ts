import { SearchGateway } from '@core/gateways/searchGateway';
import { useSearchStore } from '@store/searchStore';

export const searchProduct = async (query: string, searchGateway: SearchGateway, laboratoryUuids?: Array<string>) => {
  const searchStore = useSearchStore();
  if (!query) {
    searchStore.setSearchResult([]);
  } else {
    const products = await searchGateway.searchProduct(query, laboratoryUuids);
    const facets = await searchGateway.searchFacet(query, laboratoryUuids);
    searchStore.setFacets(facets);
    searchStore.setSearchResult(products);
  }
};

export const searchPromotion = async (searchGateway: SearchGateway, laboratoryUuids?: Array<string>) => {
  const searchStore = useSearchStore();
  const products = await searchGateway.searchProduct('', laboratoryUuids, 200, 'true');
  const facets = await searchGateway.searchFacet('', laboratoryUuids, 200, 'true');
  searchStore.setFacets(facets);
  searchStore.setSearchResult(products);
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
