import { DeliveryMethod } from '@core/entities/deliveryMethod';
import { getProductPriceWithPromotion, Product } from '@core/entities/product';
import { HashTable, UUID } from '@core/types/type';
import { useCartStore } from '@store/cartStore';
import { useDeliveryStore } from '@store/deliveryStore';
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
  medecine?: boolean;
}

export interface CartVM {
  items: HashTable<CartItemVM>;
  totalPrice: string;
  totalPriceWithPromotion?: string;
  totalPriceWithDelivery: string;
  freeDelivery: string;
  DeliveryPrice: string;
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
  totalWeight: number;
}

export const getProductsInCart = (): ProductsInCart => {
  const cartStore = useCartStore();
  const productStore = useProductStore();
  const deliveryStore = useDeliveryStore();
  const cartItems = cartStore.items;
  const products = productStore.items;
  const productsInCart = cartItems.map((uuid: UUID) => products.find((product: Product) => uuid === product.uuid));
  return productsInCart.reduce(
    (acc: ProductsInCart, p: Product) => {
      let quantity = 1;
      let totalWeight = acc.totalWeight;
      let total = acc.total;
      let totalWithPromotion = acc.totalWithPromotion;
      total += p.price;
      totalWeight += p.weight;
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
            quantity,
            img: p.images,
            medecine: p.isMedicine,
            weight: p.weight,
            promotion: p.promotions[0],
            noticeUrl: p?.noticeUrl,
          },
        },
        total,
        totalWithPromotion,
        totalWeight,
        // totalWithDelivery: getTotalWithDelivery(total, totalWeight, ),
        freeDelivery: getFreeDelivery(total),
      };
    },
    {
      items: {},
      total: 0,
      totalWithPromotion: 0,
      totalWithDelivery: 0,
      totalWeight: 0,
      freeDelivery: 3900,
    } as ProductsInCart,
  );
};

/**
 * Calcule le prix de livraison en fonction du poids et de la méthode de livraison.
 * @param method - La méthode de livraison sélectionnée.
 * @param weight - Le poids total des articles.
 * @returns Le prix de livraison applicable.
 */
export const getDeliveryPrice = (method: DeliveryMethod, weight: number, total: number, medecine: boolean): number => {
  // Trouve la tranche de poids appropriée

  if (method.uuid === '505209a2-7acb-4891-b933-e084d786d7ea' && total > 3900 && weight < 5000 && medecine === false) {
    return 0; // Livraison gratuite
  }

  const applicableRange = method.priceRanges.find((range) => weight >= range.minWeight && weight <= range.maxWeight);

  // Si une tranche est trouvée, retourne son prix, sinon retourne 0 ou une valeur par défaut
  return applicableRange ? applicableRange.price : 0;
};

/**
 * Calcule le total incluant le prix de livraison.
 * @param total - Le total des articles.
 * @param totalWeight - Le poids total des articles.
 * @returns Le total incluant la livraison.
 */
export const getTotalWithDelivery = (total: number, totalWeight: number, medecine: boolean): number => {
  const deliveryStore = useDeliveryStore();
  const selectedMethod = deliveryStore.selected;

  // Vérifie si une méthode de livraison est sélectionnée
  if (!selectedMethod) {
    // Gérer le cas où aucune méthode de livraison n'est sélectionnée
    // Par exemple, retourner le total sans ajout de livraison
    return total;
  }

  // Vérifie si la livraison est gratuite pour "Point Relais" lorsque le total dépasse 6900
  // if (total > 6900 && selectedMethod.name === 'Point Relais') {
  //   return total;
  // }

  // Calcule le prix de livraison basé sur le poids
  const deliveryPrice = getDeliveryPrice(selectedMethod, totalWeight, total, medecine);

  // Retourne le total incluant le prix de livraison
  return total + deliveryPrice;
};

export const getFreeDelivery = (total: number): number => {
  const res = 3900 - total;
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
      freeDelivery: formatter.format(getFreeDelivery(item.totalPrice) / 100),
      quantity: item.quantity,
      img: item.img,
      weight: item.weight,
      medecine: item.medecine,
      noticeUrl: item?.noticeUrl,
    };
    if (item.totalPriceWithPromotion) {
      itemsVM[key].totalPriceWithPromotion = formatter.format(item.totalPriceWithPromotion / 100);
    }
  });
  return itemsVM;
};

export const getCartVM = (): CartVM => {
  const formatter = priceFormatter('fr-FR', 'EUR');
  const deliveryStore = useDeliveryStore();
  const selectedMethod = deliveryStore.selected;
  const { items, total, totalWithPromotion, totalWithDelivery, totalWeight } = getProductsInCart();

  const res: CartVM = {
    items: createCartItemsVMFromCartItems(items),
    totalPrice: formatter.format(total / 100),
    totalPriceWithDelivery: formatter.format(
      getTotalWithDelivery(
        total,
        totalWeight,
        Object.values(createCartItemsVMFromCartItems(items)).some((item: any) => item.medecine === true),
      ) / 100,
    ),
    freeDelivery: formatter.format(getFreeDelivery(total) / 100),
    DeliveryPrice: formatter.format(
      getDeliveryPrice(
        selectedMethod!,
        totalWeight,
        total,
        Object.values(createCartItemsVMFromCartItems(items)).some((item: any) => item.medecine === true),
      ) / 100,
    ),
  };
  if (total != totalWithPromotion) {
    res.totalPriceWithPromotion = formatter.format(
      getTotalWithDelivery(
        totalWithPromotion,
        totalWeight,
        Object.values(createCartItemsVMFromCartItems(items)).some((item: any) => item.medecine === true),
      ) / 100,
    );
    res.DeliveryPrice = formatter.format(
      getDeliveryPrice(
        selectedMethod!,
        totalWeight,
        totalWithPromotion,
        Object.values(createCartItemsVMFromCartItems(items)).some((item: any) => item.medecine === true),
      ) / 100,
    );
    res.freeDelivery = formatter.format(getFreeDelivery(totalWithPromotion) / 100);
  }
  return res;
};
