"use strict";

var _index = require("../index");

describe("AddressFormatter", function () {
  var street = "street";
  var civic = "1";
  var city = "city";
  var postalCode = "12345";
  var district = "district";
  var state = "state";
  it("Check if the class returns the correct address", function () {
    var address = _index.AddressFormatter.setStreet(street).setCivic(civic).setCity(city).setPostalCode(postalCode).setDistrict(district).setState(state).get();

    var expectValue = "".concat(street, ", ").concat(civic, " - ").concat(postalCode, " ").concat(city, " (").concat(district, ") ").concat(state);
    expect(address).toEqual(expectValue);
  });
  it("Check if the class returns the address without setting 'civic'", function () {
    var address = _index.AddressFormatter.setStreet(street).setCity(city).setPostalCode(postalCode).setDistrict(district).setState(state).get();

    var expectValue = "".concat(street, " - ").concat(postalCode, " ").concat(city, " (").concat(district, ") ").concat(state);
    expect(address).toEqual(expectValue);
  });
  it("Check if the class returns the address without setting 'postalCode'", function () {
    var address = _index.AddressFormatter.setStreet(street).setCivic(civic).setCity(city).setDistrict(district).setState(state).get();

    var expectValue = "".concat(street, ", ").concat(civic, " - ").concat(city, " (").concat(district, ") ").concat(state);
    expect(address).toEqual(expectValue);
  });
  it("Check if the class returns the address without setting 'district'", function () {
    var address = _index.AddressFormatter.setStreet(street).setCivic(civic).setCity(city).setPostalCode(postalCode).setState(state).get();

    var expectValue = "".concat(street, ", ").concat(civic, " - ").concat(postalCode, " ").concat(city, " ").concat(state);
    expect(address).toEqual(expectValue);
  });
  it("Check if the class returns the address without setting 'state'", function () {
    var address = _index.AddressFormatter.setStreet(street).setCivic(civic).setCity(city).setPostalCode(postalCode).setDistrict(district).get();

    var expectValue = "".concat(street, ", ").concat(civic, " - ").concat(postalCode, " ").concat(city, " (").concat(district, ")");
    expect(address).toEqual(expectValue);
  });
});