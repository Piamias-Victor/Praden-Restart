import { useSearchStore } from '@store/searchStore'
import { priceFormatter } from '@utils/formater'
import { ProductItemVM, getPromotionVM } from '../get-category/getCategoryVM'

type GetSearchResultItemVM = ProductItemVM

export interface GetSearchResultVM {
  items: Array<GetSearchResultItemVM>
  facets: any
}
export const getSearchResultVM = (): GetSearchResultVM => {
  const searchStore = useSearchStore()
  const products = searchStore.result
  const facets = searchStore.facets
  const formatter = priceFormatter('fr-FR', 'EUR')
  if (products.length === 0) return { items: [] }
  return (
    {
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
      }),
      facets
    }
  )
}

export const getSearchResultVMFirstSix = (
  excludeUuid: string
): GetSearchResultVM => {
  const searchStore = useSearchStore()
  const products = searchStore.result
  const formatter = priceFormatter('fr-FR', 'EUR')

  // Si aucun produit, renvoyer un tableau vide
  if (products.length === 0) return { items: [] }

  // Filtrer les produits pour exclure celui avec l'uuid spécifié
  const filteredProducts = products.filter((p) => p.uuid !== excludeUuid)

  // Retourner les 6 premiers produits après filtrage
  return {
    items: filteredProducts.slice(0, 6).map((p) => {
      // Utilisation de slice(0, 6) pour prendre les 6 premiers produits
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
