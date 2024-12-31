import { Laboratory } from '@core/entities/laboratory';
import { LaboratoryDoesNotExistsError } from '@core/errors/LaboratoryDoesNotExistsError';
import { UUID } from '@core/types/type';
import { defineStore } from 'pinia';

export const useCustomerMessageStore = defineStore('CustomerMessage', {
  state: () => ({
    items: [] as Array<String>,
  }),
  getters: {
    itemsSet: (state) => {
      return new Set(state.items);
    },
  },
  actions: {
    list(customerMessage: Array<String>) {
      this.items = customerMessage;
    },
  },
});
