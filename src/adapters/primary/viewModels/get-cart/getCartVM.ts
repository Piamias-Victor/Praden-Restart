import { getProductPriceWithPromotion, Product } from '@core/entities/product'
import { HashTable, UUID } from '@core/types/type'
import { useCartStore } from '@store/cartStore'
import { useProductStore } from '@store/productStore'
import { priceFormatter } from '@utils/formater'

export interface CartItemVM {
  uuid: UUID
  name: string
  brand: string
  totalPrice: string
  totalPriceWithPromotion?: string
  quantity: number
  img: string
}

export interface CartVM {
  items: HashTable<CartItemVM>
  totalPrice: string
  totalPriceWithPromotion?: string
}

export interface CartItem {
  uuid: UUID
  name: string
  brand: string
  unitPrice: number
  quantity: number
  totalPrice: number
  totalPriceWithPromotion?: number
  img: string
  medecine?: boolean
}

export interface ProductsInCart {
  items: HashTable<CartItem>
  total: number
  totalWithPromotion: number
}

export const getProductsInCart = (): ProductsInCart => {
  const cartStore = useCartStore()
  const productStore = useProductStore()
  const cartItems = cartStore.items
  const products = productStore.items
  const productsInCart = cartItems.map((uuid: UUID) =>
    products.find((product: Product) => uuid === product.uuid)
  )
  return productsInCart.reduce(
    (acc: ProductsInCart, p: Product) => {
      let quantity = 1
      let total = acc.total
      let totalWithPromotion = acc.totalWithPromotion

      total += p.price
      const priceWithPromotion = getProductPriceWithPromotion(p)
      totalWithPromotion += priceWithPromotion || p.price
      if (acc.items[p.uuid]) {
        quantity = acc.items[p.uuid].quantity + 1
      }
      return {
        items: {
          ...acc.items,
          [p.uuid]: {
            uuid: p.uuid,
            name: p.name,
            brand: p.brand.toUpperCase(),
            unitPrice: p.price,
            totalPrice: p.price * quantity,
            totalPriceWithPromotion: priceWithPromotion! * quantity,
            quantity,
            img: p.img
          }
        },
        total,
        totalWithPromotion
      }
    },
    { items: {}, total: 0, totalWithPromotion: 0 } as ProductsInCart
  )
}

export const createCartItemsVMFromCartItems = (
  items: HashTable<CartItem>
): HashTable<CartItemVM> => {
  const formatter = priceFormatter('fr-FR', 'EUR')
  const itemsVM: HashTable<CartItemVM> = {}
  Object.keys(items).forEach((key) => {
    const item = items[key]
    itemsVM[key] = {
      uuid: item.uuid,
      name: item.name,
      brand: item.brand,
      totalPrice: formatter.format(item.totalPrice / 100),
      quantity: item.quantity,
      img: item.img
    }
    if (item.totalPriceWithPromotion) {
      itemsVM[key].totalPriceWithPromotion = formatter.format(
        item.totalPriceWithPromotion / 100
      )
    }
  })
  return itemsVM
}

export const getCartVM = (): CartVM => {
  const formatter = priceFormatter('fr-FR', 'EUR')
  const { items, total, totalWithPromotion } = getProductsInCart()
  const res: CartVM = {
    items: createCartItemsVMFromCartItems(items),
    totalPrice: formatter.format(total / 100)
  }
  if (total != totalWithPromotion) {
    res.totalPriceWithPromotion = formatter.format(totalWithPromotion / 100)
  }
  return res
}
