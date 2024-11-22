import { WindowGateway } from '@core/gateways/windowGateway';

export class RealWindowGateway implements WindowGateway {
  redirectTo(url: string) {
    window.location.href = url;
  }
}
