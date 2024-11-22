import { Product } from '@core/entities/product';
import { ProductGateway } from '@core/gateways/productGateway';
import { HashTable, UUID } from '@core/types/type';
import { useCartStore } from '@store/cartStore';
import { useLikeStore } from '@store/likeStore';
import { useProductStore } from '@store/productStore';

export interface LikeQuantityVM {
  items: HashTable<number>;
  totalQuantity: number;
}

export const getLikeQuantityVM = async (productGateway: ProductGateway): Promise<LikeQuantityVM> => {
  const likeStore = useLikeStore();
  const productStore = useProductStore();
  const likeItems = likeStore.items;
  const products = productStore.items;
  const productsInCart = likeItems.map((uuid: UUID) => products.find((product: Product) => uuid === product.uuid));
  return productsInCart.reduce(
    (acc: any, p: Product) => {
      let quantity = 1;
      let totalQuantity = acc.totalQuantity;
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
      };
    },
    { items: {}, totalQuantity: 0 } as LikeQuantityVM,
  );
};
