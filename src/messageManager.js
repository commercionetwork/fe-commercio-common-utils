import {
  MESSAGE_TYPE, RESPONSES_KEY
} from "./constants/message";

const messageManager = {
  /**
   * Function to build an error message
   * 
   * @param {string} code 
   * @param {Object} data 
   */
  composeError(code, data) {
    return {
      code,
      data,
      type: MESSAGE_TYPE.ERROR
    }
  },
  /**
   * Function to build a success message
   * 
   * @param {string} code 
   * @param {Object} data 
   */
  composeSuccess(code, data) {
    return {
      code,
      data,
      type: MESSAGE_TYPE.SUCCESS
    }
  },
  /**
   * Function to get the response code
   * 
   * @param {Message} message 
   */
  getCode(message) {
    let code = (message.type === MESSAGE_TYPE.ERROR)
      ? RESPONSES_KEY.E_DEFAULT
      : RESPONSES_KEY.OK_DEFAULT;
    
    if (message.code in RESPONSES_KEY) {
      code = message.code;
    }

    return `responses.${code}`;
  },
  /**
   * Function to localize the APIs response message
   * 
   * @param {Function} translator 
   * @param {Object} context The context to bind to the translator function
   * @param {Message} message 
   */
  getLocalized(translator, context, message) {
    const $t = translator.bind(context);
    let code = this.getCode(message);
    let translated = $t(code);

    if (message.type === MESSAGE_TYPE.ERROR && message.data) {
      translated = `${translated} ${Object.values(message.data).join(' ')}`;
    }

    return translated;
  }
};

export default messageManager;
