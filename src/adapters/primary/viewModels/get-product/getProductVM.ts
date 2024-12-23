import { Product, ProductDetail, ReductionType } from '@core/entities/product';
import { UUID } from '@core/types/type';
import { useProductStore } from '@store/productStore';
import { useSearchStore } from '@store/searchStore';
import { percentFormatter, priceFormatter } from '@utils/formater';
import { getPromotionVM, PromotionVM } from '../get-category/getCategoryVM';
import { ProductGateway } from '@core/gateways/productGateway';
import { getProduct } from '@core/usecases/get-product/getProduct';

export interface Image {
  src: string;
  alt: string;
}

export interface ProductDetailVM {
  uuid: UUID;
  name: string;
  laboratory: string;
  price: string;
  promotion?: any;
  images: Array<Image>;
  description: string;
  rating?: number;
  notice?: string;
  details: Array<any>;
}

const getDetails = (product: ProductDetail | undefined): Array<any> => {
  const details = [];
  if (product?.instructionsForUse) {
    details.push({
      name: "Conseils d'utilisation",
      value: product.instructionsForUse,
    });
  }
  if (product?.composition) {
    details.push({
      name: 'Composition',
      value: product.composition,
    });
  }
  if (product?.notice) {
    details.push({
      name: 'Notice',
      value: product.notice,
    });
  }
  return details;
};

export const getPromotionInProductVM = (product: Product | ProductDetail): PromotionVM | undefined => {
  const formatter = priceFormatter('fr-FR', 'EUR');
  const promotion = product?.promotions[0];
  let res: PromotionVM | undefined = undefined;
  if (promotion) {
    if (promotion.type === ReductionType.Fixed) {
      res = {
        type: promotion.type,
        amount: formatter.format(promotion.amount / 100),
        price: formatter.format((product.price - promotion.amount) / 100),
      };
    } else {
      res = {
        type: promotion.type,
        amount: percentFormatter(promotion.amount),
        price: formatter.format((product.price - (product.price * promotion.amount) / 100) / 100),
      };
    }
  }
  return res;
};

export const getProductVM = (): ProductDetailVM => {
  const productStore = useProductStore();
  const product = productStore.current;
  const formatter = priceFormatter('fr-FR', 'EUR');
  const details = getDetails(product);
  const promotion = getPromotionInProductVM(product);
  console.log("pro", product)
  const res: ProductDetailVM = {
    uuid: product?.uuid || '',
    name: product?.name || '',
    laboratory: product?.laboratory || '',
    price: product ? formatter.format(product.price / 100) : '',
    images: product ? [{ src: product.images, alt: product?.name }] : [],
    description: product?.description || '',
    rating: product?.rating,
    details,
    promotion,
  };
  return res;
};

export const getProductInPromotionVM = () => {
  const productStore = useProductStore();
  const productInPromotion = productStore.promotions;
  const formatter = priceFormatter('fr-FR', 'EUR');
  return {
    products: productInPromotion.slice(0, 20).map((p) => {
      const promotion = getPromotionVM(p);
      const res = {
        uuid: p.uuid,
        name: p.name,
        laboratory: p.laboratory,
        images: p.images,
        price: formatter.format(p.priceWithTax / 100),
        availableStock: p.availableStock,
        href: `/products/${p.uuid}`,
      };
      if (promotion) {
        res.promotion = promotion;
      }
      return res;
    }),
  };
};

export const getSearchProductVM = () => {
  const searchStore = useSearchStore();
  const product = searchStore.products;
  const formatter = priceFormatter('fr-FR', 'EUR');
  const details = getDetails(product);
  const res = {
    uuid: product?.uuid || '',
    name: product?.name || '',
    laboratory: product?.laboratory || '',
    price: product ? formatter.format(product.priceWithTaxe / 100) : '',
    images: product ? [{ src: product.images, alt: product?.name }] : [],
    availableStock: product.availableStock,
  };
  return res;
};
