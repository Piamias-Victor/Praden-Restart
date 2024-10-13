import { useSearchStore } from '@store/searchStore'
import { priceFormatter } from '@utils/formater'
import { ProductItemVM, getPromotionVM } from '../get-category/getCategoryVM'

type GetSearchResultItemVM = ProductItemVM

export interface GetSearchResultVM {
  items: Array<GetSearchResultItemVM>
}
export const getSearchResultVM = (): GetSearchResultVM => {
  const searchStore = useSearchStore()
  const products = searchStore.result
  const formatter = priceFormatter('fr-FR', 'EUR')
  if (products.length === 0) return { items: [] }
  return {
    items: products.map((p) => {
      const promotion = getPromotionVM(p)
      const res: GetSearchResultItemVM = {
        uuid: p.uuid,
        name: p.name,
        laboratory: p.laboratory,
        images: p.images,
        price: formatter.format(p.priceWithTax / 100),
        href: `/products/${p.uuid}`
      }
      if (promotion) {
        res.promotion = promotion
      }
      return res
    })
  }
}
