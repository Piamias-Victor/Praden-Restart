// createOrder.ts

import { Address, Contact, Order, OrderLine } from '@core/entities/order';
import { EmailGateway } from './emailGateway';
import { DeliveryMethod } from '@core/entities/deliveryMethod';
import { useDeliveryStore } from '@store/deliveryStore';
import { UUID } from 'crypto';
import { ProductGateway } from '@core/gateways/productGateway';
import { OrderGateway } from '@core/gateways/orderGateway';
import { WindowGateway } from '@core/gateways/windowGateway';
import { useOrderStore } from '@store/orderStore';
import { useCartStore } from '@store/cartStore';
import { getProductsInCart } from '@adapters/primary/viewModels/get-cart/getCartVM';
import { getUserVM } from '@adapters/primary/viewModels/get-user/getUserVM';
import { computed } from 'vue';
import { ReductionType } from '@core/entities/product';

export type CreateOrderLineDTO = Omit<OrderLine, 'deliveryStatus' | 'updatedAt'>;

export type CreateOrderDTO = Pick<Order, 'delivery' | 'contact' | 'deliveryAddress'> & {
  lines: Array<CreateOrderLineDTO>;
};

export interface FullAddress {
  firstname: string;
  lastname: string;
  country: string;
  address: string;
  appartement?: string;
  city: string;
  zip: string;
}

export interface SendOrderConfirmationDTO {
  orderUuid: UUID;
  contact: Contact;
  shippingAddress: Address;
  billingAddress: Address;
  orderLines: Array<OrderLine>;
  deliveryMethod: DeliveryMethod;
}

export const createOrder = async (
  email: string,
  phone: string,
  deliveryMethodUuid: UUID,
  deliveryAddress: FullAddress,
  orderGateway: OrderGateway,
  productGateway: ProductGateway,
  windowGateway: WindowGateway,
  emailGateway: EmailGateway,
  deliveryPrice: string,
  selectedTimestamp: string,
  promotionCode?: string
) => {
  try {
    // Récupérer les produits dans le panier
    const { items } = getProductsInCart();

    // Obtenir les informations utilisateur
    const user = computed(() => {
      return getUserVM();
    });

    // Créer les lignes de commande
    const lines: Array<CreateOrderLineDTO> = await Promise.all(
      Object.keys(items).map(async (key) => {
        const item = items[key];
        const product = await productGateway.getByUuid(item.uuid);
        const res: CreateOrderLineDTO = {
          productUuid: product.uuid,
          name: item.name,
          unitAmount: Math.round(item.unitPrice),
          quantity: item.quantity,
          description: product.description,
          img: product.images,
        };
        if (product.promotions.length !== 0) {
          res.promotion = product.promotions[0];
          console.log('product.promotions[0]', product.promotions[0])
          if (product.promotions[0] && product.promotions[0].type !== ReductionType.Fixed) {
            res.unitAmount = item.unitPrice - item.unitPrice * (product.promotions[0].amount / 100);
          } else {
            res.unitAmount = Math.round(item.unitPrice - product.promotions[0].amount);
          }
        }
        return res;
      }),
    );

    // Obtenir la méthode de livraison sélectionnée
    const deliveryStore = useDeliveryStore();
    const deliveryMethod = deliveryStore.getByUuid(deliveryMethodUuid);
    console.log('user', user);

    // Construire le DTO de commande
    const orderDTO: CreateOrderDTO = {
      contact: {
        email,
        phone,
      },
      lines,
      delivery: {
        method: deliveryMethod,
      },
      deliveryAddress: {
        firstname: user.value.firstname,
        lastname: user.value.lastname,
        address: deliveryAddress.address,
        appartement: deliveryAddress.appartement,
        zip: deliveryAddress.zip,
        city: deliveryAddress.city,
        country: deliveryAddress.country,
      },
    };
    // Créer la commande via OrderGateway
    const order = await orderGateway.create(orderDTO, deliveryPrice, selectedTimestamp, promotionCode);
    // Ajouter la commande au store
    const orderStore = useOrderStore();
    orderStore.add(order);

    // Préparer les données de confirmation de commande
    const sendOrderConfirmationDTO: SendOrderConfirmationDTO = {
      orderUuid: order.uuid,
      contact: order.contact,
      shippingAddress: order.deliveryAddress,
      billingAddress: order.deliveryAddress,
      orderLines: order.lines,
      deliveryMethod: order.delivery.method,
    };

    // Envoyer la confirmation de commande par email
    // await emailGateway.sendOrderConfirmation(sendOrderConfirmationDTO);

    // Rediriger vers l'URL de la session Stripe
    if (order.payment && order.payment.sessionUrl) {
      // clearCart();
      window.location.href = order.payment.sessionUrl;
    }
  } catch (error) {
    console.error('Error creating order:', error);
    // Gérer l'erreur (afficher un message à l'utilisateur, etc.)
    throw error;
  }
};

const clearCart = () => {
  const cartStore = useCartStore();
  cartStore.removeAll();
};

export const addressTest = {
  firstname: 'Victor',
  lastname: 'Piamias',
  address: '165 chemin des negadoux',
  city: 'Toulon',
  zip: '83000',
  appartement: '2',
};

export const testOrderLine = {
  productUuid: '5ee46259-1d14-4ae5-8abe-651529ed2be5',
  name: "Boiron Mag'300+ fatigue générale 160 comprimés",
  unitAmount: 1,
  quantity: 1,
  img: 'https://praden.s3.eu-west-3.amazonaws.com/public/products/7d932a616cebce2f2a277d0779f4a9aa174f2d2da9610439f5e70d160b1ef358',
  description: 'Test',
  deliveryStatus: 1,
  updatedAt: 1,
};

export interface SendOrderConfirmationDTO {
  orderUuid: UUID;
  contact: Contact;
  shippingAddress: Address;
  billingAddress: Address;
  orderLines: Array<OrderLine>;
  deliveryMethod: DeliveryMethod;
}