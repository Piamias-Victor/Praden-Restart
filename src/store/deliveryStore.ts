import { defineStore } from 'pinia';
import { UUID } from '@core/types/types';
import { DeliveryMethod } from '@core/entities/deliveryMethod';
import { DeliveryMethodDoesNotExistsError } from '@core/errors/DeliveryMethodDoesNotExistsError';

export const useDeliveryStore = defineStore('DeliveryStore', {
  state: () => {
    return {
      items: [] as Array<DeliveryMethod>,
      selected: {} as DeliveryMethod | undefined,
    };
  },
  getters: {
    getByUuid: (state) => {
      return (uuid: UUID): DeliveryMethod => {
        const methods = state.items;
        const method = methods.find((m) => m.uuid === uuid);
        if (!method) throw new DeliveryMethodDoesNotExistsError(uuid);
        return method;
      };
    },
  },
  actions: {
    list(methods: Array<DeliveryMethod>) {
      this.items = methods;
    },
    setSelected(method: DeliveryMethod) {
      this.selected = method;
    },
  },
});
