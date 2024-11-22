import { useNotificationsStore } from '@store/notificationsStore';

export const removeNotification = async (index: number) => {
  const notificationsStore = useNotificationsStore();
  notificationsStore.remove(index);
};

export const removeLastNotification = async () => {
  const notificationsStore = useNotificationsStore();
  notificationsStore.removeLast();
};

export const removeFirstNotification = async () => {
  const notificationsStore = useNotificationsStore();
  notificationsStore.removeFirst();
};
