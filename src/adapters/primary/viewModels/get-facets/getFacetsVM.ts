import { Category } from '@core/entities/category'
import { useSearchStore } from '@store/searchStore'
import { sortByName } from '@utils/sort'
import {
  FacetOptionVM,
  FacetVM,
  FacetItemVMType
} from '../get-category/getCategoryVM'
import { laboratoryFacet } from '@core/types/type'

const createCategoryOptionVM = (c: Category): FacetOptionVM => {
  const searchStore = useSearchStore()
  return {
    label: c.name.toUpperCase(),
    value: c.uuid,
    checked: !searchStore.filters?.categories?.find((cf) => cf === c.uuid)
  }
}

const createlaboratoryOptionVM = (b: laboratoryFacet): FacetOptionVM => {
  const searchStore = useSearchStore()
  return {
    label: `${b.name.toUpperCase()} (${b.quantity})`,
    value: b.name,
    checked: !searchStore.filters?.laboratorys?.find((bf) => bf === b.name)
  }
}

const createOptionVM = (key: string, item: any) => {
  if (key === 'laboratorys') {
    return createlaboratoryOptionVM(item)
  }
  return createCategoryOptionVM(item)
}

const getFacetName = (key: string) => {
  if (key === 'laboratorys') return 'Marques'
  return 'Categories'
}

const getFacetValue = (key: string) => {
  if (key === 'subCategories') return 'categories'
  return key
}

export interface GetFacetsVM {
  items: Array<FacetVM>
}

export const getFacetsVM = (): GetFacetsVM => {
  const searchStore = useSearchStore()
  return {
    items: Object.keys(searchStore.facets).map((key) => {
      // @ts-ignore
      const items = searchStore.facets[key]
      items.sort(sortByName)
      return {
        name: getFacetName(key),
        type: FacetItemVMType.Choice,
        value: getFacetValue(key),
        options: items.map((i: any) => createOptionVM(key, i))
      }
    })
  }
}
