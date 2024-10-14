import { ProductDetail } from '@core/entities/product'
import { UUID } from '@core/types/type'
import { useProductStore } from '@store/productStore'
import { useSearchStore } from '@store/searchStore'
import { priceFormatter } from '@utils/formater'

export interface Image {
  src: string
  alt: string
}

export interface ProductDetailVM {
  uuid: UUID
  name: string
  laboratory: string
  price: string
  promotion?: any
  images: Array<Image>
  description: string
  rating?: number
  notice?: string
  details: Array<any>
}

const getDetails = (product: ProductDetail | undefined): Array<any> => {
  const details = []
  if (product?.instructionsForUse) {
    details.push({
      name: "Conseils d'utilisation",
      value: product.instructionsForUse
    })
  }
  if (product?.composition) {
    details.push({
      name: 'Composition',
      value: product.composition
    })
  }
  if (product?.notice) {
    details.push({
      name: 'Notice',
      value: product.notice
    })
  }
  return details
}

export const getProductVM = (): ProductDetailVM => {
  const productStore = useProductStore()
  const product = productStore.current
  const formatter = priceFormatter('fr-FR', 'EUR')
  const details = getDetails(product)
  const res: ProductDetailVM = {
    uuid: product?.uuid || '',
    name: product?.name || '',
    laboratory: product?.laboratory || '',
    price: product ? formatter.format(product.price / 100) : '',
    images: product ? [{ src: product.images, alt: product?.name }] : [],
    description: product?.description || '',
    rating: product?.rating,
    details
  }
  return res
}

export const getSearchProductVM = () => {
  const searchStore = useSearchStore()
  const product = searchStore.products
  const formatter = priceFormatter('fr-FR', 'EUR')
  const details = getDetails(product)
  const res = {
    uuid: product?.uuid || '',
    name: product?.name || '',
    laboratory: product?.laboratory || '',
    price: product ? formatter.format(product.priceWithTaxe / 100) : '',
    images: product ? [{ src: product.images, alt: product?.name }] : []
  }
  return res
}
