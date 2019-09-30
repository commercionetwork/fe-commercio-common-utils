"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _session = require("./constants/session");

var sessionManager = {
  /**
   * Function that starts a new session after successful authentication
   * 
   * @param {Object} session 
   */
  signInSuccess: function signInSuccess(session) {
    session.start();
    session.set(_session.USER_ROLE.AUTHORIZED, true);
    session.set(_session.USER_ROLE.NOT_AUTHORIZED, false);
  },

  /**
   * Function that checks if a user is authenticated
   * 
   * @param {Object} session 
   */
  isUserAuthenticated: function isUserAuthenticated(session) {
    return session && session.exists() && session.get(_session.USER_ROLE.AUTHORIZED) && !session.get(_session.USER_ROLE.NOT_AUTHORIZED);
  },

  /**
   * Function ending a session
   * 
   * @param {Object} session 
   */
  destroy: function destroy(session) {
    session.destroy();
  },

  /**
   * Function that sets a user as unauthorized in the session
   * 
   * @param {Object} session 
   */
  markAsUnauthorized: function markAsUnauthorized(session) {
    session.set(_session.USER_ROLE.NOT_AUTHORIZED, true);
  }
};
var _default = sessionManager;
exports["default"] = _default;