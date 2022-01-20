import {
  AUTHORIZE_REQUEST,
  AUTHORIZE_SUCCESS,
  AUTHORIZE_FAILED,
} from "../actions/login";

const initialAuthState = {
  auth: {},
  authRequest: false,
  authFailed: false,
};

export const loginReducer = (state = initialAuthState, action) => {
  switch (action.type) {
    case AUTHORIZE_REQUEST: {
      return {
        ...state,
        authRequest: true,
      };
    }
    case AUTHORIZE_SUCCESS: {
      return {
        ...state,
        authFailed: false,
        auth: action.auth,
        authRequest: false,
      };
    }
    case AUTHORIZE_FAILED: {
      return { ...state, authFailed: true, authRequest: false };
    }
    default: {
      return state;
    }
  }
};
