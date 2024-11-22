import { DeliveryMethod } from '@core/entities/deliveryMethod';
import { UUID } from '@core/types/type';
import { useDeliveryStore } from '@store/deliveryStore';
import { priceFormatter } from '@utils/formater';
import { sortByPrice, SortType } from '@utils/sort';

export interface CheckoutDeliveryMethodVM {
  name: string;
  description: string;
  price: string;
}

export interface SelectedDeliveryMethodVM {
  uuid: UUID;
  name: string;
  price: string;
}

export interface CheckoutDeliveryVM {
  methods: Array<CheckoutDeliveryMethodVM>;
  selected: SelectedDeliveryMethodVM | undefined;
}

export class GetCheckoutDeliveryVM {
  private methods: Array<DeliveryMethod> = [];
  private selected: DeliveryMethod | undefined = undefined;
  private formatter = priceFormatter('fr-FR', 'EUR');

  constructor() {
    this.getDeliveryMethods();
  }

  get vm(): CheckoutDeliveryVM {
    this.getDeliveryMethods();
    return {
      methods: this.methods.map((method: DeliveryMethod) => {
        return {
          uuid: method.uuid,
          name: method.name,
          description: method.description,
          type: method.type,
          price: method.price === 0 ? 'Gratuit' : this.formatter.format(method.price / 100),
        };
      }),
      selected: this.getSelectedVM(),
    };
  }

  get shippingPrice(): number {
    return this.selected?.price || 0;
  }

  set deliveryMethod(methodUuid: UUID) {
    try {
      const deliveryStore = useDeliveryStore();
      const method = deliveryStore.getByUuid(methodUuid);
      this.selected = method;
    } catch (_e: any) {}
  }

  get isValid(): boolean {
    return !!this.selected;
  }

  private getDeliveryMethods(): void {
    const deliveryStore = useDeliveryStore();
    const deliveryMethods = JSON.parse(JSON.stringify(deliveryStore.items));
    deliveryMethods.sort(sortByPrice(SortType.Asc));
    this.methods = deliveryMethods;
  }

  private getSelectedVM(): SelectedDeliveryMethodVM | undefined {
    if (!this.selected) return undefined;
    return {
      uuid: this.selected.uuid,
      name: this.selected.name,
      price: this.selected.price > 0 ? this.formatter.format(this.selected.price / 100) : 'Gratuit',
    };
  }
}
