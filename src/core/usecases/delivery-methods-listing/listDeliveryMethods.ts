import { DeliveryMethod } from '@core/entities/deliveryMethod'
import { DeliveryGateway } from '@core/gateways/deliveryGateway'
import { useDeliveryStore } from '@store/deliveryStore'

export const listDeliveryMethods = async (deliveryGateway: DeliveryGateway) => {
  const methods = await deliveryGateway.listMethods()
  const deliveryStore = useDeliveryStore()
  deliveryStore.list(methods)
  deliveryStore.setSelected(methods[2])
}

export const selectDeliveryMethods = (method: DeliveryMethod) => {
  const deliveryStore = useDeliveryStore()
  deliveryStore.setSelected(
    deliveryStore.items.find(
      (deliveryMethod: DeliveryMethod) => method.uuid === deliveryMethod.uuid
    )
  )
}
