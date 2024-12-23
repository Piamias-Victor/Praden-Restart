// RealOrderGateway.ts

import { getDeliveryVM } from '@adapters/primary/viewModels/get-delivery/getDeliveryVM';
import { Order, OrderLine, DeliveryStatus, PaymentStatus } from '@core/entities/order';
import { OrderGateway } from '@core/gateways/orderGateway';
import { PaymentGateway, CreateCheckoutDTO } from '@core/gateways/paymentGateway';
import { UUID } from '@core/types/type';
import { CreateOrderDTO, CreateOrderLineDTO } from '@core/usecases/orders/order-creation/createOrder';
import { useDeliveryStore } from '@store/deliveryStore';
import axios from 'axios';
import { useProductGateway } from '../../../../gateways/productGateway';

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

    console.log('createCheckoutDTO', checkoutDTO);

    // Créer la session de paiement Stripe

    const { delivery, ...rest } = orderDTO;
    const productGateway = useProductGateway();
    const deliveryMethodsStore = useDeliveryStore();
    let body;
    if (deliveryMethodsStore.selected!.point) {
      body = {
        ...rest,
        billingAddress: orderDTO.deliveryAddress,
        pickupId: deliveryMethodsStore.selected!.point,
        deliveryMethodUuid: orderDTO.delivery.method.uuid,
        lines: await Promise.all(
          orderDTO.lines.map(async (l) => {
            // Utilisez `l.productUuid` pour récupérer le produit
            const product = await productGateway.getByUuid(l.productUuid);
            console.log('product', product);
            let priceWithoutTax: number;
            let promotionUuid: string | undefined = undefined;

            if (product.promotions && product.promotions.length > 0) {
              // Supposons que vous utilisez la première promotion
              const promotion = product.promotions[0];
              priceWithoutTax = this.calculatePriceHT(product.price - promotion.amount, product.percentTaxRate);
              promotionUuid = promotion.uuid;
            } else {
              priceWithoutTax = this.calculatePriceHT(product.price, product.percentTaxRate);
            }
            // Construisez l'objet `res` selon vos besoins
            const res: any = {
              productUuid: l.productUuid,
              quantity: l.quantity,
              priceWithoutTax: Math.round(priceWithoutTax),
              percentTaxRate: product.percentTaxRate,
              ...(promotionUuid ? { promotionUuid } : {}),
            };
            return res;
          }),
        ),
      };
    } else {
      body = {
        ...rest,
        billingAddress: orderDTO.deliveryAddress,
        deliveryMethodUuid: orderDTO.delivery.method.uuid,
        lines: await Promise.all(
          orderDTO.lines.map(async (l) => {
            // Utilisez `l.productUuid` pour récupérer le produit
            const product = await productGateway.getByUuid(l.productUuid);
            let priceWithoutTax: number;
            let promotionUuid: string | undefined = undefined;

            // Vérification des promotions
            if (product.promotions && product.promotions.length > 0) {
              // Supposons que vous utilisez la première promotion
              const promotion = product.promotions[0];
              priceWithoutTax = this.calculatePriceHT(product.price - promotion.amount, product.percentTaxRate);
              promotionUuid = promotion.uuid;
            } else {
              priceWithoutTax = this.calculatePriceHT(product.price, product.percentTaxRate);
            }
            // Construisez l'objet `res` selon vos besoins
            const res: any = {
              productUuid: l.productUuid,
              quantity: l.quantity,
              priceWithoutTax: Math.round(priceWithoutTax),
              percentTaxRate: product.percentTaxRate,
              ...(promotionUuid ? { promotionUuid } : {}),
            };
            return res;
          }),
        ),
      };
    }

    // console.log('body', body);
    console.log('0');

    const res = await axios.post(
      `https://ecommerce-backend-production.admin-a5f.workers.dev/orders`,
      JSON.stringify(body),
    );

    console.log('res:', res.data);
    const sessionUrl = await this.paymentGateway.createCheckoutSession(checkoutDTO, deliveryPrice, res.data.uuid);

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
    this.orders.push(order);
    console.log('1');

    // return Promise.resolve(this.convertToOrder(res.data));
    return Promise.resolve(order);
  }

  private calculatePriceHT(priceWithTax: number, taxRate: number): number {
    const priceHT = priceWithTax / (1 + taxRate / 100);
    // Arrondir à deux décimales
    return Math.round(priceHT * 100) / 100;
  }

  private convertToOrder(data: any): Order {
    if (!data || typeof data !== 'object') {
      throw new TypeError('Cannot convert undefined or null to object');
    }

    const copy = JSON.parse(JSON.stringify(data));
    delete copy.messages;
    delete copy.payment?.invoiceNumber;

    if (copy.lines && Array.isArray(copy.lines)) {
      copy.lines.forEach((l: any) => {
        // Renommer `cip13` en `productUuid` et supprimer les autres propriétés inutiles
        l.productUuid = l.cip13;
        delete l.cip13;
        delete l.location;
        delete l.percentTaxRate;
        delete l.preparedQuantity;
        delete l.expectedQuantity;
        delete l.priceWithoutTax;

        // Supprimer `promotionUuid` si undefined ou null
        if (l.promotionUuid === undefined || l.promotionUuid === null) {
          delete l.promotionUuid;
        }
      });
    } else {
      console.warn("copy.lines est manquant ou n'est pas un tableau");
    }

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
  private next = ''; // Chaîne vide par défaut

  generate(): string {
    return this.next; // Retourne la valeur actuelle de `next`
  }

  setNext(next: string) {
    this.next = next; // Permet de définir la valeur suivante
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
