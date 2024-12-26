import { MyOrderGateway } from '@core/gateways/myOrderGateway';
import { useMyOrderStore } from '@store/myOrderStore';

export const listMyOrder = async (myOrderGateway: MyOrderGateway, token: string) => {
  try {
    const myOrders: Array<any> = await myOrderGateway.listAll(token);
    const myOrdersStore = useMyOrderStore();
    myOrdersStore.list(myOrders);
  } catch (error) {
    console.error('Erreur lors de la récupération des commandes :', error);
  }
};
