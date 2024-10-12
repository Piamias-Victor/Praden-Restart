export interface CheckoutShippingAddressVM {
  firstname: string
  lastname: string
  country: string
  address: string
  appartement: string
  city: string
  zip: string
}

export class GetCheckoutShippingAddressVM {
  private _firstname = ''
  private _lastname = ''
  private _country = ''
  private _address = ''
  private _appartement = ''
  private _city = ''
  private _zip = ''

  get vm(): CheckoutShippingAddressVM {
    return {
      firstname: this._firstname,
      lastname: this._lastname,
      country: this._country,
      address: this._address,
      appartement: this._appartement,
      city: this._city,
      zip: this._zip
    }
  }

  set firstname(firstname: string) {
    this._firstname = firstname
  }

  set lastname(lastname: string) {
    this._lastname = lastname
  }

  set country(country: string) {
    this._country = country
  }

  set address(address: string) {
    this._address = address
  }

  set appartement(appartement: string) {
    this._appartement = appartement
  }

  set city(city: string) {
    this._city = city
  }

  set zip(zip: string) {
    this._zip = zip
  }

  get isValid(): boolean {
    return (
      this._firstname.length > 0 &&
      this._lastname.length > 0 &&
      this._address.length > 0 &&
      this._zip.length > 0
    )
  }
}
