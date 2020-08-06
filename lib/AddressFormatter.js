"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var AddressFormatter = /*#__PURE__*/function () {
  function AddressFormatter() {
    _classCallCheck(this, AddressFormatter);

    this.clear();
  }

  _createClass(AddressFormatter, [{
    key: "clear",
    value: function clear() {
      this.street = null;
      this.civic = null;
      this.city = null;
      this.postalCode = null;
      this.district = null;
      this.state = null;
    }
  }, {
    key: "setStreet",
    value: function setStreet(street) {
      this.street = street;
      return this;
    }
  }, {
    key: "setCivic",
    value: function setCivic(civic) {
      this.civic = civic;
      return this;
    }
  }, {
    key: "setCity",
    value: function setCity(city) {
      this.city = city;
      return this;
    }
  }, {
    key: "setPostalCode",
    value: function setPostalCode(postalCode) {
      this.postalCode = postalCode;
      return this;
    }
  }, {
    key: "setDistrict",
    value: function setDistrict(district) {
      this.district = district;
      return this;
    }
  }, {
    key: "setState",
    value: function setState(state) {
      this.state = state;
      return this;
    }
  }, {
    key: "get",
    value: function get() {
      var fullAddress = "";

      if (this.street) {
        if (this.civic) {
          fullAddress += "".concat(this.street, ", ").concat(this.civic);
        } else {
          fullAddress += "".concat(this.street);
        }
      }

      if (this.city && fullAddress !== "") {
        if (this.postalCode) {
          fullAddress += " - ".concat(this.postalCode, " ").concat(this.city);
        } else {
          fullAddress += " - ".concat(this.city);
        }
      }

      if (this.district) {
        fullAddress += " (".concat(this.district, ")");
      }

      if (this.state) {
        fullAddress += " ".concat(this.state);
      }

      this.clear();
      return fullAddress;
    }
  }]);

  return AddressFormatter;
}();

var _default = new AddressFormatter();

exports["default"] = _default;