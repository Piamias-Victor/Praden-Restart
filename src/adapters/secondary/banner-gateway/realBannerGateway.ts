import axios from "axios";
import { BannerGateway } from "src/core/gateways/bannerGateway";


export class RealBannerGateway implements BannerGateway {
  private readonly baseUrl: string;
  private readonly bannerUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
    this.bannerUrl = `${this.baseUrl}/banners`;
  }

  async get(): Promise<any> {
    const res = await axios.get(`${this.bannerUrl}/`);
    return Promise.resolve(res.data);
  }
}
