import { MyOrderGateway } from "@core/gateways/myOrderGateway";
import { useMyOrderStore } from "@store/myOrderStore";


export const listMyOrder = async (myOrderGateway: MyOrderGateway) => {
  const myOrders: Array<any> = await myOrderGateway.listAll();
  const myOrdersStore = useMyOrderStore();
  myOrdersStore.list(myOrders);
};
