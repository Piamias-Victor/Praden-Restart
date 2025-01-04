import { getDeliveryVM } from '@adapters/primary/viewModels/get-delivery/getDeliveryVM';
import { Order, OrderLine, DeliveryStatus, PaymentStatus } from '@core/entities/order';
import { OrderGateway } from '@core/gateways/orderGateway';
import { PaymentGateway, CreateCheckoutDTO } from '@core/gateways/paymentGateway';
import { UUID } from '@core/types/type';
import { CreateOrderDTO, CreateOrderLineDTO } from '@core/usecases/orders/order-creation/createOrder';
import { useDeliveryStore } from '@store/deliveryStore';
import axios from 'axios';
import { useProductGateway } from '../../../../gateways/productGateway';
import { useNuxtApp } from 'nuxt/app';

export class RealOrderGateway implements OrderGateway {
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

    const { delivery, ...rest } = orderDTO;
    const productGateway = useProductGateway();
    const deliveryMethodsStore = useDeliveryStore();
    let body;

    if (deliveryMethodsStore.selected!.point) {
      body = {
        ...rest,
        customerMessage: 'test de message',
        billingAddress: orderDTO.deliveryAddress,
        pickupId: deliveryMethodsStore.selected!.point,
        deliveryMethodUuid: orderDTO.delivery.method.uuid,
        lines: await Promise.all(
          orderDTO.lines.map(async (l) => {
            const product = await productGateway.getByUuid(l.productUuid);
            let priceWithoutTax: number;
            let promotionUuid: string | undefined = undefined;

            if (product.promotions && product.promotions.length > 0) {
              const promotion = product.promotions[0];
              priceWithoutTax = this.calculatePriceHT(product.price - promotion.amount, product.percentTaxRate);
              promotionUuid = promotion.uuid;
            } else {
              priceWithoutTax = this.calculatePriceHT(product.price, product.percentTaxRate);
            }

            return {
              productUuid: l.productUuid,
              quantity: l.quantity,
              priceWithoutTax: Math.round(priceWithoutTax),
              percentTaxRate: product.percentTaxRate,
              ...(promotionUuid ? { promotionUuid } : {}),
            };
          }),
        ),
      };
    } else {
      body = {
        ...rest,
        customerMessage: 'test de message',
        billingAddress: orderDTO.deliveryAddress,
        deliveryMethodUuid: orderDTO.delivery.method.uuid,
        lines: await Promise.all(
          orderDTO.lines.map(async (l) => {
            const product = await productGateway.getByUuid(l.productUuid);
            let priceWithoutTax: number;
            let promotionUuid: string | undefined = undefined;

            if (product.promotions && product.promotions.length > 0) {
              const promotion = product.promotions[0];
              priceWithoutTax = this.calculatePriceHT(product.price - promotion.amount, product.percentTaxRate);
              promotionUuid = promotion.uuid;
            } else {
              priceWithoutTax = this.calculatePriceHT(product.price, product.percentTaxRate);
            }

            return {
              productUuid: l.productUuid,
              quantity: l.quantity,
              priceWithoutTax: Math.round(priceWithoutTax),
              percentTaxRate: product.percentTaxRate,
              ...(promotionUuid ? { promotionUuid } : {}),
            };
          }),
        ),
      };
    }

    const { $keycloak }: any = useNuxtApp();

    try {
      // Vérifier et rafraîchir le token si nécessaire
      if ($keycloak) {
        const refreshed = await $keycloak.updateToken(30);
        if (refreshed) {
        }
      }

      const token = $keycloak.token;

      if (!token) {
        throw new Error('Token Keycloak non disponible pour authentification.');
      }

      const res = await axios.post('https://ecommerce-backend-production.admin-a5f.workers.dev/orders', body, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });

      const sessionUrl = await this.paymentGateway.createCheckoutSession(checkoutDTO, deliveryPrice, res.data.uuid);

      const order: Order = {
        uuid,
        contact: orderDTO.contact,
        lines,
        delivery: orderDTO.delivery,
        deliveryAddress: orderDTO.deliveryAddress,
        createdAt: now,
        payment: {
          sessionUrl,
          status: PaymentStatus.WaitingForPayment,
        },
      };

      this.orders.push(order);

      return order;
    } catch (error) {
      console.error('Erreur lors de la création de la commande :', error);
      throw error;
    }
  }

  private calculatePriceHT(priceWithTax: number, taxRate: number): number {
    const priceHT = priceWithTax / (1 + taxRate / 100);
    return Math.round(priceHT * 100) / 100;
  }

  async list(): Promise<Array<Order>> {
    return Promise.resolve(this.orders);
  }

  async getByUuid(uuid: UUID): Promise<Order> {
    const res = this.orders.find((order: Order) => order.uuid === uuid);
    if (!res) throw new Error(`Order with UUID ${uuid} does not exist`);
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
