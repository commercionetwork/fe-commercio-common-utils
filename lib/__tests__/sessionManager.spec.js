"use strict";

var _index = require("../index");

var _session = require("../constants/session");

describe("sessionManager", function () {
  var session = {
    destroy: jest.fn(),
    exists: jest.fn(),
    get: jest.fn(),
    set: jest.fn(),
    start: jest.fn()
  };
  it("signInSuccess", function () {
    _index.sessionManager.signInSuccess(session);

    expect(session.start).toBeCalled();
    expect(session.set).toHaveBeenCalledWith(_session.USER_ROLE.AUTHORIZED, true);
    expect(session.set).toHaveBeenCalledWith(_session.USER_ROLE.NOT_AUTHORIZED, false);
  });
  it("isUserAuthenticated", function () {
    _index.sessionManager.isUserAuthenticated(session);

    expect(session.exists).toBeCalled();
  });
  it("destroy", function () {
    _index.sessionManager.destroy(session);

    expect(session.destroy).toBeCalled();
  });
  it("markAsUnauthorized", function () {
    _index.sessionManager.markAsUnauthorized(session);

    expect(session.set).toHaveBeenCalledWith(_session.USER_ROLE.NOT_AUTHORIZED, true);
  });
});