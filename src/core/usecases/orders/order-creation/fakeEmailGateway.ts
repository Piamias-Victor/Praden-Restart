import { EmailMessage } from '@core/types/type'
import { EmailGateway, SendOrderConfirmationDTO } from './emailGateway'

export class FakeEmailGateway implements EmailGateway {
  private emails: Array<EmailMessage> = []

  list(): Promise<Array<EmailMessage>> {
    return Promise.resolve(this.emails)
  }

  sendOrderConfirmation(sendOrderConfirmationDTO: SendOrderConfirmationDTO) {
    console.log('dans sendOrderConfirmation')
    this.emails.push(sendOrderConfirmationDTO)
  }
}
