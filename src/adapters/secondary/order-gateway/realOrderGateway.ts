import { OrderGateway } from '@core/gateways/orderGateway';
import { Order } from '@core/entities/order';
import { UUID } from '@core/types/types';
import { CreateOrderDTO } from '@core/usecases/orders/order-creation/createOrder';
import axios from 'axios';

export class RealOrderGateway implements OrderGateway {
  private readonly baseUrl: string;
  private readonly orderUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
    this.orderUrl = `${this.baseUrl}/orders`;
  }

  async create(orderDTO: CreateOrderDTO): Promise<Order> {
    const body = {
      ...orderDTO,
      deliveryMethodUuid: orderDTO.delivery.method.uuid,
      lines: orderDTO.lines.map((l) => {
        const res: any = {
          cip13: l.productUuid,
          expectedQuantity: l.quantity,
        };
        if (l.promotion) {
          res.promotionUuid = l.promotion.uuid;
        }
        return res;
      }),
    };
    console.log('body', body);
    const res = await axios.post(`${this.orderUrl}/`, JSON.stringify(body));
    return Promise.resolve(this.convertToOrder(res.data));
  }

  async getByUuid(uuid: UUID): Promise<Order> {
    const res = await axios.get(`${this.orderUrl}/${uuid}/`);
    return Promise.resolve(this.convertToOrder(res.data));
  }

  async list(): Promise<Array<Order>> {
    const res = await axios.get(`${this.orderUrl}/`);
    const orders = res.data.items;
    const res2 = orders.map((d: any) => {
      return this.convertToOrder(d);
    });
    return Promise.resolve(JSON.parse(JSON.stringify(res2)));
  }

  private convertToOrder(data: any): Order {
    const copy = JSON.parse(JSON.stringify(data));
    delete copy.messages;
    delete copy.payment.invoiceNumber;
    copy.lines.forEach((l: any) => {
      l.productUuid = l.cip13;
      delete l.cip13;
      delete l.location;
      delete l.percentTaxRate;
      delete l.preparedQuantity;
      delete l.expectedQuantity;
    });
    return copy;
  }
}
