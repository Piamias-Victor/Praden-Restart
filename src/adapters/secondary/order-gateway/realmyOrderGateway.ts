import { MyOrderGateway } from '@core/gateways/myOrderGateway';
import axios from 'axios';

export class RealmyOrderGateway implements MyOrderGateway {
  private readonly baseUrl: string;
  private readonly ordersUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
    this.ordersUrl = `${this.baseUrl}/orders`;
  }

  async listAll(token: string): Promise<Array<any>> {
    try {
      const res = await axios.get(`${this.ordersUrl}`, {
        headers: {
          Authorization: `Bearer ${token}`, // Ajout du token ici
        },
      });
      return Promise.resolve(res.data.items);
    } catch (error) {
      console.error('Erreur lors de la récupération des commandes :', error);
      throw error;
    }
  }
}
