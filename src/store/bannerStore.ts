import { Laboratory } from '@core/entities/laboratory';
import { LaboratoryDoesNotExistsError } from '@core/errors/LaboratoryDoesNotExistsError';
import { UUID } from '@core/types/type';
import { defineStore } from 'pinia';

export const useBannerStore = defineStore('BannerStore', {
  state: () => ({
    items: [] as Array<any>,
  }),
  getters: {
    itemsSet: (state) => {
      return new Set(state.items);
    },
  },
  actions: {
    list(banner: Array<any>) {
      console.log('dans le store : ', banner);
      this.items = banner;
    },
  },
});
