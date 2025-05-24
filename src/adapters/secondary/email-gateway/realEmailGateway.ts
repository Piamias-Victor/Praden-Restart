import { DeliveryMethod } from '@core/entities/deliveryMethod';
import { Address, Contact, OrderLine, getOrderLineUnitAmount } from '@core/entities/order';
import { EmailGateway, SendOrderConfirmationDTO } from '@core/usecases/orders/order-creation/emailGateway';
import { priceFormatter } from '@utils/formater';
import { getCartVM } from '@adapters/primary/viewModels/get-cart/getCartVM';
import { getUserVM } from '@adapters/primary/viewModels/get-user/getUserVM';

function generateLinesHtml(lines: any) {
  return `
    <table>
      <tbody>
        ${lines
          .map(
            (line) => `
          <tr>
            <td>
              <img src="${line.img}" width="200" height="200" />
            </td>
            <td style="padding-left: 13px;">
              <div style="font-family: arial, helvetica, sans-serif"> Nom: ${line.name} </div>
              <div style="font-family: arial, helvetica, sans-serif"> Prix unitaire: ${line.unitPrice} </div>
              <div style="font-family: arial, helvetica, sans-serif"> Quantité: ${line.quantity} </div>
              <div style="font-family: arial, helvetica, sans-serif; font-weight: 700;"> Total: ${line.total} </div>
            </td>
          </tr>
        `,
          )
          .join('')}
      </tbody>
    </table>
  `;
}
export class RealEmailGateway implements EmailGateway {
  private readonly baseUrl: string;
  private readonly confirmationTemplateID: string;
  private formatter = priceFormatter('fr-FR', 'EUR');

  constructor(baseUrl: string, confirmationTemplateID: string) {
    this.baseUrl = baseUrl;
    this.confirmationTemplateID = confirmationTemplateID;
  }

  async sendTestEmail(to: string, phone: string, message: string): Promise<void> {
    const userMessage = message;
    const userMail = to;
    const userPhone = phone;
    const body = {
      to: 'webpharmaciepraden@gmail.com',
      subject: 'test',
      templateId: '6600780', // Utiliser le template ID de test
      data: {
        shipp: {
          first_name: userMail,
          last_name: userPhone,
          address: userMessage,
          phone: 'test',
          link: 'test',
        },
        bill: {
          first_name: 'test',
          last_name: 'test',
          address: 'test',
          phone: 'test',
        },
        linesHtml: 'test',
        total: {
          product_price: '1',
          shipping_price: '1',
          price: '1',
        },
      },
    };

    try {
      const response = await fetch('https://contact.gmevelec.workers.dev/send-email/', {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }

      const result = await response.json();
    } catch (error) {
      console.error('Error sending test email:', error);
      throw error;
    }
  }

  async sendOrderConfirmation(confirmationDTO: SendOrderConfirmationDTO): Promise<void> {
    const shippingAddress = this.getShippingAddress(confirmationDTO.shippingAddress, confirmationDTO.contact);
    const billingAddress = this.getBillingAddress(confirmationDTO.billingAddress, confirmationDTO.contact);
    const lines = this.getLines(confirmationDTO.orderLines);
    const total = this.getTotals(confirmationDTO.orderLines, confirmationDTO.deliveryMethod);

    const linesHtml = generateLinesHtml(lines);

    const body = {
      to: confirmationDTO.contact.email,
      subject: 'Order Confirmation',
      templateId: this.confirmationTemplateID,
      data: {
        shipp: shippingAddress,
        bill: billingAddress,
        linesHtml,
        total,
      },
    };

    const headers = {
      'Content-Type': 'application/json',
    };

    try {
      const response = await fetch(
        // 'https://worker-message.gmevelec.workers.dev/sendEmail/',
        'https://contact.gmevelec.workers.dev/send-email/',
        {
          method: 'POST',
          body: JSON.stringify(body),
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );

      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }

      const result = await response.json();
    } catch (error) {
      console.error('Error sending email:', error);
    }
  }

  private getShippingAddress(address: Address, contact: Contact) {
    return {
      first_name: address.firstname,
      last_name: address.lastname,
      address: `${address.address}, ${address.zip}, ${address.city}`,
      phone: contact.phone,
      link: 'https://www.pharmacieagnespraden.com/',
    };
  }

  private getBillingAddress(address: Address, contact: Contact) {
    return {
      first_name: address.firstname,
      last_name: address.lastname,
      address: `${address.address}, ${address.zip}, ${address.city}`,
      phone: contact.phone,
    };
  }

  private getLines(orderLines: Array<OrderLine>) {
    return orderLines.map((line) => {
      const amount = line.unitAmount;
      return {
        img: line.img,
        name: line.name,
        unitPrice: this.formatter.format(amount / 100),
        quantity: line.quantity,
        total: this.formatter.format((amount * line.quantity) / 100),
      };
    });
  }

  private getTotals(orderLines: Array<OrderLine>, deliveryMethod: DeliveryMethod) {
    const user = getUserVM();
    const cart = getCartVM(user.address);

    const subTotal = orderLines.reduce((acc, line) => {
      const amount = line.unitAmount;
      return acc + amount * line.quantity;
    }, 0);
    let total;
    if (cart.totalPriceWithPromotion) total = cart.totalPriceWithPromotion;
    else total = cart.totalPriceWithDelivery;
    return {
      product_price: this.formatter.format(subTotal / 100),
      shipping_price: cart.DeliveryPrice,
      price: total,
    };
  }
}
