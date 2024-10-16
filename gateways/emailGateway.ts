import { RealEmailGateway } from '@adapters/secondary/email-gateway/realEmailGateway'
import { FakeEmailGateway } from '@core/usecases/orders/order-creation/fakeEmailGateway'

export const useEmailGateway = () => {
  // const { CONFIRMATION_TEMPLATE_ID, SEND_EMAIL_URL } = useRuntimeConfig().public
  return new RealEmailGateway('https://api.mailjet.com/v3/send', '6388430')
  // return new FakeEmailGateway()
}
