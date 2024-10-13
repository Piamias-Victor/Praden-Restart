import { DeliveryMethod } from '@core/entities/deliveryMethod'
import { useDeliveryStore } from '@store/deliveryStore'
import { priceFormatter } from '@utils/formater'
import { sortByPrice, SortType } from '@utils/sort'
import { express } from '../../../../../gateways/deliveryGateway'
import { getCartVM, getProductsInCart } from '../get-cart/getCartVM'

export interface CheckoutDeliveryMethodVM {
  name: string
  description: string
  price: string
}

export interface SelectedDeliveryMethodVM {
  uuid: UUID
  name: string
  price: string
}

export interface CheckoutDeliveryVM {
  methods: Array<CheckoutDeliveryMethodVM>
  selected: SelectedDeliveryMethodVM | undefined
}

export const getDeliveryMethods = (
  method: DeliveryMethod
): SelectedDeliveryMethodVM => {
  const formatter = priceFormatter('fr-FR', 'EUR')
  return {
    uuid: method.uuid,
    name: method.name,
    price: method.price === 0 ? 'Gratuit' : formatter.format(method.price / 100)
  }
}

export const getDeliveryVM = (): CheckoutDeliveryVM => {
  const formatter = priceFormatter('fr-FR', 'EUR')
  const deliveryStore = useDeliveryStore()
  const cart = getProductsInCart()
  const deliveryMethods = JSON.parse(JSON.stringify(deliveryStore.items))
  deliveryMethods.sort(sortByPrice(SortType.Asc))
  return {
    methods: deliveryMethods.map((method: DeliveryMethod) => {
      return {
        uuid: method.uuid,
        name: method.name,
        description: method.description,
        type: method.type,
        price:
          method.price === 0 ||
          (cart.total > 6900 && method.uuid === 'relais-uuid')
            ? 'Gratuit'
            : formatter.format(method.price / 100)
      }
    }),
    selected: getDeliveryMethods(deliveryMethods[0])
  }
}
