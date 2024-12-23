import { defineStore } from 'pinia';
import { UUID } from '@core/types/types';
import { ProductIsNotInCartError } from '@core/errors/ProductIsNotInCartError';

export const useCartStore = defineStore('cartStore', {
  state: () => {
    return {
      items: [] as Array<UUID>,
    };
  },
  actions: {
    add(productUuid: UUID) {
      this.items.push(productUuid);
    },

    remove(productUuid: UUID) {
      const index = this.items.lastIndexOf(productUuid);
      if (index === -1) throw new ProductIsNotInCartError(productUuid);
      this.items.splice(index, 1);
    },

    removeAll() {
      this.items = [];
    },

    removeAllItemByUuid(productUuid: UUID) {
      if (this.items.indexOf(productUuid) === -1) throw new ProductIsNotInCartError(productUuid);
      this.items = this.items.filter((uuid: UUID) => uuid !== productUuid);
    },

    restoreCart(savedItems: any[]) {
      this.items = savedItems;
    },
  },
});
