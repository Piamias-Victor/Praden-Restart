import { User } from '@core/types/types';
import { defineStore } from 'pinia';

export const useUserStore = defineStore('userStore', {
  state: () => {
    return {
      user: {} as User,
      isConnected: false,
    };
  },
  actions: {
    listUser(user: User) {
      this.user = user;
    },
    returnIsConnected() {
      return this.isConnected;
    },
    connect() {
      this.isConnected = true;
    },
    disconnect() {
      this.isConnected = false;
      this.user = {};
    },
    update(user: User) {
      this.user = user;
      this.user.deliveryAddress = {
        firstname: user.firstName,
        lastname: user.lastName,
        country: user.country,
        address: user.address,
        city: user.city,
        zip: user.postal,
      };
      this.user.billingAddress = {
        firstname: user.firstName,
        lastname: user.lastName,
        country: user.country,
        address: user.address,
        city: user.city,
        zip: user.postal,
      };
    },
  },
});
