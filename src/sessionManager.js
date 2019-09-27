const constants = require('./constants');

const sessionManager = {
  /**
   * Function that starts a new session after successful authentication
   * 
   * @param {Object} session 
   */
  signInSuccess(session) {
    session.start();
    session.set(constants.USER_ROLE.AUTHORIZED, true);
    session.set(constants.USER_ROLE.NOT_AUTHORIZED, false);
  },
  /**
   * Function that checks if a user is authenticated
   * 
   * @param {Object} session 
   */
  isUserAuthenticated (session) {
    return session && session.exists() && session.get(constants.USER_ROLE.AUTHORIZED) && !session.get(constants.USER_ROLE.NOT_AUTHORIZED);
  },
  /**
   * Function ending a session
   * 
   * @param {Object} session 
   */
  destroy(session) {
    session.destroy();
  },
  /**
   * Function that sets a user as unauthorized in the session
   * 
   * @param {Object} session 
   */
  markAsUnauthorized(session) {
    session.set(constants.USER_ROLE.NOT_AUTHORIZED, true);
  }
};

exports.sessionManager = sessionManager;
