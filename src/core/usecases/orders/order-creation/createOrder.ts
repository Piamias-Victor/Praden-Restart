import { Address, Contact, Order, OrderLine } from '@core/entities/order'
import { pickup } from '../../../../../gateways/deliveryGateway'
import { EmailGateway } from './emailGateway'
import { DeliveryMethod } from '@core/entities/deliveryMethod'
import { useDeliveryStore } from '@store/deliveryStore'
import { UUID } from 'crypto'
import { ProductGateway } from '@core/gateways/productGateway'
import { OrderGateway } from '@core/gateways/orderGateway'
import { WindowGateway } from '@core/gateways/windowGateway'
import { useOrderStore } from '@store/orderStore'
import { useCartStore } from '@store/cartStore'
import { getProductsInCart } from '@adapters/primary/viewModels/get-cart/getCartVM'

export type CreateOrderLineDTO = Omit<OrderLine, 'deliveryStatus' | 'updatedAt'>

export type CreateOrderDTO = Pick<
  Order,
  'delivery' | 'contact' | 'deliveryAddress'
> & {
  lines: Array<CreateOrderLineDTO>
}
export interface FullAddress {
  firstname: string
  lastname: string
  country: string
  address: string
  appartement?: string
  city: string
  zip: string
}

export const createOrder = async (
  email: string,
  phone: string,
  deliveryMethodUuid: UUID,
  deliveryAddress: FullAddress,
  orderGateway: OrderGateway,
  productGateway: ProductGateway,
  windowGateway: WindowGateway,
  emailGateway: EmailGateway
) => {
  const { items } = getProductsInCart()
  console.log('items', items)
  const lines: Array<CreateOrderLineDTO> = await Promise.all(
    Object.keys(items).map(async (key) => {
      const item = items[key]
      const product = await productGateway.getByUuid(item.uuid)
      console.log('product', product)
      const res: CreateOrderLineDTO = {
        productUuid: product.uuid,
        name: item.name,
        unitAmount: item.unitPrice,
        quantity: item.quantity,
        description: product.description,
        img: product.images
      }
      if (product.promotions) {
        res.promotion = product.promotions[0]
      }
      return res
    })
  )
  console.log('lines', lines)
  const orderLines = await Promise.all(
    Object.keys(items).map(async (key) => {
      const item = items[key]
      const product = await productGateway.getByUuid(item.uuid)
      const res = {
        productUuid: product.uuid,
        quantity: item.quantity
      }
      return res
    })
  )
  const deliveryStore = useDeliveryStore()
  const deliveryMethod = deliveryStore.getByUuid(deliveryMethodUuid)
  const orderDTO: CreateOrderDTO = {
    contact: {
      email,
      phone
    },
    lines,
    delivery: {
      method: deliveryMethod
    },
    deliveryAddress: {
      firstname: deliveryAddress.firstname,
      lastname: deliveryAddress.lastname,
      address: deliveryAddress.address,
      appartement: deliveryAddress.appartement,
      zip: deliveryAddress.zip,
      city: deliveryAddress.city
    }
  }

  const orderNew = {
    lines: orderLines,
    deliveryMethodUuid: deliveryMethod.uuid,
    deliveryAddress: {
      firstname: deliveryAddress.firstname,
      lastname: deliveryAddress.lastname,
      address: deliveryAddress.address,
      city: deliveryAddress.city,
      zip: deliveryAddress.zip
    },
    contact: {
      email: email,
      phone: phone
    }
  }

  try {
    const response = await fetch(
      'https://ecommerce-backend.admin-a5f.workers.dev/orders',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(orderNew)
      }
    )

    if (!response.ok) {
      const errorMessage = await response.text()
      throw new Error(`Error: ${response.status} - ${errorMessage}`)
    }

    const result = await response.json()
  } catch (error) {
    console.error('Error sending order:', error)
  }

  const order = await orderGateway.create(orderDTO)
  console.log('order', order)
  const orderStore = useOrderStore()
  orderStore.add(order)
  clearCart()
  const sendOrderConfirmationDTO: SendOrderConfirmationDTO = {
    orderUuid: order.uuid,
    contact: order.contact,
    shippingAddress: order.deliveryAddress,
    billingAddress: order.deliveryAddress,
    orderLines: order.lines,
    deliveryMethod: order.delivery.method
  }
  await emailGateway.sendOrderConfirmation(sendOrderConfirmationDTO)
}

const clearCart = () => {
  const cartStore = useCartStore()
  cartStore.removeAll()
}

export const addressTest = {
  firstname: 'Victor',
  lastname: 'Piamias',
  address: '165 chemin des negadoux',
  city: 'Toulon',
  zip: '83000',
  appartement: '2'
}

export const testOrderLine = {
  productUuid: '5ee46259-1d14-4ae5-8abe-651529ed2be5',
  name: "Boiron Mag'300+ fatigue générale 160 comprimés",
  unitAmount: 1,
  quantity: 1,
  img: 'https://praden.s3.eu-west-3.amazonaws.com/public/products/7d932a616cebce2f2a277d0779f4a9aa174f2d2da9610439f5e70d160b1ef358',
  description: 'Test',
  deliveryStatus: 1,
  updatedAt: 1
}

export interface SendOrderConfirmationDTO {
  orderUuid: UUID
  contact: Contact
  shippingAddress: Address
  billingAddress: Address
  orderLines: Array<OrderLine>
  deliveryMethod: DeliveryMethod
}
