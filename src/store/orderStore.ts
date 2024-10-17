import { defineStore } from 'pinia'
import { Order } from '@core/entities/order'

export const useOrderStore = defineStore('OrderStore', {
  state: () => {
    return {
      items: [] as Array<Order>,
      current: undefined as Order | undefined
    }
  },
  actions: {
    add(order: Order) {
      this.items.push(order)
    },
    list(orders: Array<Order>) {
      this.items = orders
    },
    setCurrent(order: Order) {
      this.current = order
    }
  }
})
