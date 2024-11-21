import { UUID } from '@core/types/types';
import { useCategoryStore } from '@store/categoryStore';
import { Category } from '@core/entities/category';
import { formatCategoryName } from './getRootCategoriesVM';
import { getRootCategoryUuid } from './getCategoryVM';
import { useLaboratoryStore } from '@store/laboratoryStore';
import { Laboratory } from '@core/entities/laboratory';

export interface SearchCategoryItemVM {
  uuid: UUID;
  name: string;
  href: string;
  img: string;
  icon: string;
}

export interface SearchCategoriesVM {
  items: Array<SearchCategoryItemVM>;
}

export const getSearchCategoriesVM = (query: string): SearchCategoriesVM => {
  const categoryStore = useCategoryStore();
  const categories = categoryStore.items;
  const searchCategories = categories.filter((c) =>
    removeAccents(c.name).toLowerCase().includes(removeAccents(query).toLowerCase()),
  );

  const sortedCategories = searchCategories.sort((a, b) => {
    const queryLower = removeAccents(query).toLowerCase();
    const aName = removeAccents(a.name).toLowerCase();
    const bName = removeAccents(b.name).toLowerCase();

    if (aName.startsWith(queryLower) && !bName.startsWith(queryLower)) {
      return -1; // `a` avant `b`
    }
    if (!aName.startsWith(queryLower) && bName.startsWith(queryLower)) {
      return 1; // `b` avant `a`
    }
    return aName.localeCompare(bName); // Tri alphabétique
  });

  return {
    items: searchCategories.map((category: Category) => {
      return {
        uuid: category.uuid,
        name: formatCategoryName(category.name),
        href: `/categories/${category.uuid}`,
        img: getImageInMemory(category.uuid),
        icon: getIconInMemory(getRootCategoryUuid(category.uuid)),
      };
    }),
  };
};

export const getSearchLaboratoriesVM = (query: string): SearchCategoriesVM => {
  const laboratoryStore = useLaboratoryStore();
  const laboratories = laboratoryStore.items;
  const searchLaboratories = laboratories.filter((l) =>
    removeAccents(l.name).toLowerCase().includes(removeAccents(query).toLowerCase()),
  );
  const sortedLaboratories = searchLaboratories.sort((a, b) => {
    const queryLower = removeAccents(query).toLowerCase();
    const aName = removeAccents(a.name).toLowerCase();
    const bName = removeAccents(b.name).toLowerCase();

    if (aName.startsWith(queryLower) && !bName.startsWith(queryLower)) {
      return -1; // `a` avant `b`
    }
    if (!aName.startsWith(queryLower) && bName.startsWith(queryLower)) {
      return 1; // `b` avant `a`
    }
    return aName.localeCompare(bName); // Tri alphabétique
  });

  return {
    items: searchLaboratories.map((laboratory: any) => {
      return {
        uuid: laboratory.uuid,
        name: formatCategoryName(laboratory.name),
        href: `/laboratory/${laboratory.uuid}`,
        description: laboratory.description,
      };
    }),
  };
};

function removeAccents(str: string): string {
  return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}

export const getImageInMemory = (uuid: UUID): string => {
  return '';
};

export const getIconInMemory = (uuid: UUID): string => {
  if (uuid === '19730921-246e-4eec-9a3b-17b49e416c82') return 'https://i.postimg.cc/kgPc6JKM/baby-svgrepo-com.png';
  if (uuid === '0f4946ae-2e5f-46e8-86a7-fb6d3ae8d75f') return 'https://i.postimg.cc/4dybkmkP/dog.png';
  if (uuid === '0681dc96-411b-4ed5-b457-5c09e7163373') return 'https://i.postimg.cc/k4HNnq7m/pills.png';
  if (uuid === '9869193d-f291-4a74-9d29-b09429b7f81d') return 'https://i.postimg.cc/zvRCv6fR/nature.png';
  if (uuid === 'ed552c28-e8d8-444c-955f-d9ea7803f8fd') return 'https://i.postimg.cc/YjK1WR4D/ortho.png';
  if (uuid === '7480b66f-d589-42de-a122-3cff0590dd40') return 'https://i.postimg.cc/667gCQ2C/dermo-Black.png';
  if (uuid === 'e226d36e-1c9e-44e1-8cb0-a70847d35ed7') return 'https://i.postimg.cc/NGWVDwmS/sante.png';
  if (uuid === 'aadb1ea0-3961-46c8-8005-172779c74756') return 'https://i.postimg.cc/4NV0FF1d/care.png';
  if (uuid === '03c3ddc9-7616-48df-9bf7-3290da61b23b') return 'https://i.postimg.cc/HkthTcR1/promo.png';
  return 'https://i.postimg.cc/KYvsjchk/category.png';
};
