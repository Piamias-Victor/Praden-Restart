import { useNotificationsStore } from '@store/notificationsStore'

export abstract class Notification {
  protected _msg = ''

  protected constructor(msg: string) {
    this._msg = msg
  }

  get msg(): string {
    return this._msg
  }
}

export class SuccessNotification extends Notification {
  constructor(msg: string) {
    super(msg)
  }
}

export const sendNotifCart = async () => {
  const notificationsStore = useNotificationsStore()

  console.log('test la')

  try {
    notificationsStore.add(
      new SuccessNotification('Produit ajouté au panier avec succès')
    )
  } catch (e: any) {
    console.error('soucis')
  }
}

export const sendNotifLike = async () => {
  const notificationsStore = useNotificationsStore()

  console.log('test la')

  try {
    notificationsStore.add(
      new SuccessNotification('Produit ajouté au favoris avec succès')
    )
  } catch (e: any) {
    console.error('soucis')
  }
}
