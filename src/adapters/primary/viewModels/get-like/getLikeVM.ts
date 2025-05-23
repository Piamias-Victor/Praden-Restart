import { getProductPriceWithPromotion, Product } from '@core/entities/product';
import { HashTable, UUID } from '@core/types/type';
import { useCartStore } from '@store/cartStore';
import { useDeliveryStore } from '@store/deliveryStore';
import { useLikeStore } from '@store/likeStore';
import { useProductStore } from '@store/productStore';
import { priceFormatter } from '@utils/formater';

export interface CartItemVM {
  uuid: UUID;
  name: string;
  laboratory: string;
  totalPrice: string;
  totalPriceWithPromotion?: string;
  totalPriceWithDelivery: string;
  freeDelivery: string;
  quantity: number;
  img: string;
}

export interface CartVM {
  items: HashTable<CartItemVM>;
  totalPrice: string;
  totalPriceWithPromotion?: string;
  totalPriceWithDelivery: string;
  freeDelivery: string;
}

export interface CartItem {
  uuid: UUID;
  name: string;
  laboratory: string;
  unitPrice: number;
  quantity: number;
  totalPrice: number;
  totalPriceWithPromotion?: number;
  totalPriceWithDelivery: number;
  freeDelivery: number;
  img: string;
  medecine?: boolean;
}

export interface ProductsInCart {
  items: HashTable<CartItem>;
  total: number;
  totalWithPromotion: number;
  totalWithDelivery: number;
  freeDelivery: number;
}

export const getProductsInCart = (): ProductsInCart => {
  const cartStore = useLikeStore();
  const productStore = useProductStore();
  const deliveryStore = useDeliveryStore();
  const cartItems = cartStore.items;
  const products = productStore.items;
  const productsInCart = cartItems.map((uuid: UUID) => products.find((product: Product) => uuid === product.uuid));
  return productsInCart.reduce(
    (acc: ProductsInCart, p: Product) => {
      let quantity = 1;
      let total = acc.total;
      let totalWithPromotion = acc.totalWithPromotion;
      total += p.price;
      const priceWithPromotion = getProductPriceWithPromotion(p);
      totalWithPromotion += priceWithPromotion || p.price;
      if (acc.items[p.uuid]) {
        quantity = acc.items[p.uuid].quantity + 1;
      }
      return {
        items: {
          ...acc.items,
          [p.uuid]: {
            uuid: p.uuid,
            name: p.name,
            laboratory: p.laboratory,
            unitPrice: p.price,
            totalPrice: p.price * quantity,
            totalPriceWithPromotion: priceWithPromotion! * quantity,
            medecine: p.isMedicine,
            quantity,
            img: p.images,
          },
        },
        total,
        totalWithPromotion,
        totalWithDelivery: getTotalWithDelivery(total),
        freeDelivery: getFreeDelivery(total),
      };
    },
    {
      items: {},
      total: 0,
      totalWithPromotion: 0,
      totalWithDelivery: 0,
      freeDelivery: 6900,
    } as ProductsInCart,
  );
};

export const getTotalWithDelivery = (total: number): number => {
  const deliveryStore = useDeliveryStore();
  if (total > 6900 && deliveryStore.selected!.uuid === 'relais-uuid') return total;
  return total + deliveryStore.selected!.price;
};

export const getFreeDelivery = (total: number): number => {
  const res = 6900 - total;
  if (res > 0) return res;
  return 0;
};

export const createCartItemsVMFromCartItems = (items: HashTable<CartItem>): HashTable<CartItemVM> => {
  const formatter = priceFormatter('fr-FR', 'EUR');
  const itemsVM: HashTable<CartItemVM> = {};
  Object.keys(items).forEach((key) => {
    const item = items[key];
    itemsVM[key] = {
      uuid: item.uuid,
      name: item.name,
      laboratory: item.laboratory,
      totalPrice: formatter.format(item.totalPrice / 100),
      totalPriceWithDelivery: formatter.format(getTotalWithDelivery(item.totalPrice) / 100),
      freeDelivery: formatter.format(getFreeDelivery(item.totalPrice) / 100),
      medecine: item.medecine,
      quantity: item.quantity,
      img: item.img,
    };
    if (item.totalPriceWithPromotion) {
      itemsVM[key].totalPriceWithPromotion = formatter.format(item.totalPriceWithPromotion / 100);
    }
  });
  return itemsVM;
};

export const getLikeVM = (): CartVM => {
  const formatter = priceFormatter('fr-FR', 'EUR');
  const { items, total, totalWithPromotion, totalWithDelivery } = getProductsInCart();
  const res: CartVM = {
    items: createCartItemsVMFromCartItems(items),
    totalPrice: formatter.format(total / 100),
    totalPriceWithDelivery: formatter.format(getTotalWithDelivery(total) / 100),
    freeDelivery: formatter.format(getFreeDelivery(total) / 100),
  };
  if (total != totalWithPromotion) {
    res.totalPriceWithPromotion = formatter.format(totalWithPromotion / 100);
  }
  return res;
};
