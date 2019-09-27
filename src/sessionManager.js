import {
  USER_ROLE
} from "./constants/session";

const sessionManager = {
  /**
   * Function that starts a new session after successful authentication
   * 
   * @param {Object} session 
   */
  signInSuccess(session) {
    session.start();
    session.set(USER_ROLE.AUTHORIZED, true);
    session.set(USER_ROLE.NOT_AUTHORIZED, false);
  },
  /**
   * Function that checks if a user is authenticated
   * 
   * @param {Object} session 
   */
  isUserAuthenticated (session) {
    return session && session.exists() && session.get(USER_ROLE.AUTHORIZED) && !session.get(USER_ROLE.NOT_AUTHORIZED);
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
    session.set(USER_ROLE.NOT_AUTHORIZED, true);
  }
};

export default sessionManager;
