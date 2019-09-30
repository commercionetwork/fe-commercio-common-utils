import {
  messageManager
} from "../index";
import {
  MESSAGE_TYPE,
  RESPONSES_KEY
} from "../constants/message";

describe("utils/messageManager", () => {
  it("Check if 'composeError' function returns the right object", () => {
    const code = "code";
    const data = {};
    const expectValue = {
      code,
      data,
      type: MESSAGE_TYPE.ERROR
    }

    const actual = messageManager.composeError(code, data);

    expect(actual).toEqual(expectValue);
  });

  it("Check if 'composeSuccess' function returns the right object", () => {
    const code = "code";
    const data = {};
    const expectValue = {
      code,
      data,
      type: MESSAGE_TYPE.SUCCESS
    }

    const actual = messageManager.composeSuccess(code, data);

    expect(actual).toEqual(expectValue);
  });

  it("Check if 'getCode' function returns the right code", () => {
    const messageExistingError = {
      code: RESPONSES_KEY.E_BAD_REQUEST,
      type: MESSAGE_TYPE.ERROR
    };
    let actual = messageManager.getCode(messageExistingError);
    expect(actual).toBe(`responses.${RESPONSES_KEY.E_BAD_REQUEST}`);

    const messageExistingSuccess = {
      code: RESPONSES_KEY.OK_EXIT,
      type: MESSAGE_TYPE.SUCCESS
    };
    actual = messageManager.getCode(messageExistingSuccess);
    expect(actual).toBe(`responses.${RESPONSES_KEY.OK_EXIT}`);

    const messageUndefinedError = {
      code: "E_UNDEFINED",
      type: MESSAGE_TYPE.ERROR
    };
    actual = messageManager.getCode(messageUndefinedError);
    expect(actual).toBe(`responses.${RESPONSES_KEY.E_DEFAULT}`);

    const messageUndefinedSuccess = {
      code: "OK_UNDEFINED",
      type: MESSAGE_TYPE.SUCCESS
    };
    actual = messageManager.getCode(messageUndefinedSuccess);
    expect(actual).toBe(`responses.${RESPONSES_KEY.OK_DEFAULT}`);
  });

  it("Check if 'getLocalized' function returns the right string", () => {
    const mockTranslator = {
      context: "context",
      fakeTranslator(message) {
        return this.context + message;
      }
    };

    const message = {
      code: RESPONSES_KEY.E_BAD_REQUEST,
      type: MESSAGE_TYPE.ERROR
    };
    let actual = messageManager.getLocalized(mockTranslator.fakeTranslator, mockTranslator, message);
    expect(actual).toBe(mockTranslator.context + messageManager.getCode(message));

    const messageWithData = {
      code: RESPONSES_KEY.E_BAD_REQUEST,
      type: MESSAGE_TYPE.ERROR,
      data: {
        param: 'param'
      }
    };
    actual = messageManager.getLocalized(mockTranslator.fakeTranslator, mockTranslator, messageWithData);
    expect(actual).toBe(mockTranslator.context + messageManager.getCode(messageWithData) + ' ' + messageWithData.data.param);
  });
});