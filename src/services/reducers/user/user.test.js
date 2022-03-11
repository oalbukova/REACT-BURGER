// reducer
import { userReducer } from "./user";

// constants
import {
  AUTHORIZE_FAILED,
  AUTHORIZE_REQUEST,
  AUTHORIZE_SUCCESS,
  DELETE_USER_FAILED,
  DELETE_USER_REQUEST,
  DELETE_USER_SUCCESS,
  GET_USER_FAILED,
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  SET_USER_FAILED,
  SET_USER_REQUEST,
  SET_USER_SUCCESS,
  UPDATE_TOKEN_FAILED,
  UPDATE_TOKEN_REQUEST,
  UPDATE_TOKEN_SUCCESS,
  UPDATE_USER_FAILED,
  UPDATE_USER_REQUEST,
  UPDATE_USER_SUCCESS,
} from "../../constants";

// utils
import { currentUser, user, token } from "../../../utils/test-utils";

const initialUserState = {
  data: {},
  user: {},
  token: {},

  userRequest: false,
  userFailed: false,
  isLoggedIn: false,

  authRequest: false,
  authFailed: false,

  currentUserRequest: false,
  currentUserFailed: false,

  deleteUserRequest: false,
  deleteUserFailed: false,

  updateTokenRequest: false,
  updateTokenFailed: false,
};

describe("userReducer reducer", () => {
  it("should return the initial state", () => {
    expect(userReducer(undefined, {})).toEqual(initialUserState);
  });

  it("should handle UPDATE_TOKEN_REQUEST", () => {
    expect(
      userReducer(initialUserState, {
        type: UPDATE_TOKEN_REQUEST,
      })
    ).toEqual({
      ...initialUserState,
      updateTokenRequest: true,
    });
  });

  it("should handle UPDATE_TOKEN_SUCCESS", () => {
    expect(
      userReducer(initialUserState, {
        type: UPDATE_TOKEN_SUCCESS,
        token: { token },
      })
    ).toEqual({
      ...initialUserState,
      token: { token },
    });
  });

  it("should handle UPDATE_TOKEN_FAILED", () => {
    expect(
      userReducer(initialUserState, {
        type: UPDATE_TOKEN_FAILED,
      })
    ).toEqual({
      ...initialUserState,
      updateTokenFailed: true,
    });
  });

  it("should handle AUTHORIZE_REQUEST", () => {
    expect(
      userReducer(initialUserState, {
        type: AUTHORIZE_REQUEST,
      })
    ).toEqual({
      ...initialUserState,
      authRequest: true,
    });
  });

  it("should handle AUTHORIZE_SUCCESS", () => {
    expect(
      userReducer(initialUserState, {
        type: AUTHORIZE_SUCCESS,
        user: { user },
      })
    ).toEqual({
      ...initialUserState,
      data: { user },
    });
  });

  it("should handle AUTHORIZE_FAILED", () => {
    expect(
      userReducer(initialUserState, {
        type: AUTHORIZE_FAILED,
      })
    ).toEqual({
      ...initialUserState,
      authFailed: true,
    });
  });

  it("should handle GET_USER_REQUEST", () => {
    expect(
      userReducer(initialUserState, {
        type: GET_USER_REQUEST,
      })
    ).toEqual({
      ...initialUserState,
      currentUserRequest: true,
    });
  });

  it("should handle GET_USER_SUCCESS", () => {
    expect(
      userReducer(initialUserState, {
        type: GET_USER_SUCCESS,
        user: { currentUser },
      })
    ).toEqual({
      ...initialUserState,
      user: { currentUser },
    });
  });

  it("should handle GET_USER_FAILED", () => {
    expect(
      userReducer(initialUserState, {
        type: GET_USER_FAILED,
      })
    ).toEqual({
      ...initialUserState,
      currentUserFailed: true,
    });
  });

  it("should handle SET_USER_REQUEST", () => {
    expect(
      userReducer(initialUserState, {
        type: SET_USER_REQUEST,
      })
    ).toEqual({
      ...initialUserState,
      userRequest: true,
    });
  });

  it("should handle SET_USER_SUCCESS", () => {
    expect(
      userReducer(initialUserState, {
        type: SET_USER_SUCCESS,
        user: { currentUser },
      })
    ).toEqual({
      ...initialUserState,
      data: { currentUser },
    });
  });

  it("should handle SET_USER_FAILED", () => {
    expect(
      userReducer(initialUserState, {
        type: SET_USER_FAILED,
      })
    ).toEqual({
      ...initialUserState,
      userFailed: true,
    });
  });

  it("should handle UPDATE_USER_REQUEST", () => {
    expect(
      userReducer(initialUserState, {
        type: UPDATE_USER_REQUEST,
      })
    ).toEqual({
      ...initialUserState,
      currentUserRequest: true,
    });
  });

  it("should handle UPDATE_USER_SUCCESS", () => {
    expect(
      userReducer(initialUserState, {
        type: UPDATE_USER_SUCCESS,
        user: { currentUser },
      })
    ).toEqual({
      ...initialUserState,
      user: { currentUser },
    });
  });

  it("should handle UPDATE_USER_FAILED", () => {
    expect(
      userReducer(initialUserState, {
        type: UPDATE_USER_FAILED,
      })
    ).toEqual({
      ...initialUserState,
      currentUserFailed: true,
    });
  });

  it("should handle DELETE_USER_REQUEST", () => {
    expect(
      userReducer(initialUserState, {
        type: DELETE_USER_REQUEST,
      })
    ).toEqual({
      ...initialUserState,
      deleteUserRequest: true,
    });
  });

  it("should handle DELETE_USER_SUCCESS", () => {
    expect(
      userReducer(initialUserState, {
        type: DELETE_USER_SUCCESS,
      })
    ).toEqual({
      ...initialUserState,
      user: {},
    });
  });

  it("should handle DELETE_USER_FAILED", () => {
    expect(
      userReducer(initialUserState, {
        type: DELETE_USER_FAILED,
      })
    ).toEqual({
      ...initialUserState,
      deleteUserFailed: true,
    });
  });
});
