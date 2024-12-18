// inMemoryOrderGateway.ts

import { getDeliveryVM } from '@adapters/primary/viewModels/get-delivery/getDeliveryVM';
import { Order, OrderLine, DeliveryStatus, PaymentStatus } from '@core/entities/order';
import { OrderGateway } from '@core/gateways/orderGateway';
import { PaymentGateway, CreateCheckoutDTO } from '@core/gateways/paymentGateway';
import { UUID } from '@core/types/type';
import { CreateOrderDTO, CreateOrderLineDTO } from '@core/usecases/orders/order-creation/createOrder';
import { useDeliveryStore } from '@store/deliveryStore';
import axios from 'axios';

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

  async create(orderDTO: CreateOrderDTO, deliveryPrice: string): Promise<Order> {
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

    // Créer la session de paiement Stripe
    const sessionUrl = await this.paymentGateway.createCheckoutSession(checkoutDTO, deliveryPrice);

    const order: Order = {
      uuid,
      contact: orderDTO.contact,
      lines,
      delivery: orderDTO.delivery,
      deliveryAddress: orderDTO.deliveryAddress,
      createdAt: now,
      payment: {
        sessionUrl, // Assigner l'URL de la session Stripe
        status: PaymentStatus.WaitingForPayment,
      },
    };

    const { delivery, ...rest } = orderDTO;
    const deliveryMethodsStore = useDeliveryStore();
    console.log('deliveryMethods', deliveryMethodsStore.selected!.point);
    let body;
    if (deliveryMethodsStore.selected!.point) {
      body = {
        ...rest,
        billingAddress: orderDTO.deliveryAddress,
        pickupId: deliveryMethodsStore.selected!.point,
        deliveryMethodUuid: orderDTO.delivery.method.uuid,
        lines: orderDTO.lines.map((l) => {
          const res: any = {
            productUuid: l.productUuid,
            quantity: l.quantity,
          };
          return res;
        }),
      };
    } else {
      body = {
        ...rest,
        billingAddress: orderDTO.deliveryAddress,
        deliveryMethodUuid: orderDTO.delivery.method.uuid,
        lines: orderDTO.lines.map((l) => {
          const res: any = {
            productUuid: l.productUuid,
            quantity: l.quantity,
          };
          return res;
        }),
      };
    }

    console.log('body', body);
    const res = await axios.post(
      `https://ecommerce-backend-production.admin-a5f.workers.dev/orders`,
      JSON.stringify(body),
    );
    this.orders.push(order);
    return Promise.resolve(this.convertToOrder(res.data));
    return Promise.resolve(order);
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

  async list(): Promise<Array<Order>> {
    return Promise.resolve(this.orders);
  }

  async getByUuid(uuid: UUID): Promise<Order> {
    const res = this.orders.find((order: Order) => order.uuid === uuid);
    if (!res) throw new Error(`Order with UUID ${uuid} does not exist`); // Utiliser une erreur appropriée
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
