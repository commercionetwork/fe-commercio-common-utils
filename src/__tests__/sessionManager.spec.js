import {
  sessionManager
} from "../index";
import {
  USER_ROLE
} from "../constants/session";

describe("utils/sessionManager", () => {
  const session = {
    destroy: jest.fn(),
    exists: jest.fn(),
    get: jest.fn(),
    set: jest.fn(),
    start: jest.fn(),
  };

  it("signInSuccess", () => {
    sessionManager.signInSuccess(session);

    expect(session.start).toBeCalled();
    expect(session.set).toHaveBeenCalledWith(USER_ROLE.AUTHORIZED, true);
    expect(session.set).toHaveBeenCalledWith(USER_ROLE.NOT_AUTHORIZED, false);
  });

  it("isUserAuthenticated", () => {
    sessionManager.isUserAuthenticated(session);

    expect(session.exists).toBeCalled();
  });

  it("destroy", () => {
    sessionManager.destroy(session);

    expect(session.destroy).toBeCalled();
  });

  it("markAsUnauthorized", () => {
    sessionManager.markAsUnauthorized(session);

    expect(session.set).toHaveBeenCalledWith(USER_ROLE.NOT_AUTHORIZED, true);
  });
});