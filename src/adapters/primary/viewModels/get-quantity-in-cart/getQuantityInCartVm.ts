import { Product } from '@core/entities/product'
import { HashTable, UUID } from '@core/types/type'
import { useCartStore } from '@store/cartStore'
import { useProductStore } from '@store/productStore'

export interface CartQuantityVM {
  items: HashTable<number>
  totalQuantity: number
  medecine: boolean
}

export const getCartQuantityVM = (): CartQuantityVM => {
  const cartStore = useCartStore()
  const productStore = useProductStore()
  const cartItems = cartStore.items
  const products = productStore.items
  const productsInCart = cartItems.map((uuid: UUID) =>
    products.find((product: Product) => uuid === product.uuid)
  )
  return productsInCart.reduce(
    (acc: CartVM, p: Product) => {
      let quantity = 1
      let totalQuantity = acc.totalQuantity
      totalQuantity++
      if (acc.items[p.uuid]) {
        quantity = acc.items[p.uuid] + 1
      }
      return {
        items: {
          ...acc.items,
          [p.uuid]: quantity
        },
        totalQuantity
      }
    },
    { items: {}, totalQuantity: 0, medecine: false } as CartQuantityVM
  )
}
