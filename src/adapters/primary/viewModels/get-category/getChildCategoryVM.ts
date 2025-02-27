import { UUID } from '@core/types/types';
import { useCategoryStore } from '@store/categoryStore';
import { Category } from '@core/entities/category';
import { formatCategoryName } from './getRootCategoriesVM';
import { getRootCategoryUuid } from './getCategoryVM';

export interface ChildCategoryItemVM {
  uuid: UUID;
  name: string;
  href: string;
  img: string;
  icon: string;
}

export interface ChildCategoriesVM {
  items: Array<ChildCategoryItemVM>;
  name: string;
}

export const getChildCategoriesVM = (uuid: UUID): ChildCategoriesVM => {
  const categoryStore = useCategoryStore();
  const categories = categoryStore.items;
  const childCategories = categories.filter((c) => c.parentUuid === uuid);
  const currentCategory = categories.filter((c) => c.uuid === uuid);
  return {
    name: '',
    items: childCategories.map((category: Category) => {
      return {
        uuid: category.uuid,
        name: formatCategoryName(category.name),
        href: `/categories/${category.uuid}`,
        img: category.image ?? getImageInMemory(category.uuid),
        icon: category.image ?? getIconInMemory(getRootCategoryUuid(category.uuid)),
        // icon: category.image,
        // icon: getIconInMemory(getRootCategoryUuid(category.uuid)),
      };
    }),
  };
};

export const getImageInMemory = (uuid: UUID): string => {
  return '';
};

export const getIconInMemory = (uuid: UUID): string => {
  if (uuid === '19730921-246e-4eec-9a3b-17b49e416c82') return 'https://i.postimg.cc/8cHFgx6z/3.png';
  if (uuid === '0f4946ae-2e5f-46e8-86a7-fb6d3ae8d75f') return 'https://i.postimg.cc/cJnrLvnj/7.png';
  if (uuid === '0681dc96-411b-4ed5-b457-5c09e7163373') return 'https://i.postimg.cc/sXC1Q3P2/8.png';
  if (uuid === '9869193d-f291-4a74-9d29-b09429b7f81d') return 'https://i.postimg.cc/0yrzhW29/6.png';
  if (uuid === 'ed552c28-e8d8-444c-955f-d9ea7803f8fd') return 'https://i.postimg.cc/Y2fLFLsB/4.png';
  if (uuid === '7480b66f-d589-42de-a122-3cff0590dd40') return 'https://i.postimg.cc/cLBj3hNG/1.png';
  if (uuid === 'e226d36e-1c9e-44e1-8cb0-a70847d35ed7') return 'https://i.postimg.cc/RhQtVNj9/2.png';
  if (uuid === 'aadb1ea0-3961-46c8-8005-172779c74756') return 'https://i.postimg.cc/1tDnJ8R6/5.png';
  if (uuid === '03c3ddc9-7616-48df-9bf7-3290da61b23b') return 'https://i.postimg.cc/HkthTcR1/promo.png';
  return 'https://i.postimg.cc/KYvsjchk/category.png';
};
