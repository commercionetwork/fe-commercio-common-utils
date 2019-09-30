"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _message = require("./constants/message");

var messageManager = {
  /**
   * Function to build an error message
   * 
   * @param {string} code 
   * @param {Object} data 
   */
  composeError: function composeError(code, data) {
    return {
      code: code,
      data: data,
      type: _message.MESSAGE_TYPE.ERROR
    };
  },

  /**
   * Function to build a success message
   * 
   * @param {string} code 
   * @param {Object} data 
   */
  composeSuccess: function composeSuccess(code, data) {
    return {
      code: code,
      data: data,
      type: _message.MESSAGE_TYPE.SUCCESS
    };
  },

  /**
   * Function to get the response code
   * 
   * @param {Message} message 
   */
  getCode: function getCode(message) {
    var code = message.type === _message.MESSAGE_TYPE.ERROR ? _message.RESPONSES_KEY.E_DEFAULT : _message.RESPONSES_KEY.OK_DEFAULT;

    if (message.code in _message.RESPONSES_KEY) {
      code = message.code;
    }

    return "responses.".concat(code);
  },

  /**
   * Function to localize the APIs response message
   * 
   * @param {Function} translator 
   * @param {Object} context The context to bind to the translator function
   * @param {Message} message 
   */
  getLocalized: function getLocalized(translator, context, message) {
    var $t = translator.bind(context);
    var code = this.getCode(message);
    var translated = $t(code);

    if (message.type === _message.MESSAGE_TYPE.ERROR && message.data) {
      translated = "".concat(translated, " ").concat(Object.values(message.data).join(' '));
    }

    return translated;
  }
};
var _default = messageManager;
exports["default"] = _default;