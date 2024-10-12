import { HashTable } from '@core/types/type'
import { priceFormatter } from '@utils/formater'
import {
  CartItemVM,
  getProductsInCart,
  createCartItemsVMFromCartItems
} from '../get-cart/getCartVM'

export interface CheckoutCartVM {
  items: HashTable<CartItemVM>
  subTotal: string
  subTotalWithPromotion?: string
}

export class GetCheckoutCartVM {
  private items: HashTable<CartItemVM> = {}
  private total = 0
  private totalWithPromotion = 0
  private formatter = priceFormatter('fr-FR', 'EUR')

  constructor() {
    this.getCart()
  }

  get vm(): CheckoutCartVM {
    this.getCart()
    const res: CheckoutCartVM = {
      items: this.items,
      subTotal: this.formatter.format(this.total / 100)
    }
    if (this.totalWithPromotion != this.total) {
      res.subTotalWithPromotion = this.formatter.format(
        this.totalWithPromotion / 100
      )
    }
    return res
  }

  get totalPrice(): number {
    return this.total
  }

  get totalPriceWithPromotion(): number {
    return this.totalWithPromotion
  }

  get isValid(): boolean {
    return this.total !== 0
  }

  private getCart(): void {
    const { items, total, totalWithPromotion } = getProductsInCart()
    this.items = createCartItemsVMFromCartItems(items)
    this.total = total
    this.totalWithPromotion = totalWithPromotion
  }
}
