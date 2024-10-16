import { pickup } from '../../../../../gateways/deliveryGateway'
import { EmailGateway, SendOrderConfirmationDTO } from './emailGateway'

export const createOrder = async (emailGateway: EmailGateway) => {
  console.log('On rentre dans createOrder')
  // const { items } = getProductsInCart()
  // const lines: Array<CreateOrderLineDTO> = await Promise.all(
  //   Object.keys(items).map(async (key) => {
  //     const item = items[key]
  //     const product = await productGateway.getByUuid(item.uuid)
  //     const res: CreateOrderLineDTO = {
  //       productUuid: product.uuid,
  //       name: item.name,
  //       unitAmount: item.unitPrice,
  //       quantity: item.quantity,
  //       description: product.description,
  //       img: product.img
  //     }
  //     if (product.promotion) {
  //       res.promotion = product.promotion
  //     }
  //     return res
  //   })
  // )
  // const deliveryStore = useDeliveryStore()
  // const deliveryMethod = deliveryStore.getByUuid(deliveryMethodUuid)
  // const orderDTO: CreateOrderDTO = {
  //   contact: {
  //     email,
  //     phone
  //   },
  //   lines,
  //   delivery: {
  //     method: deliveryMethod
  //   },
  //   deliveryAddress: {
  //     firstname: deliveryAddress.firstname,
  //     lastname: deliveryAddress.lastname,
  //     address: deliveryAddress.address,
  //     appartement: deliveryAddress.appartement,
  //     zip: deliveryAddress.zip,
  //     city: deliveryAddress.city
  //   }
  // }
  // const order = await orderGateway.create(orderDTO)
  // const orderStore = useOrderStore()
  // orderStore.add(order)
  // clearCart()
  const sendOrderConfirmationDTO: SendOrderConfirmationDTO = {
    orderUuid: 1,
    contact: {
      email: 'victorpiamiaspro@gmail.com',
      phone: '0624174724'
    },
    shippingAddress: addressTest,
    billingAddress: addressTest,
    orderLines: [testOrderLine],
    deliveryMethod: pickup
  }
  console.log('Objet cree : ', sendOrderConfirmationDTO)
  await emailGateway.sendOrderConfirmation(sendOrderConfirmationDTO)
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
