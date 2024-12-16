import { MyOrderGateway } from '@core/gateways/myOrderGateway';
import axios from 'axios';

export class RealmyOrderGateway implements MyOrderGateway {
  private readonly baseUrl: string;
  private readonly ordersUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
    this.ordersUrl = `${this.baseUrl}/orders`;
  }

  async listAll(): Promise<Array<any>> {
    const res = await axios.get(`${this.ordersUrl}`);
    return Promise.resolve(res.data.items);
  }
}
