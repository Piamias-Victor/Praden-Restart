import { Product, ProductDetail, ReductionType } from '@core/entities/product';
import { UUID } from '@core/types/type';
import { useProductStore } from '@store/productStore';
import { useSearchStore } from '@store/searchStore';
import { percentFormatter, priceFormatter } from '@utils/formater';
import { getPromotionVM, PromotionVM } from '../get-category/getCategoryVM';
import { ProductGateway } from '@core/gateways/productGateway';
import { getProduct } from '@core/usecases/get-product/getProduct';

const DEFAULT_IMAGE_URL = 'https://i.postimg.cc/GpcFkW2C/Whats-App-Image-2024-12-30-at-10-52-33.jpg';

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
  availableStock: number;
  isMedicine: boolean;
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

  const images: Array<Image> =
    product && product.images.length > 0 ? product.images.map((url) => url) : [DEFAULT_IMAGE_URL];

  console.log('product', product);
  const res: ProductDetailVM = {
    uuid: product?.uuid || '',
    name: product?.name || '',
    laboratory: product?.laboratory || '',
    price: product ? formatter.format(product.price / 100) : '',
    images: images,
    description: product?.description || '',
    rating: product?.rating,
    isMedicine: product?.isMedicine,
    availableStock: product?.availableStock,
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
      const images: Array<Image> = p && p.images.length > 0 ? p.images.map((url) => url) : [DEFAULT_IMAGE_URL];
      const res = {
        uuid: p.uuid,
        name: p.name,
        laboratory: p.laboratory,
        images: images,
        price: formatter.format(p.priceWithTax / 100),
        availableStock: p.availableStock,
        isMedecine: p.isMedicine,
        href: `/products/${p.uuid}`,
      };
      if (promotion) {
        res.promotion = promotion;
      }
      return res;
    }),
  };
};

export const getBestSales = () => {
  const productStore = useProductStore();
  const bestSales = productStore.bestSales;
  console.log('bestSales', bestSales);
  const formatter = priceFormatter('fr-FR', 'EUR');
  return {
    products: bestSales.map((product) => {
      const p = product.item;
      const promotion = getPromotionVM(p);
      const images: Array<Image> = p && p.images.length > 0 ? p.images.map((url) => url) : [DEFAULT_IMAGE_URL];
      const res = {
        uuid: p.uuid,
        name: p.name,
        laboratory: p.laboratory,
        images: images,
        price: formatter.format(p.price / 100),
        availableStock: p.availableStock,
        isMedicine: p.isMedicine,
        href: `/products/${p.uuid}`,
      };
      if (promotion) {
        res.promotion = promotion;
      }
      return res;
    }),
  };
};

export const get400ProductInPromotionVM = () => {
  const productStore = useProductStore();
  const productInPromotion = productStore.promotions;
  const formatter = priceFormatter('fr-FR', 'EUR');
  console.log('productInPromotion', productInPromotion);
  return {
    products: productInPromotion.slice(0, 400).map((p) => {
      const promotion = getPromotionVM(p);
      const images: Array<Image> = p && p.images.length > 0 ? p.images.map((url) => url) : [DEFAULT_IMAGE_URL];
      const res = {
        uuid: p.uuid,
        name: p.name,
        laboratory: p.laboratory,
        images: images,
        price: formatter.format(p.priceWithTax / 100),
        availableStock: p.availableStock,
        isMedecine: p.isMedicine,
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
  console.log('product', product);
  const images: Array<Image> =
    product && product.images.length > 0 ? product.images.map((url) => url) : [DEFAULT_IMAGE_URL];
  const res = {
    uuid: product?.uuid || '',
    name: product?.name || '',
    laboratory: product?.laboratory || '',
    price: product ? formatter.format(product.priceWithTaxe / 100) : '',
    images: images,
    isMedicine: product.isMedicine,
    availableStock: product.availableStock,
  };
  return res;
};
