import { Order, OrderLine, DeliveryStatus, PaymentStatus } from '@core/entities/order';
import { CategoryDoesNotExistsError } from '@core/errors/CategoryDoesNotExistsError copy';
import { OrderGateway } from '@core/gateways/orderGateway';
import { PaymentGateway, CreateCheckoutDTO } from '@core/gateways/paymentGateway';
import { UUID } from '@core/types/type';
import { CreateOrderDTO, CreateOrderLineDTO } from '@core/usecases/orders/order-creation/createOrder';
import { pickup, express } from 'gateways/deliveryGateway';

export class InMemoryOrderGateway implements OrderGateway {
  private orders: Array<Order> = [];
  private uuidGenerator: UUIDGenerator;
  private paymentGateway: PaymentGateway;
  private dateProvider: DateProvider;

  constructor(uuidGenerator: UUIDGenerator, paymentGateway: PaymentGateway, dateProvider: DateProvider) {
    this.uuidGenerator = uuidGenerator;
    this.paymentGateway = paymentGateway;
    this.dateProvider = dateProvider;
  }

  async create(orderDTO: CreateOrderDTO): Promise<Order> {
    const now = this.dateProvider.now();
    const uuid = this.uuidGenerator.generate();
    const lines: Array<OrderLine> = orderDTO.lines.map((line: CreateOrderLineDTO) => {
      return {
        ...line,
        deliveryStatus: DeliveryStatus.Created,
        updatedAt: now,
      };
    });
    const checkoutDTO: CreateCheckoutDTO = {
      orderUuid: uuid,
      lines,
      delivery: orderDTO.delivery,
    };
    if (!orderDTO.deliveryAddress.appartement) {
      delete orderDTO.deliveryAddress.appartement;
    }
    const order: Order = {
      uuid,
      contact: orderDTO.contact,
      lines,
      delivery: orderDTO.delivery,
      deliveryAddress: orderDTO.deliveryAddress,
      createdAt: now,
      payment: {
        sessionUrl: '',
        status: PaymentStatus.WaitingForPayment,
      },
    };
    this.orders.push(order);
    return Promise.resolve(order);
  }

  async list(): Promise<Array<Order>> {
    return Promise.resolve(this.orders);
  }

  async getByUuid(uuid: UUID): Promise<Order> {
    const res = this.orders.find((order: Order) => order.uuid === uuid);
    if (!res) throw new CategoryDoesNotExistsError(uuid);
    return Promise.resolve(res);
  }

  feedWith(...orders: Array<Order>) {
    this.orders = orders;
  }
}

export class FakeUUIDGenerator implements UUIDGenerator {
  private next = '';

  generate(): string {
    return this.next;
  }

  setNext(next: string) {
    this.next = next;
  }
}

export interface UUIDGenerator {
  generate(): string;
}

export interface DateProvider {
  now(): number;
}

export class RealDateProvider implements DateProvider {
  now(): number {
    return Date.now();
  }
}
