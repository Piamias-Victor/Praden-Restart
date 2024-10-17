import { defineStore } from 'pinia'

export abstract class Notification {
  protected _msg = ''

  protected constructor(msg: string) {
    this._msg = msg
  }

  get msg(): string {
    return this._msg
  }
}

export const useNotificationsStore = defineStore('notificationsStore', {
  state: () => {
    return {
      notifications: [] as Array<Notification>
    }
  },
  actions: {
    add(notification: Notification) {
      this.notifications.push(notification)
    },

    remove(index: number) {
      this.notifications.splice(index, 1)
    },

    removeLast() {
      this.notifications.pop()
    },

    removeFirst() {
      this.notifications.shift()
    }
  }
})
