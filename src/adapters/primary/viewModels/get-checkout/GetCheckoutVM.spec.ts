import { calmosine, dolodent, humexRhume, physiodose } from '@utils/testData/products';
import { createPinia, setActivePinia } from 'pinia';
import { useCartStore } from '@store/cartStore';
import { useProductStore } from '@store/productStore';
import { CheckoutVM, GetCheckoutVM, getCheckoutVM } from '@adapters/primary/viewModels/get-checkout/getCheckoutVM';
import { Product } from '@core/entities/product';
import { useDeliveryStore } from '@store/deliveryStore';
import { DeliveryMethod, DeliveryType } from '@core/entities/deliveryMethod';

describe('Get checkout VM', () => {
  let cartStore: any;
  let productStore: any;
  const pickup: DeliveryMethod = {
    uuid: 'pickup-uuid',
    name: 'Retrait en pharmacie',
    description: '198 avenue des Frères Lumières 30100 Alès',
    price: 0,
    type: DeliveryType.ClickAndCollect,
  };
  const express: DeliveryMethod = {
    uuid: 'express-uuid',
    name: 'Express',
    description: '2-5 jours ouvrés',
    price: 1600,
    type: DeliveryType.Delivery,
  };

  beforeEach(() => {
    setActivePinia(createPinia());
    cartStore = useCartStore();
    productStore = useProductStore();
  });

  describe('Get cart', () => {
    describe('The cart is empty', () => {
      it('should not have any items', () => {
        expectVMToEqual();
      });
    });
    describe('The cart is not empty', () => {
      it('should get the current cart', () => {
        givenThereIsProductInCart(calmosine, physiodose);
        const expectedVM: any = {
          cart: {
            items: {
              abc123: {
                uuid: 'abc123',
                name: 'Calmosine 100 ml',
                laboratory: 'NUTRISANTE',
                totalPrice: '8,10\u00A0€',
                quantity: 1,
                img: 'https://i.ibb.co/TPq5YFS/calmosine.png',
              },
              def456: {
                uuid: 'def456',
                name: 'Gilbert Physiodose sérum physiologique 40 doses 5ml',
                laboratory: 'GILBERT',
                totalPrice: '1,99\u00A0€',
                quantity: 1,
                img: 'https://i.ibb.co/MRN8Q52/physiologique.jpg',
              },
            },
            subTotal: '10,09\u00A0€',
          },
          total: '10,09\u00A0€',
        };
        expectVMToEqual(getCheckoutVM(), expectedVM);
      });
      it('should manage promotions', () => {
        givenThereIsProductInCart(dolodent, humexRhume);
        const expectedVM: any = {
          cart: {
            items: {
              [dolodent.uuid]: {
                uuid: dolodent.uuid,
                name: dolodent.name,
                laboratory: 'GILBERT',
                totalPrice: '4,99\u00A0€',
                totalPriceWithPromotion: '4,49\u00A0€',
                quantity: 1,
                img: dolodent.img,
              },
              [humexRhume.uuid]: {
                uuid: humexRhume.uuid,
                name: humexRhume.name,
                laboratory: 'URGO SOINS ET SANTÉ',
                totalPrice: '5,90\u00A0€',
                totalPriceWithPromotion: '4,90\u00A0€',
                quantity: 1,
                img: humexRhume.img,
              },
            },
            subTotal: '10,89\u00A0€',
            subTotalWithPromotion: '9,39\u00A0€',
          },
          total: '10,89\u00A0€',
          totalWithPromotion: '9,39\u00A0€',
        };
        expectVMToEqual(getCheckoutVM(), expectedVM);
      });
    });
  });

  describe('Contact information', () => {
    describe('Allow guest command', () => {
      it('should have an empty mail at start', () => {
        expectVMToEqual();
      });
      describe('Set email', () => {
        it('should allow to set the email', () => {
          const vm = getCheckoutVM();
          vm.email = 'super@email.com';
          const expectedVM: Partial<CheckoutVM> = {
            contact: {
              ...vm.contact,
              email: 'super@email.com',
            },
          };
          expectVMToEqual(vm, expectedVM);
        });
      });
    });
    describe('Set phone', () => {
      it('should allow to set the phone', () => {
        const vm = getCheckoutVM();
        vm.phone = '0000000000';
        const expectedVM: Partial<CheckoutVM> = {
          contact: {
            ...vm.contact,
            phone: '0000000000',
          },
        };
        expectVMToEqual(vm, expectedVM);
      });
    });
  });

  describe('Shipping information', () => {
    describe('Initially', () => {
      it('should have empty first name', () => {
        expectVMToEqual();
      });
      it('should have empty last name', () => {
        expectVMToEqual();
      });
      it('should have empty country', () => {
        expectVMToEqual();
      });
      it('should have empty address', () => {
        expectVMToEqual();
      });
      it('should have empty appartement', () => {
        expectVMToEqual();
      });
      it('should have empty city', () => {
        expectVMToEqual();
      });
      it('should have empty zip', () => {
        expectVMToEqual();
      });
      it('should have empty phone', () => {
        expectVMToEqual();
      });
    });
    describe('Set first name', () => {
      it('should allow to set first name', () => {
        const vm = getCheckoutVM();
        const firstname = 'my first name';
        vm.firstname = firstname;
        const expectedVM: Partial<CheckoutVM> = {
          shippingAddress: {
            ...vm.shippingAddress,
            firstname,
          },
        };
        expectVMToEqual(vm, expectedVM);
      });
    });
    describe('Set last name', () => {
      it('should allow to set last name', () => {
        const vm = getCheckoutVM();
        const lastname = 'my last name';
        vm.lastname = lastname;
        const expectedVM: Partial<CheckoutVM> = {
          shippingAddress: {
            ...vm.shippingAddress,
            lastname,
          },
        };
        expectVMToEqual(vm, expectedVM);
      });
    });
    describe('Set country', () => {
      it('should allow to set country', () => {
        const vm = getCheckoutVM();
        const country = 'my country';
        vm.country = country;
        const expectedVM: Partial<CheckoutVM> = {
          shippingAddress: {
            ...vm.shippingAddress,
            country,
          },
        };
        expectVMToEqual(vm, expectedVM);
      });
    });
    describe('Set address', () => {
      it('should allow to set address', () => {
        const vm = getCheckoutVM();
        const address = '1 rue de mon address';
        vm.address = address;
        const expectedVM: Partial<CheckoutVM> = {
          shippingAddress: {
            ...vm.shippingAddress,
            address,
          },
        };
        expectVMToEqual(vm, expectedVM);
      });
    });

    describe('Set appartement', () => {
      it('should allow to set appartement', () => {
        const vm = getCheckoutVM();
        const appartement = 'appartement 25';
        vm.appartement = appartement;
        const expectedVM: Partial<CheckoutVM> = {
          shippingAddress: {
            ...vm.shippingAddress,
            appartement,
          },
        };
        expectVMToEqual(vm, expectedVM);
      });
    });

    describe('Set city', () => {
      it('should allow to set city', () => {
        const vm = getCheckoutVM();
        const city = 'my super ville';
        vm.city = city;
        const expectedVM: Partial<CheckoutVM> = {
          shippingAddress: {
            ...vm.shippingAddress,
            city,
          },
        };
        expectVMToEqual(vm, expectedVM);
      });
    });

    describe('Set ZIP', () => {
      it('should allow to set zip', () => {
        const vm = getCheckoutVM();
        const zip = '01234';
        vm.zip = zip;
        const expectedVM: Partial<CheckoutVM> = {
          shippingAddress: {
            ...vm.shippingAddress,
            zip,
          },
        };
        expectVMToEqual(vm, expectedVM);
      });
    });
  });

  describe('Delivery methods', () => {
    it('should get all delivery methods sorted by price', () => {
      givenThereIsDeliveryMethods(express, pickup);
      const expectedVM: Partial<CheckoutVM> = {
        delivery: {
          methods: [
            {
              ...pickup,
              price: 'Gratuit',
            },
            {
              ...express,
              price: '16,00\u00A0€',
            },
          ],
          selected: undefined,
        },
      };
      expectVMToEqual(getCheckoutVM(), expectedVM);
    });
    it('should allow to select a delivery method', () => {
      givenThereIsDeliveryMethods(pickup, express);
      const vm = getCheckoutVM();
      vm.deliveryMethod = pickup.uuid;
      const expectedVM: Partial<CheckoutVM> = {
        delivery: {
          methods: [
            {
              ...pickup,
              price: 'Gratuit',
            },
            {
              ...express,
              price: '16,00\u00A0€',
            },
          ],
          selected: {
            uuid: pickup.uuid,
            name: pickup.name,
            price: 'Gratuit',
          },
        },
      };
      expectVMToEqual(vm, expectedVM);
    });

    it('should update shipping and total price if selected method is not free', () => {
      givenThereIsDeliveryMethods(pickup, express);
      const vm = getCheckoutVM();
      vm.deliveryMethod = express.uuid;
      const expectedVM: Partial<CheckoutVM> = {
        cart: {
          items: {},
          subTotal: '0,00\u00A0€',
        },
        delivery: {
          methods: [
            {
              ...pickup,
              price: 'Gratuit',
            },
            {
              ...express,
              price: '16,00\u00A0€',
            },
          ],
          selected: {
            uuid: express.uuid,
            name: express.name,
            price: '16,00\u00A0€',
          },
        },
        total: '16,00\u00A0€',
      };
      expectVMToEqual(vm, expectedVM);
    });

    it('should update when shipping change', () => {
      givenThereIsDeliveryMethods(pickup, express);
      const vm = getCheckoutVM();
      vm.deliveryMethod = express.uuid;
      vm.deliveryMethod = pickup.uuid;
      const expectedVM: Partial<CheckoutVM> = {
        delivery: {
          methods: [
            {
              ...pickup,
              price: 'Gratuit',
            },
            {
              ...express,
              price: '16,00\u00A0€',
            },
          ],
          selected: {
            uuid: pickup.uuid,
            name: pickup.name,
            price: 'Gratuit',
          },
        },
      };
      expectVMToEqual(vm, expectedVM);
    });

    it('should add cart and shipping to the total', () => {
      givenThereIsDeliveryMethods(pickup, express);
      givenThereIsProductInCart(calmosine);
      const vm = getCheckoutVM();
      vm.deliveryMethod = express.uuid;
      const expectedVM: Partial<CheckoutVM> = {
        cart: {
          items: {
            abc123: {
              uuid: 'abc123',
              name: 'Calmosine 100 ml',
              laboratory: 'NUTRISANTE',
              totalPrice: '8,10\u00A0€',
              quantity: 1,
              img: 'https://i.ibb.co/TPq5YFS/calmosine.png',
            },
          },
          subTotal: '8,10\u00A0€',
        },
        delivery: {
          methods: [
            {
              ...pickup,
              price: 'Gratuit',
            },
            {
              ...express,
              price: '16,00\u00A0€',
            },
          ],
          selected: {
            uuid: express.uuid,
            name: express.name,
            price: '16,00\u00A0€',
          },
        },
        total: '24,10\u00A0€',
      };
      expectVMToEqual(vm, expectedVM);
    });
    it('should do nothing if the delivery method not exists', () => {
      givenThereIsDeliveryMethods(pickup, express);
      const vm = getCheckoutVM();
      vm.deliveryMethod = 'NotExists';
      const expectedVM: Partial<CheckoutVM> = {
        delivery: {
          methods: [
            {
              ...pickup,
              price: 'Gratuit',
            },
            {
              ...express,
              price: '16,00\u00A0€',
            },
          ],
          selected: undefined,
        },
      };
      expectVMToEqual(vm, expectedVM);
    });
  });

  describe('Validation', () => {
    let vm: GetCheckoutVM;
    beforeEach(() => {
      givenThereIsDeliveryMethods(pickup);
    });
    describe('Contact check', () => {
      it('should not allow to validate if email is incorrect', () => {
        givenThereIsProductInCart(calmosine);
        vm = getCheckoutVM();
        vm.email = 'incorrect.email.com';
        vm.firstname = 'correct';
        vm.lastname = 'correct';
        vm.address = 'correct';
        vm.city = 'correct';
        vm.zip = '12345';
        vm.phone = '0123456789';
        vm.deliveryMethod = pickup.uuid;
        const expectedVM: CheckoutVM = {
          ...vmToObject(vm),
          canValidate: false,
        };
        expectVMToEqual(vm, expectedVM);
      });
      it('should not allow to validate if phone is incorrect', () => {
        givenThereIsProductInCart(calmosine);
        vm = getCheckoutVM();
        vm.email = 'correct@email.com';
        vm.firstname = 'correct';
        vm.lastname = 'correct';
        vm.address = 'correct';
        vm.city = 'correct';
        vm.zip = '12345';
        vm.phone = '00';
        vm.deliveryMethod = pickup.uuid;
        const expectedVM: CheckoutVM = {
          ...vmToObject(vm),
          canValidate: false,
        };
        expectVMToEqual(vm, expectedVM);
      });
      it('should change IsPhoneCorrect & IsMailCorrect', () => {
        givenThereIsProductInCart(calmosine);
        vm = getCheckoutVM();
        vm.email = 'corret.email.com';
        vm.firstname = 'correct';
        vm.lastname = 'correct';
        vm.address = 'correct';
        vm.city = 'correct';
        vm.zip = '12345';
        vm.phone = '00';
        vm.deliveryMethod = pickup.uuid;
        const expectedVM: CheckoutVM = {
          ...vmToObject(vm),
          canValidate: false,
        };
        expectVMToEqual(vm, expectedVM);
      });
    });
    describe('Check phone', () => {
      it('should not allow to validate phone if is incorrect', () => {
        givenThereIsProductInCart(calmosine);
        vm = getCheckoutVM();
        vm.email = 'incorrect@email.com';
        vm.firstname = 'correct';
        vm.lastname = 'correct';
        vm.address = 'correct';
        vm.city = 'correct';
        vm.zip = '12345';
        vm.phone = '01234567';
        vm.deliveryMethod = pickup.uuid;
        const expectedVM: CheckoutVM = {
          ...vmToObject(vm),
          contact: {
            email: 'incorrect@email.com',
            phone: '01234567',
            isEmailValid: true,
            isPhoneValid: false,
          },
          canValidate: false,
        };
        expectVMToEqual(vm, expectedVM);
      });
      it('should not allow to validate phone if is incorrect', () => {
        givenThereIsProductInCart(calmosine);
        vm = getCheckoutVM();
        vm.email = 'incorrect@email.com';
        vm.firstname = 'correct';
        vm.lastname = 'correct';
        vm.address = 'correct';
        vm.city = 'correct';
        vm.zip = '12345';
        vm.phone = 'aaaaaaaaaa';
        vm.deliveryMethod = pickup.uuid;
        const expectedVM: CheckoutVM = {
          ...vmToObject(vm),
          contact: {
            email: 'incorrect@email.com',
            phone: 'aaaaaaaaaa',
            isEmailValid: true,
            isPhoneValid: false,
          },
          canValidate: false,
        };
        expectVMToEqual(vm, expectedVM);
      });
      it('should not allow to validate phone if is incorrect', () => {
        givenThereIsProductInCart(calmosine);
        vm = getCheckoutVM();
        vm.email = 'incorrect@email.com';
        vm.firstname = 'correct';
        vm.lastname = 'correct';
        vm.address = 'correct';
        vm.city = 'correct';
        vm.zip = '12345';
        vm.phone = '01234567890';
        vm.deliveryMethod = pickup.uuid;
        const expectedVM: CheckoutVM = {
          ...vmToObject(vm),
          contact: {
            email: 'incorrect@email.com',
            phone: '01234567890',
            isEmailValid: true,
            isPhoneValid: false,
          },
          canValidate: false,
        };
        expectVMToEqual(vm, expectedVM);
      });
      it('should  allow to validate phone if is correct', () => {
        givenThereIsProductInCart(calmosine);
        vm = getCheckoutVM();
        vm.email = 'incorrect@email.com';
        vm.firstname = 'correct';
        vm.lastname = 'correct';
        vm.address = 'correct';
        vm.city = 'correct';
        vm.zip = '12345';
        vm.phone = '+33623456789';
        vm.deliveryMethod = pickup.uuid;
        const expectedVM: CheckoutVM = {
          ...vmToObject(vm),
          contact: {
            email: 'incorrect@email.com',
            phone: '+33623456789',
            isEmailValid: true,
            isPhoneValid: true,
          },
          canValidate: true,
        };
        expectVMToEqual(vm, expectedVM);
      });
      it('should  allow to validate phone if is correct', () => {
        givenThereIsProductInCart(calmosine);
        vm = getCheckoutVM();
        vm.email = 'incorrect@email.com';
        vm.firstname = 'correct';
        vm.lastname = 'correct';
        vm.address = 'correct';
        vm.city = 'correct';
        vm.zip = '12345';
        vm.phone = '06 23 45 67 89';
        vm.deliveryMethod = pickup.uuid;
        const expectedVM: CheckoutVM = {
          ...vmToObject(vm),
          contact: {
            email: 'incorrect@email.com',
            phone: '06 23 45 67 89',
            isEmailValid: true,
            isPhoneValid: true,
          },
          canValidate: true,
        };
        expectVMToEqual(vm, expectedVM);
      });
      it('should  allow to validate phone if is correct', () => {
        givenThereIsProductInCart(calmosine);
        vm = getCheckoutVM();
        vm.email = 'incorrect@email.com';
        vm.firstname = 'correct';
        vm.lastname = 'correct';
        vm.address = 'correct';
        vm.city = 'correct';
        vm.zip = '12345';
        vm.phone = '01-23-45-67-89';
        vm.deliveryMethod = pickup.uuid;
        const expectedVM: CheckoutVM = {
          ...vmToObject(vm),
          contact: {
            email: 'incorrect@email.com',
            phone: '01-23-45-67-89',
            isEmailValid: true,
            isPhoneValid: true,
          },
          canValidate: true,
        };
        expectVMToEqual(vm, expectedVM);
      });
      it('should  allow to validate phone if is correct', () => {
        givenThereIsProductInCart(calmosine);
        vm = getCheckoutVM();
        vm.email = 'incorrect@email.com';
        vm.firstname = 'correct';
        vm.lastname = 'correct';
        vm.address = 'correct';
        vm.city = 'correct';
        vm.zip = '12345';
        vm.phone = '01.23.45.67.89';
        vm.deliveryMethod = pickup.uuid;
        const expectedVM: CheckoutVM = {
          ...vmToObject(vm),
          contact: {
            email: 'incorrect@email.com',
            phone: '01.23.45.67.89',
            isEmailValid: true,
            isPhoneValid: true,
          },
          canValidate: true,
        };
        expectVMToEqual(vm, expectedVM);
      });
      it('should not allow to validate phone if is incorrect', () => {
        givenThereIsProductInCart(calmosine);
        vm = getCheckoutVM();
        vm.email = 'incorrect@email.com';
        vm.firstname = 'correct';
        vm.lastname = 'correct';
        vm.address = 'correct';
        vm.city = 'correct';
        vm.zip = '12345';
        vm.phone = '01..23.45.67.89';
        vm.deliveryMethod = pickup.uuid;
        const expectedVM: CheckoutVM = {
          ...vmToObject(vm),
          contact: {
            email: 'incorrect@email.com',
            phone: '01..23.45.67.89',
            isEmailValid: true,
            isPhoneValid: false,
          },
          canValidate: false,
        };
        expectVMToEqual(vm, expectedVM);
      });
      it('should  allow to validate if email & phone is is correct', () => {
        givenThereIsProductInCart(calmosine);
        vm = getCheckoutVM();
        vm.email = 'incorrect@email.com';
        vm.firstname = 'correct';
        vm.lastname = 'correct';
        vm.address = 'correct';
        vm.city = 'correct';
        vm.zip = '12345';
        vm.phone = '0123456789';
        vm.deliveryMethod = pickup.uuid;
        const expectedVM: CheckoutVM = {
          ...vmToObject(vm),
          contact: {
            email: 'incorrect@email.com',
            phone: '0123456789',
            isEmailValid: true,
            isPhoneValid: true,
          },
          canValidate: true,
        };
        expectVMToEqual(vm, expectedVM);
      });
    });
    describe('Cart check', () => {
      it('should not allow to validate if cart is empty', () => {
        vm = getCheckoutVM();
        setValidContact(vm);
        setValidAddress(vm);
        vm.deliveryMethod = pickup.uuid;
        const expectedVM: CheckoutVM = {
          ...vmToObject(vm),
          canValidate: false,
        };
        expectVMToEqual(vm, expectedVM);
      });
    });
    describe('Address check', () => {
      let vm: GetCheckoutVM;
      beforeEach(() => {
        givenThereIsProductInCart(calmosine);
        vm = getCheckoutVM();
        setValidContact(vm);
        setValidAddress(vm);
        vm.deliveryMethod = pickup.uuid;
      });
      it('should not allow to validate if firstname is empty', () => {
        vm.firstname = '';
        const expectedVM: CheckoutVM = {
          ...vmToObject(vm),
          canValidate: false,
        };
        expectVMToEqual(vm, expectedVM);
      });
      it('should not allow to validate if lastname is empty', () => {
        vm.lastname = '';
        const expectedVM: CheckoutVM = {
          ...vmToObject(vm),
          canValidate: false,
        };
        expectVMToEqual(vm, expectedVM);
      });
      it('should not allow to validate if address is empty', () => {
        vm.address = '';
        const expectedVM: CheckoutVM = {
          ...vmToObject(vm),
          canValidate: false,
        };
        expectVMToEqual(vm, expectedVM);
      });
      it('should not allow to validate if zip is empty', () => {
        vm.zip = '';
        const expectedVM: CheckoutVM = {
          ...vmToObject(vm),
          canValidate: false,
        };
        expectVMToEqual(vm, expectedVM);
      });
      it('should not allow to validate if phone is empty', () => {
        vm.phone = '';
        const expectedVM: CheckoutVM = {
          ...vmToObject(vm),
          canValidate: false,
        };
        expectVMToEqual(vm, expectedVM);
      });
      it('should not allow to validate if phone is wrong', () => {
        vm.phone = '000000000';
        const expectedVM: CheckoutVM = {
          ...vmToObject(vm),
          canValidate: false,
        };
        expectVMToEqual(vm, expectedVM);
      });
    });
    describe('Delivery check', () => {
      it('should not allow to validate if there is no delivery method selected', () => {
        givenThereIsProductInCart(calmosine);
        vm = getCheckoutVM();
        setValidContact(vm);
        setValidAddress(vm);
        const expectedVM: CheckoutVM = {
          ...vmToObject(vm),
          canValidate: false,
        };
        expectVMToEqual(vm, expectedVM);
      });
    });
    describe('Correct checkout', () => {
      it('should allow to validate', () => {
        givenThereIsProductInCart(calmosine);
        vm = getCheckoutVM();
        setValidContact(vm);
        setValidAddress(vm);
        vm.deliveryMethod = pickup.uuid;
        const expectedVM: CheckoutVM = {
          ...vmToObject(vm),
          canValidate: true,
        };
        expectVMToEqual(vm, expectedVM);
      });
    });
  });

  const setValidContact = (vm: GetCheckoutVM) => {
    vm.email = 'correct@email.com';
    vm.phone = '0623456789';
  };
  const setValidAddress = (vm: GetCheckoutVM) => {
    vm.firstname = 'correct';
    vm.lastname = 'correct';
    vm.address = 'correct';
    vm.city = 'correct';
    vm.zip = '12345';
  };

  const givenThereIsProductInCart = (...products: Array<Product>) => {
    cartStore.items = products.map((p) => p.uuid);
    productStore.items = products;
  };

  const givenThereIsDeliveryMethods = (...methods: Array<DeliveryMethod>) => {
    const deliveryStore = useDeliveryStore();
    deliveryStore.items = methods;
  };

  const vmToObject = (vm: GetCheckoutVM): CheckoutVM => {
    const res: CheckoutVM = {
      cart: vm.cart,
      contact: vm.contact,
      shippingAddress: vm.shippingAddress,
      delivery: vm.delivery,
      total: vm.total,
      canValidate: vm.isValidateEnabled,
    };
    if (vm.totalWithPromotion) {
      res.totalWithPromotion = vm.totalWithPromotion;
    }
    return res;
  };

  const expectVMToEqual = (vm: GetCheckoutVM = getCheckoutVM(), expected: Partial<CheckoutVM> = {}) => {
    const defaultVM: CheckoutVM = {
      cart: {
        items: {},
        subTotal: '0,00\u00a0€',
      },
      contact: {
        email: '',
        phone: '',
        isEmailValid: false,
        isPhoneValid: false,
      },
      shippingAddress: {
        firstname: '',
        lastname: '',
        country: '',
        address: '',
        appartement: '',
        city: '',
        zip: '',
      },
      delivery: {
        methods: [],
        selected: undefined,
      },
      total: '0,00\u00a0€',
      canValidate: false,
    };
    const expectedVM = {
      ...defaultVM,
      ...expected,
    };
    const currentVM = vmToObject(vm);
    expect(currentVM).toEqual(expectedVM);
  };
});
