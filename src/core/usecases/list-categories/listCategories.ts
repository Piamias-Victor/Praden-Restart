import { useCategoryStore } from '@store/categoryStore';
import { CategoryGateway } from '@core/gateways/categoryGateway';
import { Category } from '@core/entities/category';

export const listCategories = async (categoryGateway: CategoryGateway) => {
  const categories: Array<Category> = await categoryGateway.listAll();
  const categoryStore = useCategoryStore();
  categoryStore.list(categories);
};
