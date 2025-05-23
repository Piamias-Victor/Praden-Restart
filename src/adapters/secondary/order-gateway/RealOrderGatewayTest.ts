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
import { ReductionType } from '@core/entities/product';

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

  async create(orderDTO: CreateOrderDTO, deliveryPrice: string, selectedTimestamp: string, promotionCode?: string): Promise<Order> {
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
      contact: orderDTO.contact,
    };

    if (!orderDTO.deliveryAddress.appartement) {
      delete orderDTO.deliveryAddress.appartement;
    }

    const { delivery, ...rest } = orderDTO;
    const productGateway = useProductGateway();
    const deliveryMethodsStore = useDeliveryStore();

    // Création des lignes au format attendu
    const formattedLines = await Promise.all(
      orderDTO.lines.map(async (l) => {
        const product = await productGateway.getByUuid(l.productUuid);
        let priceWithoutTax = this.calculatePriceHT(product.price, product.percentTaxRate);
        let promotionUuid = undefined;

        if (product.promotions && product.promotions.length > 0) {
          const promotion = product.promotions[0];
          if (promotion) {
            let discountedPrice;
            if (promotion.type === ReductionType.Fixed) {
              discountedPrice = product.price - promotion.amount;
            } else {
              discountedPrice = product.price - (product.price * promotion.amount) / 100;
            }
            priceWithoutTax = this.calculatePriceHT(discountedPrice, product.percentTaxRate);
            promotionUuid = promotion.uuid;
          }
        }

        return {
          productUuid: l.productUuid,
          quantity: l.quantity,
          priceWithoutTax: priceWithoutTax,
          percentTaxRate: product.percentTaxRate,
          weight: product.weight || 100,
          ...(promotionUuid ? { promotionUuid } : {})
        };
      })
    );

    // Construction du body de la requête avec tous les champs requis
    const body = {
      contact: orderDTO.contact,
      deliveryAddress: orderDTO.deliveryAddress,
      billingAddress: orderDTO.deliveryAddress,
      deliveryMethodUuid: orderDTO.delivery.method.uuid,
      customerMessage: '',
      lines: formattedLines, // Utilisation des lignes formatées
      ...(deliveryMethodsStore.selected?.point ? { pickupId: deliveryMethodsStore.selected.point } : {}),
      ...(selectedTimestamp ? { pickingDate: parseInt(selectedTimestamp) } : {}),
      ...(promotionCode ? { promotionCode } : {})
    };

    const { $keycloak }: any = useNuxtApp();

    try {
      // Vérifier et rafraîchir le token si nécessaire
      if ($keycloak) {
        const refreshed = await $keycloak.updateToken(30);
        if (refreshed) {
          console.log('Token refreshed');
        }
      }

      const token = $keycloak.token;

      if (!token) {
        throw new Error('Token Keycloak non disponible pour authentification.');
      }

      console.log('body:', JSON.stringify(body));

      const res = await axios.post('https://ecommerce-backend-production.admin-a5f.workers.dev/orders', body, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });

      console.log('res:', JSON.stringify(res.data.item));

      // Récupérer le montant de la réduction depuis la réponse
      let discountAmount = 0;

      // Vérifier si la réponse et promotionCode existent
      if (res.data && res.data.item && res.data.item.promotionCode && res.data.item.promotionCode.discount) {
        discountAmount = res.data.item.promotionCode.discount;
        console.log(`Réduction code promo trouvée: ${discountAmount} centimes`);
      } 
      // Vérifier l'ancienne structure également (si totalDiscounted existe)
      else if (res.data && res.data.item && res.data.item.totalDiscounted) {
        discountAmount = res.data.item.totalDiscounted;
        console.log(`Réduction totalDiscounted trouvée: ${discountAmount} centimes`);
      }

      // IMPORTANT: Ne pas passer les promotions produit à la passerelle de paiement
      // puisqu'elles sont déjà incluses dans le prix unitaire des articles
      // Pour éviter la double application des promotions produit, on crée une nouvelle liste sans les promotions
      const linesWithoutPromotions = lines.map(line => {
        // Créer une copie de la ligne sans la promotion
        const { promotion, ...lineWithoutPromotion } = line;
        return lineWithoutPromotion;
      });

      const sessionUrl = await this.paymentGateway.createCheckoutSession(
        {
          orderUuid: uuid,
          lines: linesWithoutPromotions, // Utiliser les lignes SANS les promotions produit
          delivery: orderDTO.delivery,
          contact: orderDTO.contact,
        },
        deliveryPrice,
        res.data.item.uuid,
        promotionCode,
        discountAmount
      );

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