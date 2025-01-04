import { useSearchStore } from '@store/searchStore';
import { priceFormatter } from '@utils/formater';
import { ProductItemVM, getPromotionVM } from '../get-category/getCategoryVM';
import { sortByPrice, SortType } from '@utils/sort';
import { getBestSales } from '../get-product/getProductVM';

type GetSearchResultItemVM = ProductItemVM;

export const getSearchResultVM = (sortType: SortType = SortType.None): GetSearchResultVM => {
  const searchStore = useSearchStore();
  const products = searchStore.result;
  const facets = searchStore.facets;
  const formatter = priceFormatter('fr-FR', 'EUR');

  if (products.length === 0) {
    return { items: [] };
  }

  // Au lieu de `products.sort(...)`, on crée une copie avec le spread operator
  // - products.sort(sortByPrice(sortType));
  const sortedProducts = [...products].sort(sortByPrice(sortType));

  return {
    // -   items: products.map((p) => {
    items: sortedProducts.map((p) => {
      const promotion = getPromotionVM(p);
      const res: GetSearchResultItemVM = {
        uuid: p.uuid,
        name: p.name,
        laboratory: p.laboratory,
        images: p.images,
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
    facets,
  };
};

export const getSearchResultVMFirstSix = (excludeUuid: string): GetSearchResultVM => {
  const searchStore = useSearchStore();
  const products = searchStore.result;
  const formatter = priceFormatter('fr-FR', 'EUR');
  const defaultProducts = getBestSales();

  // Si aucun produit, renvoyer un tableau vide
  // if (products.length === 0) return defaultProducts.products;

  // Filtrer les produits pour exclure celui avec l'uuid spécifié
  let filteredProducts = products.filter((p) => p.uuid !== excludeUuid);

  if (filteredProducts.length === 0) {
    return {
      items: defaultProducts.products.slice(0, 6).map((p) => {
        // Utilisation de slice(0, 6) pour prendre les 6 premiers produits
        const promotion = getPromotionVM(p);
        const res: GetSearchResultItemVM = {
          uuid: p.uuid,
          name: p.name,
          laboratory: p.laboratory,
          images: p.images,
          price: p.price,
          href: `/products/${p.uuid}`,
          availableStock: p.availableStock,
        };
        if (promotion) {
          res.promotion = promotion;
        }
        return res;
      }),
    };
  }

  // Retourner les 6 premiers produits après filtrage
  return {
    items: filteredProducts.slice(0, 6).map((p) => {
      // Utilisation de slice(0, 6) pour prendre les 6 premiers produits
      const promotion = getPromotionVM(p);
      const res: GetSearchResultItemVM = {
        uuid: p.uuid,
        name: p.name,
        laboratory: p.laboratory,
        images: p.images,
        price: formatter.format(p.priceWithTax / 100),
        href: `/products/${p.uuid}`,
        availableStock: p.availableStock,
      };
      if (promotion) {
        res.promotion = promotion;
      }
      return res;
    }),
  };
};
