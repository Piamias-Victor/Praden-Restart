import { Order } from '@core/entities/order'
import { UUID } from '@core/types/types'
import { CreateOrderDTO } from '@core/usecases/orders/order-creation/createOrder'

export interface OrderGateway {
  create(orderDTO: CreateOrderDTO): Promise<Order>
  list(): Promise<Array<Order>>
  getByUuid(uuid: UUID): Promise<Order>
}
