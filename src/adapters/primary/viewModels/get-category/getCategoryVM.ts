import { Product, ProductDetail, ReductionType } from '@core/entities/product';
import { UUID } from '@core/types/type';
import { useSearchStore } from '@store/searchStore';
import { percentFormatter, priceFormatter } from '@utils/formater';
import { SortType, sortByPrice, sortByName } from '@utils/sort';
import { useCategoryStore } from '@store/categoryStore';
import { CategoryGateway } from '@core/gateways/categoryGateway';
import { SearchGateway } from '@core/gateways/searchGateway';
import { getChildCategoriesVM } from './getChildCategoryVM';
import { LaboratoryGateway } from '@core/gateways/laboratoryGateway';

export interface PromotionVM {
  type: ReductionType;
  amount: string;
  price: string;
}

export interface ProductItemVM {
  uuid: UUID;
  name: string;
  laboratory: string;
  price: string;
  images: string;
  href: string;
  promotion?: PromotionVM;
}

export enum FacetItemVMType {
  Choice,
  Range,
}

interface FacetItemVM {
  name: string;
  type: FacetItemVMType;
  value: string;
}

export interface FacetOptionVM {
  label: string;
  value: string | UUID;
  checked: boolean;
}

export interface FacetItemChoiceVM extends FacetItemVM {
  options: Array<FacetOptionVM>;
}

export interface FacetItemRangeVM extends FacetItemVM {
  min: string;
  max: string;
}

export type FacetVM = FacetItemChoiceVM | FacetItemRangeVM;

interface CategoryItemVM {
  name: string;
  href: string;
}

export interface GetCategoryVM {
  name: string;
  products: Array<ProductItemVM>;
  childCategories: Array<CategoryItemVM>;
  sortOptions: Array<SortOption>;
}

export interface SortOption {
  name: string;
  sortType: SortType;
  current: boolean;
}

export const getPromotionVM = (product: Product | ProductDetail): PromotionVM | undefined => {
  const formatter = priceFormatter('fr-FR', 'EUR');
  const promotion = product.promotion;
  let res: PromotionVM | undefined = undefined;
  if (promotion) {
    if (promotion.type === ReductionType.Fixed) {
      res = {
        type: promotion.type,
        amount: formatter.format(promotion.amount / 100),
        price: formatter.format((product.priceWithTax - promotion.amount) / 100),
      };
    } else {
      res = {
        type: promotion.type,
        amount: percentFormatter(promotion.amount),
        price: formatter.format((product.priceWithTax - (product.priceWithTax * promotion.amount) / 100) / 100),
      };
    }
  }
  return res;
};

export const getCategoryVM = (sortType: SortType = SortType.None) => {
  const categoryStore = useCategoryStore();
  const categories = categoryStore.items;
  const searchStore = useSearchStore();
  const categoryUuid = searchStore.currentCategory;
  const category = categories.find((c) => c.uuid === categoryUuid);
  const subCategories = categories.filter((c) => c.parentUuid === categoryUuid);
  const formatter = priceFormatter('fr-FR', 'EUR');
  const sortOptions: Array<SortOption> = [
    {
      name: 'https://i.postimg.cc/Bn0MBC8H/1.png',
      sortType: SortType.Asc,
      current: sortType === SortType.Asc,
    },
    {
      name: 'https://i.postimg.cc/ZqfHZtwx/2.png',
      sortType: SortType.Desc,
      current: sortType === SortType.Desc,
    },
  ];
  const products = searchStore.products;
  products.sort(sortByPrice(sortType));
  return {
    name: category?.name || '',
    description: category?.description || '',
    childCategories: getChildCategoriesVM(category?.uuid),
    products: products.map((p) => {
      const promotion = getPromotionVM(p);
      const res = {
        uuid: p.uuid,
        name: p.name,
        laboratory: p.laboratory,
        images: p.images,
        price: formatter.format(p.priceWithTax / 100),
        href: `/products/${p.uuid}`,
      };
      if (promotion) {
        res.promotion = promotion;
      }
      return res;
    }),
    sortOptions: categoryUuid ? sortOptions : [],
  };
};

export const getCategory = async (uuid: UUID, categoryGateway: CategoryGateway, searchGateway: SearchGateway) => {
  const categoryStore = useCategoryStore();
  try {
    categoryStore.getByUuid(uuid);
  } catch (e: any) {
    const category = await categoryGateway.getByUuid(uuid);
    categoryStore.add(category);
  }
  const productsWithFacets = await searchGateway.getCategory(uuid);
  const searchStore = useSearchStore();
  if (productsWithFacets) {
    searchStore.setCurrentCategory(uuid);
    searchStore.setProducts(productsWithFacets.items);
    searchStore.setSearchResult(productsWithFacets.items);
    searchStore.setFacets(productsWithFacets.facets);
  } else {
    searchStore.reset();
  }
};

export const trimString = (name: string, n: number) => {
  if (name.length <= n) return name;
  return name.substring(0, n) + '...';
};

export const getParentCategory = (uuid: string, categories: any[]) => {
  const category = categories.find((c: any) => c.uuid === uuid);
  return category ? category : null;
};

export const getRootCategoryUuid = (uuid: string): string | null => {
  const categoryStore = useCategoryStore();
  const categories = Array.from(categoryStore.itemsSet); // Conversion du Set en tableau
  let currentUuid = uuid;
  let iterations = 0; // Compteur d'itérations
  const maxIterations = 10; // Limite d'itérations pour éviter les boucles infinies

  while (currentUuid) {
    iterations++;
    if (iterations > maxIterations) {
      return null; // Arrête la recherche après trop d'itérations
    }

    const currentCategory = getParentCategory(currentUuid, categories);
    if (!currentCategory) {
      break; // Si aucune catégorie n'est trouvée, arrêtez la recherche
    }

    if (!currentCategory.parentUuid) {
      return currentCategory.uuid; // Retourne l'UUID de la catégorie racine
    }

    currentUuid = currentCategory.parentUuid; // Remonte à la catégorie parente
  }

  return null; // Si aucune catégorie racine n'est trouvée
};

export const getSimpleCategoryVM = () => {
  const categoryStore = useCategoryStore();
  return categoryStore.itemsSet;
};
