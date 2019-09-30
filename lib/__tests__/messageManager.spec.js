"use strict";

var _index = require("../index");

var _message = require("../constants/message");

describe("utils/messageManager", function () {
  it("Check if 'composeError' function returns the right object", function () {
    var code = "code";
    var data = {};
    var expectValue = {
      code: code,
      data: data,
      type: _message.MESSAGE_TYPE.ERROR
    };

    var actual = _index.messageManager.composeError(code, data);

    expect(actual).toEqual(expectValue);
  });
  it("Check if 'composeSuccess' function returns the right object", function () {
    var code = "code";
    var data = {};
    var expectValue = {
      code: code,
      data: data,
      type: _message.MESSAGE_TYPE.SUCCESS
    };

    var actual = _index.messageManager.composeSuccess(code, data);

    expect(actual).toEqual(expectValue);
  });
  it("Check if 'getCode' function returns the right code", function () {
    var messageExistingError = {
      code: _message.RESPONSES_KEY.E_BAD_REQUEST,
      type: _message.MESSAGE_TYPE.ERROR
    };

    var actual = _index.messageManager.getCode(messageExistingError);

    expect(actual).toBe("responses.".concat(_message.RESPONSES_KEY.E_BAD_REQUEST));
    var messageExistingSuccess = {
      code: _message.RESPONSES_KEY.OK_EXIT,
      type: _message.MESSAGE_TYPE.SUCCESS
    };
    actual = _index.messageManager.getCode(messageExistingSuccess);
    expect(actual).toBe("responses.".concat(_message.RESPONSES_KEY.OK_EXIT));
    var messageUndefinedError = {
      code: "E_UNDEFINED",
      type: _message.MESSAGE_TYPE.ERROR
    };
    actual = _index.messageManager.getCode(messageUndefinedError);
    expect(actual).toBe("responses.".concat(_message.RESPONSES_KEY.E_DEFAULT));
    var messageUndefinedSuccess = {
      code: "OK_UNDEFINED",
      type: _message.MESSAGE_TYPE.SUCCESS
    };
    actual = _index.messageManager.getCode(messageUndefinedSuccess);
    expect(actual).toBe("responses.".concat(_message.RESPONSES_KEY.OK_DEFAULT));
  });
  it("Check if 'getLocalized' function returns the right string", function () {
    var mockTranslator = {
      context: "context",
      fakeTranslator: function fakeTranslator(message) {
        return this.context + message;
      }
    };
    var message = {
      code: _message.RESPONSES_KEY.E_BAD_REQUEST,
      type: _message.MESSAGE_TYPE.ERROR
    };

    var actual = _index.messageManager.getLocalized(mockTranslator.fakeTranslator, mockTranslator, message);

    expect(actual).toBe(mockTranslator.context + _index.messageManager.getCode(message));
    var messageWithData = {
      code: _message.RESPONSES_KEY.E_BAD_REQUEST,
      type: _message.MESSAGE_TYPE.ERROR,
      data: {
        param: 'param'
      }
    };
    actual = _index.messageManager.getLocalized(mockTranslator.fakeTranslator, mockTranslator, messageWithData);
    expect(actual).toBe(mockTranslator.context + _index.messageManager.getCode(messageWithData) + ' ' + messageWithData.data.param);
  });
});