import { getPromotionVM } from '@adapters/primary/viewModels/get-category/getCategoryVM';

export enum SortType {
  None,
  Asc,
  Desc,
  PromotionsFirst,
}

export const sortByName = (a: any, b: any) => {
  return a.name < b.name ? -1 : 1;
};

export const sortByPrice =
  (sortType: SortType) =>
  (a: any, b: any): number => {
    // Si le tri est sur les promotions, place les produits avec promotion en premier
    if (sortType === SortType.PromotionsFirst) {
      const hasPromoA = getPromotionVM(a) ? 1 : 0;
      const hasPromoB = getPromotionVM(b) ? 1 : 0;

      // Les produits avec promotions viennent avant ceux sans
      if (hasPromoA !== hasPromoB) return hasPromoB - hasPromoA;
    }

    // Tri par prix croissant
    if (sortType === SortType.Asc) {
      return a.priceWithTax - b.priceWithTax;
    }

    // Tri par prix décroissant
    if (sortType === SortType.Desc) {
      return b.priceWithTax - a.priceWithTax;
    }
    return a.name < b.name ? -1 : 1;
  };
