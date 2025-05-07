import { Product } from '@core/entities/product';
import { ProductGateway } from '@core/gateways/productGateway';
import { HashTable, UUID } from '@core/types/type';
import { useCartStore } from '@store/cartStore';
import { useProductStore } from '@store/productStore';

export interface CartQuantityVM {
  items: HashTable<number>;
  totalQuantity: number;
  medecine: boolean;
}

export const getCartQuantityVM = async (productGateway: ProductGateway): Promise<CartQuantityVM> => {
  try {
    const cartStore = useCartStore();
    const productStore = useProductStore();
    const cartItems = cartStore.items;
    const products = productStore.items;
    
    // Filtrer les produits indéfinis pour éviter les erreurs
    const productsInCart = cartItems
      .map((uuid: UUID) => products.find((product: Product) => uuid === product.uuid))
      .filter((product): product is Product => product !== undefined);
    
    return productsInCart.reduce(
      (acc: CartQuantityVM, p: Product) => {
        let quantity = 1;
        let totalQuantity = acc.totalQuantity;
        let medecine = acc.medecine;
        
        // Vérifier que p et p.isMedicine ne sont pas undefined
        if (p && p.isMedicine === true) {
          medecine = true;
        }
        
        totalQuantity++;
        
        if (acc.items[p.uuid]) {
          quantity = acc.items[p.uuid] + 1;
        }
        
        return {
          items: {
            ...acc.items,
            [p.uuid]: quantity,
          },
          totalQuantity,
          medecine,
        };
      },
      { items: {}, totalQuantity: 0, medecine: false } as CartQuantityVM,
    );
  } catch (error) {
    console.error('Erreur dans getCartQuantityVM:', error);
    // Retourner un objet par défaut en cas d'erreur
    return { 
      items: {}, 
      totalQuantity: 0, 
      medecine: false 
    };
  }
};
