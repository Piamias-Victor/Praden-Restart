import { LaboratoryGateway } from '@core/gateways/laboratoryGateway';
import { SearchGateway } from '@core/gateways/searchGateway';
import { useLaboratoryStore } from '@store/laboratoryStore';
import { useSearchStore } from '@store/searchStore';
import { UUID } from 'crypto';

export const getLaboratory = async (uuid: UUID, laboratoryGateway: LaboratoryGateway, searchGateway: SearchGateway) => {
  const laboratoryStore = useLaboratoryStore();
  console.log('uuid', uuid);
  const productsWithFacets = await searchGateway.searchProduct(undefined, [uuid]);
  const facets = await searchGateway.searchFacet(undefined, [uuid]);
  console.log('productsWithFacets', productsWithFacets);
  const searchStore = useSearchStore();
  searchStore.setSearchResult(productsWithFacets);
  searchStore.setFacets(facets);
  // if (productsWithFacets) {
  //   searchStore.setCurrentCategory(uuid);
  //   searchStore.setProducts(productsWithFacets.items);
  //   searchStore.setFacets(productsWithFacets.facets);
  // } else {
  //   searchStore.reset();
  // }
};
