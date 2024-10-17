import { ErrorNotification } from '@core/errors/errorNotification'
import { useNotificationsStore } from '@store/notificationsStore'

export enum NotificationType {
  Success,
  Error
}

export interface NotificationVM {
  type: NotificationType
  msg: string
  icon: string
  name: string
}
export interface NotificationsVM {
  notifications: Array<NotificationVM>
}

const getNotificationInfos = (notification: Notification) => {
  const error = {
    name: 'Erreur !',
    icon: 'radix-icons:cross-circled',
    type: NotificationType.Error
  }

  const success = {
    name: 'Succès !',
    icon: 'ic:round-check-circle-outline',
    type: NotificationType.Success
  }

  return notification instanceof ErrorNotification ? error : success
}

export const getNotificationsVM = (): NotificationsVM => {
  const notificationsStore = useNotificationsStore()
  const notifications = notificationsStore.notifications
  return {
    notifications: notifications.map((notification) => {
      const { type, icon, name } = getNotificationInfos(
        notification as Notification
      )
      return {
        msg: notification.msg,
        type: NotificationType.Success,
        icon: 'ic:round-check-circle-outline',
        name
      } as NotificationVM
    })
  }
}
