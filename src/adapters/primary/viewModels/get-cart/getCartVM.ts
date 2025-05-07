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
  try {
    const cartStore = useCartStore();
    const productStore = useProductStore();
    const deliveryStore = useDeliveryStore();
    const cartItems = cartStore.items;
    const products = productStore.items;
    
    // Filtrer les produits indéfinis pour éviter les erreurs
    const productsInCart = cartItems
      .map((uuid: UUID) => products.find((product: Product) => uuid === product.uuid))
      .filter((product): product is Product => product !== undefined);
    
    return productsInCart.reduce(
      (acc: ProductsInCart, p: Product) => {
        // Vérifier que le produit existe et a les propriétés nécessaires
        if (!p) {
          return acc;
        }

        // Utiliser des valeurs par défaut si les propriétés sont manquantes
        const price = p.price ?? 0;
        const weight = p.weight ?? 0;
        
        let quantity = 1;
        let totalWeight = acc.totalWeight;
        let total = acc.total;
        let totalWithPromotion = acc.totalWithPromotion;
        
        total += price;
        totalWeight += weight;
        
        // Obtenir le prix avec promotion de manière sécurisée
        const priceWithPromotion = getProductPriceWithPromotion(p);
        totalWithPromotion += priceWithPromotion || price;
        
        if (acc.items[p.uuid]) {
          quantity = acc.items[p.uuid].quantity + 1;
        }
        
        return {
          items: {
            ...acc.items,
            [p.uuid]: {
              uuid: p.uuid,
              name: p.name || '',
              laboratory: p.laboratory || '',
              unitPrice: price,
              totalPrice: price * quantity,
              totalPriceWithPromotion: priceWithPromotion ? priceWithPromotion * quantity : undefined,
              quantity,
              img: p.images || '',
              medecine: p.isMedicine || false,
              weight: weight,
              promotion: p.promotions && p.promotions.length > 0 ? p.promotions[0] : undefined,
              noticeUrl: p.noticeUrl || '',
            },
          },
          total,
          totalWithPromotion,
          totalWeight,
          freeDelivery: getFreeDelivery(total),
        };
      },
      {
        items: {},
        total: 0,
        totalWithPromotion: 0,
        totalWithDelivery: 0,
        totalWeight: 0,
        freeDelivery: 6900,
      } as ProductsInCart,
    );
  } catch (error) {
    console.error('Erreur dans getProductsInCart:', error);
    // Retourner un objet par défaut en cas d'erreur
    return {
      items: {},
      total: 0,
      totalWithPromotion: 0,
      totalWithDelivery: 0,
      totalWeight: 0,
      freeDelivery: 6900,
    };
  }
};

/**
 * Calcule le prix de livraison en fonction du poids et de la méthode de livraison.
 * @param method - La méthode de livraison sélectionnée.
 * @param weight - Le poids total des articles.
 * @returns Le prix de livraison applicable.
 */
export const getDeliveryPrice = (method: DeliveryMethod, weight: number, total: number, medecine: boolean): number => {
  try {
    // Vérifier que les paramètres nécessaires existent
    if (!method) {
      return 0;
    }
    
    if (method.uuid === '505209a2-7acb-4891-b933-e084d786d7ea' && total > 6900 && weight < 5000 && medecine === false) {
      return 0; // Livraison gratuite
    }

    // Vérifier que priceRanges existe et est un tableau
    if (!method.priceRanges || !Array.isArray(method.priceRanges)) {
      return 0;
    }

    const applicableRange = method.priceRanges.find((range) => 
      range && weight >= (range.minWeight || 0) && weight <= (range.maxWeight || Infinity)
    );

    // Si une tranche est trouvée, retourne son prix, sinon retourne 0 ou une valeur par défaut
    return applicableRange ? (applicableRange.price || 0) : 0;
  } catch (error) {
    console.error('Erreur dans getDeliveryPrice:', error);
    return 0;
  }
};

/**
 * Calcule le total incluant le prix de livraison.
 * @param total - Le total des articles.
 * @param totalWeight - Le poids total des articles.
 * @returns Le total incluant la livraison.
 */
export const getTotalWithDelivery = (total: number, totalWeight: number, medecine: boolean): number => {
  try {
    const deliveryStore = useDeliveryStore();
    const selectedMethod = deliveryStore.selected;

    // Vérifie si une méthode de livraison est sélectionnée
    if (!selectedMethod) {
      // Gérer le cas où aucune méthode de livraison n'est sélectionnée
      return total;
    }

    // Calcule le prix de livraison basé sur le poids
    const deliveryPrice = getDeliveryPrice(selectedMethod, totalWeight, total, medecine);

    // Retourne le total incluant le prix de livraison
    return total + deliveryPrice;
  } catch (error) {
    console.error('Erreur dans getTotalWithDelivery:', error);
    return total; // En cas d'erreur, retourner le total sans livraison
  }
};

export const getFreeDelivery = (total: number): number => {
  try {
    const res = 6900 - total;
    if (res > 0) return res;
    return 0;
  } catch (error) {
    console.error('Erreur dans getFreeDelivery:', error);
    return 6900; // Valeur par défaut en cas d'erreur
  }
};

export const createCartItemsVMFromCartItems = (items: HashTable<CartItem>): HashTable<CartItemVM> => {
  try {
    const formatter = priceFormatter('fr-FR', 'EUR');
    const itemsVM: HashTable<CartItemVM> = {};
    
    // Vérifier que items existe
    if (!items) {
      return {};
    }
    
    Object.keys(items).forEach((key) => {
      try {
        const item = items[key];
        
        // Vérifier que l'item existe
        if (!item) {
          return;
        }
        
        itemsVM[key] = {
          uuid: item.uuid || '',
          name: item.name || '',
          laboratory: item.laboratory || '',
          totalPrice: formatter.format((item.totalPrice || 0) / 100),
          freeDelivery: formatter.format(getFreeDelivery(item.totalPrice || 0) / 100),
          quantity: item.quantity || 0,
          img: item.img || '',
          weight: item.weight || 0,
          medecine: item.medecine || false,
          noticeUrl: item.noticeUrl || '',
          totalPriceWithDelivery: '',  // Sera défini plus tard
        };
        
        if (item.totalPriceWithPromotion) {
          itemsVM[key].totalPriceWithPromotion = formatter.format(item.totalPriceWithPromotion / 100);
        }
      } catch (itemError) {
        console.error(`Erreur lors du traitement de l'item ${key}:`, itemError);
      }
    });
    
    return itemsVM;
  } catch (error) {
    console.error('Erreur dans createCartItemsVMFromCartItems:', error);
    return {}; // Objet vide en cas d'erreur
  }
};

export const getCartVM = (): CartVM => {
  try {
    const formatter = priceFormatter('fr-FR', 'EUR');
    const deliveryStore = useDeliveryStore();
    const selectedMethod = deliveryStore.selected || null;
    
    // Obtenir les produits du panier de manière sécurisée
    const { items, total, totalWithPromotion, totalWeight } = getProductsInCart();
    
    // Vérifier si le panier contient des médicaments de manière sécurisée
    const hasMedicine = Object.values(items).some((item: CartItem) => item && item.medecine === true);
    
    // Créer un objet CartVM par défaut
    const res: CartVM = {
      items: createCartItemsVMFromCartItems(items),
      totalPrice: formatter.format(total / 100),
      totalPriceWithDelivery: formatter.format(getTotalWithDelivery(total, totalWeight, hasMedicine) / 100),
      freeDelivery: formatter.format(getFreeDelivery(total) / 100),
      DeliveryPrice: selectedMethod 
        ? formatter.format(getDeliveryPrice(selectedMethod, totalWeight, total, hasMedicine) / 100)
        : formatter.format(0),
    };
    
    // Ajouter le prix avec promotion si différent du prix normal
    if (total !== totalWithPromotion) {
      res.totalPriceWithPromotion = formatter.format(getTotalWithDelivery(totalWithPromotion, totalWeight, hasMedicine) / 100);
      
      if (selectedMethod) {
        res.DeliveryPrice = formatter.format(getDeliveryPrice(selectedMethod, totalWeight, totalWithPromotion, hasMedicine) / 100);
      }
      
      res.freeDelivery = formatter.format(getFreeDelivery(totalWithPromotion) / 100);
    }
    
    return res;
  } catch (error) {
    console.error('Erreur dans getCartVM:', error);
    // Retourner un objet CartVM par défaut en cas d'erreur
    return {
      items: {},
      totalPrice: '0,00 €',
      totalPriceWithDelivery: '0,00 €',
      freeDelivery: '69,00 €',
      DeliveryPrice: '0,00 €',
    };
  }
};