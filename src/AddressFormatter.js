class AddressFormatter {
  constructor() {
    this.clear();
  }
  clear() {
    this.street = null;
    this.civic = null;
    this.city = null;
    this.postalCode = null;
    this.district = null;
    this.state = null;
  }
  setStreet(street) {
    this.street = street;
    return this;
  }
  setCivic(civic) {
    this.civic = civic;
    return this;
  }
  setCity(city) {
    this.city = city;
    return this;
  }
  setPostalCode(postalCode) {
    this.postalCode = postalCode;
    return this;
  }
  setDistrict(district) {
    this.district = district;
    return this;
  }
  setState(state) {
    this.state = state;
    return this;
  }
  get() {
    let fullAddress = "";

    if (this.street) {
      if (this.civic) {
        fullAddress += `${this.street}, ${this.civic}`;
      } else {
        fullAddress += `${this.street}`;
      }
    }

    if (this.city && fullAddress !== "") {
      if (this.postalCode) {
        fullAddress += ` - ${this.postalCode} ${this.city}`;
      } else {
        fullAddress += ` - ${this.city}`;
      }
    }

    if (this.district) {
      fullAddress += ` (${this.district})`;
    }

    if (this.state) {
      fullAddress +=` ${this.state}`;
    }

    this.clear();
    return fullAddress;
  }
}

export default new AddressFormatter();
