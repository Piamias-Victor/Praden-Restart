import { WindowGateway } from '@core/gateways/windowGateway';

export class FakeWindowGateway implements WindowGateway {
  private currentUrl = '';

  redirectTo(url: string) {
    this.currentUrl = url;
  }

  get url(): string {
    return this.currentUrl;
  }
}
