import { Category } from '@core/entities/category';
import { CategoryDoesNotExistsError } from '@core/errors/CategoryDoesNotExistsError copy';
import { UUID } from '@core/types/type';
import { defineStore } from 'pinia';

export const useMyOrderStore = defineStore('myOrderStore', {
  state: () => {
    return {
      itemsSet: new Set() as Set<any>,
    };
  },
  getters: {
    items: (state) => {
      return Array.from(state.itemsSet);
    },
  },
  actions: {
    list(categories: Array<any>) {
      this.itemsSet = new Set(categories);
    },
  },
});
