import { useCategoryStore } from '@store/categoryStore';
import { CategoryGateway } from '@core/gateways/categoryGateway';
import { Category } from '@core/entities/category';
import { ProductGateway } from '@core/gateways/productGateway';
import { Product } from '@core/entities/product';
import { UUID } from '@core/types/type';
import { useProductStore } from '@store/productStore';

export const listPromotions = async (productGateway: ProductGateway) => {
  const product: Array<UUID> = await productGateway.listPromotions();
  const productStore = useProductStore();
  productStore.promotions = product;
};
