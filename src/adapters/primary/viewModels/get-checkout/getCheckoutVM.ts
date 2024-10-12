import { UUID } from '@core/types/types'
import {
  CheckoutCartVM,
  GetCheckoutCartVM
} from '@adapters/primary/viewModels/get-checkout/GetCheckoutCartVM'
import {
  CheckoutContactVM,
  GetCheckoutContactVM
} from '@adapters/primary/viewModels/get-checkout/GetCheckoutContactVM'
import {
  CheckoutDeliveryVM,
  GetCheckoutDeliveryVM
} from '@adapters/primary/viewModels/get-checkout/GetCheckoutDeliveryVM'
import {
  CheckoutShippingAddressVM,
  GetCheckoutShippingAddressVM
} from '@adapters/primary/viewModels/get-checkout/GetCheckoutShippingAddressVM'
import { priceFormatter } from '@utils/formater'

export interface CheckoutVM {
  cart: CheckoutCartVM
  contact: CheckoutContactVM
  shippingAddress: CheckoutShippingAddressVM
  delivery: CheckoutDeliveryVM
  total: string
  totalWithPromotion?: string
  canValidate: boolean
}

export class GetCheckoutVM {
  private _contactVM: GetCheckoutContactVM = new GetCheckoutContactVM()
  private _cartVM: GetCheckoutCartVM = new GetCheckoutCartVM()
  private _deliveryVM: GetCheckoutDeliveryVM = new GetCheckoutDeliveryVM()
  private _shippingAddressVM: GetCheckoutShippingAddressVM =
    new GetCheckoutShippingAddressVM()
  private _total = 0
  private _totalWithPromotion = 0
  private formatter = priceFormatter('fr-FR', 'EUR')

  get cart(): CheckoutCartVM {
    return this._cartVM.vm
  }

  get total(): string {
    this.computeTotal()
    return this.formatter.format(this._total / 100)
  }

  get totalWithPromotion(): string | undefined {
    this.computeTotal()
    if (this._total === this._totalWithPromotion) return undefined
    return this.formatter.format(this._totalWithPromotion / 100)
  }

  get isValidateEnabled(): boolean {
    return this.canValidate()
  }

  get shippingAddress(): CheckoutShippingAddressVM {
    return this._shippingAddressVM.vm
  }

  get delivery(): CheckoutDeliveryVM {
    return this._deliveryVM.vm
  }

  get contact(): CheckoutContactVM {
    return this._contactVM.vm
  }

  set email(email: string) {
    this._contactVM.email = email
  }

  set firstname(firstname: string) {
    this._shippingAddressVM.firstname = firstname
  }

  set lastname(lastname: string) {
    this._shippingAddressVM.lastname = lastname
  }

  set country(country: string) {
    this._shippingAddressVM.country = country
  }

  set address(address: string) {
    this._shippingAddressVM.address = address
  }

  set appartement(appartement: string) {
    this._shippingAddressVM.appartement = appartement
  }

  set city(city: string) {
    this._shippingAddressVM.city = city
  }

  set zip(zip: string) {
    this._shippingAddressVM.zip = zip
  }

  set phone(phone: string) {
    this._contactVM.phone = phone
  }

  set deliveryMethod(methodUuid: UUID) {
    this._deliveryVM.deliveryMethod = methodUuid
  }

  private computeTotal() {
    const subTotal = this._cartVM.totalPrice
    const subTotalWithPromotion = this._cartVM.totalPriceWithPromotion
    const shippingPrice = this._deliveryVM.shippingPrice
    this._total = subTotal + shippingPrice
    this._totalWithPromotion = subTotalWithPromotion + shippingPrice
  }

  private canValidate(): boolean {
    return (
      this._cartVM.isValid &&
      this._contactVM.isValid &&
      this._shippingAddressVM.isValid &&
      this._deliveryVM.isValid
    )
  }
}

export const getCheckoutVM = (): GetCheckoutVM => {
  return new GetCheckoutVM()
}
