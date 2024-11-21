import { ProductGateway } from '@core/gateways/productGateway';
import { UUID } from '@core/types/types';
import { useProductStore } from '@store/productStore';

export const getProduct = async (productUuid: UUID, productGateway: ProductGateway) => {
  const product = await productGateway.getByUuid(productUuid);
  const productStore = useProductStore();
  productStore.setCurrent(product);
};
