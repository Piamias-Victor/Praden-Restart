import { defineStore } from 'pinia'
import { UUID } from '@core/types/types'

export const useLikeStore = defineStore('likeStore', {
  state: () => {
    return {
      items: [] as Array<UUID>
    }
  },
  actions: {
    add(productUuid: UUID) {
      this.items.push(productUuid)
    },

    remove(productUuid: UUID) {
      const index = this.items.lastIndexOf(productUuid)
      if (index === -1) throw 'error'
      this.items.splice(index, 1)
    },

    removeAll() {
      this.items = []
    },

    removeAllItemByUuid(productUuid: UUID) {
      if (this.items.indexOf(productUuid) === -1) throw 'error'
      this.items = this.items.filter((uuid: UUID) => uuid !== productUuid)
    }
  }
})
