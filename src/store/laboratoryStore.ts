import { Laboratory } from '@core/entities/laboratory';
import { LaboratoryDoesNotExistsError } from '@core/errors/LaboratoryDoesNotExistsError';
import { UUID } from '@core/types/type';
import { defineStore } from 'pinia';

export const useLaboratoryStore = defineStore('LaboratoryStore', {
  state: () => {
    return {
      itemsSet: new Set() as Set<Laboratory>,
      best: [] as Array<UUID>,
    };
  },
  getters: {
    getByUuid: (state) => {
      return (uuid: UUID): Laboratory => {
        const laboratories = Array.from(state.itemsSet);
        const category = laboratories.find((p) => p.uuid === uuid);
        if (!category) throw new LaboratoryDoesNotExistsError(uuid);
        return category;
      };
    },
    items: (state) => {
      return Array.from(state.itemsSet);
    },

    getByName: (state) => {
      return (name: string): Laboratory => {
        const laboratories = Array.from(state.itemsSet);
        const category = laboratories.find((p) => p.name === name);
        if (!category) throw new LaboratoryDoesNotExistsError(name);
        return category;
      };
    },
    itemsName: (state) => {
      return Array.from(state.itemsSet);
    },
  },
  actions: {
    list(laboratories: Array<Laboratory>) {
      this.itemsSet = new Set(laboratories);
    },
    listBest(bestLaboratories: Array<UUID>) {
      this.best = bestLaboratories;
    },
    add(category: Laboratory) {
      this.itemsSet.add(category);
    },
  },
});
