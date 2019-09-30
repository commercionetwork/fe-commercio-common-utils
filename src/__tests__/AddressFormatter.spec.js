import { AddressFormatter } from "../index";

describe("AddressFormatter", () => {
  let street = "street";
  let civic = "1";
  let city = "city";
  let postalCode = "12345";
  let district = "district";
  let state = "state";
    
  it("Check if the class returns the correct address", () => {
    const address = AddressFormatter.setStreet(street)
      .setCivic(civic)
      .setCity(city)
      .setPostalCode(postalCode)
      .setDistrict(district)
      .setState(state)
      .get();
    const expectValue = `${street}, ${civic} - ${postalCode} ${city} (${district}) ${state}`;

    expect(address).toEqual(expectValue);
  });

  it("Check if the class returns the address without setting 'civic'", () => {
    const address = AddressFormatter.setStreet(street)
      .setCity(city)
      .setPostalCode(postalCode)
      .setDistrict(district)
      .setState(state)
      .get();
    const expectValue = `${street} - ${postalCode} ${city} (${district}) ${state}`;

    expect(address).toEqual(expectValue);
  });

  it("Check if the class returns the address without setting 'postalCode'", () => {
    const address = AddressFormatter.setStreet(street)
      .setCivic(civic)
      .setCity(city)
      .setDistrict(district)
      .setState(state)
      .get();
    const expectValue = `${street}, ${civic} - ${city} (${district}) ${state}`;

    expect(address).toEqual(expectValue);
  });

  it("Check if the class returns the address without setting 'district'", () => {
    const address = AddressFormatter.setStreet(street)
      .setCivic(civic)
      .setCity(city)
      .setPostalCode(postalCode)
      .setState(state)
      .get();
    const expectValue = `${street}, ${civic} - ${postalCode} ${city} ${state}`;

    expect(address).toEqual(expectValue);
  });

  it("Check if the class returns the address without setting 'state'", () => {
    const address = AddressFormatter.setStreet(street)
    .setCivic(civic)
    .setCity(city)
    .setPostalCode(postalCode)
    .setDistrict(district)
    .get();
  const expectValue = `${street}, ${civic} - ${postalCode} ${city} (${district})`;

  expect(address).toEqual(expectValue);
  });
});
