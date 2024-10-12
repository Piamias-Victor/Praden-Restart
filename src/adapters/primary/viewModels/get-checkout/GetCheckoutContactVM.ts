import { isEmailValid, isPhoneValid } from '@utils/validators'

export interface CheckoutContactVM {
  email: string
  phone: string
  isEmailValid: boolean
  isPhoneValid: boolean
}

export class GetCheckoutContactVM {
  private _email = ''
  private _phone = ''

  get vm(): CheckoutContactVM {
    return {
      email: this._email,
      phone: this._phone,
      isEmailValid: this.isEmailValid,
      isPhoneValid: this.isPhoneValid
    }
  }

  set email(email: string) {
    this._email = email
    this.check()
  }

  set phone(phone: string) {
    this._phone = phone
    this.check()
  }

  get isEmailValid(): boolean {
    return isEmailValid(this._email)
  }

  get isPhoneValid(): boolean {
    return isPhoneValid(this._phone)
  }

  get isValid(): boolean {
    return this.check()
  }

  check(): boolean {
    return this.isPhoneValid && this.isEmailValid
  }
}
