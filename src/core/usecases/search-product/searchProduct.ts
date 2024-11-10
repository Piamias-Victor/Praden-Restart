import { SearchGateway } from '@core/gateways/searchGateway'
import { useSearchStore } from '@store/searchStore'

export const searchProduct = async (
  query: string,
  searchGateway: SearchGateway
) => {
  const searchStore = useSearchStore()
  if (!query) {
    searchStore.setSearchResult([])
  } else {
    const products = await searchGateway.searchProduct(query)
    const facets = await searchGateway.searchFacet(query)
    searchStore.setFacets(facets)
    searchStore.setSearchResult(products)
  }
}
