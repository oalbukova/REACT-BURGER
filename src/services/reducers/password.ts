import {
  SET_FORGOT_PASSWORD_FAILED,
  SET_FORGOT_PASSWORD_REQUEST,
  SET_FORGOT_PASSWORD_SUCCESS,
  SET_RESET_PASSWORD_FAILED,
  SET_RESET_PASSWORD_REQUEST,
  SET_RESET_PASSWORD_SUCCESS,
} from "../constants";
import {TPasswordActions} from "../actions/password";
import {TRequestMessage} from "../../utils/type";

type TPasswordState = {
  forgot_password: TRequestMessage,
  forgot_passwordRequest: boolean,
  forgot_passwordFailed: boolean,
  reset_password: TRequestMessage,
  reset_passwordRequest: boolean,
  reset_passwordFailed: boolean,
}

const initialPasswordState: TPasswordState = {
  forgot_password: {},
  forgot_passwordRequest: false,
  forgot_passwordFailed: false,
  reset_password: {},
  reset_passwordRequest: false,
  reset_passwordFailed: false,
};


export const forgotPasswordReducer = (
  state = initialPasswordState,
  action: TPasswordActions
) => {
  switch (action.type) {
    case SET_FORGOT_PASSWORD_REQUEST: {
      return {
        ...state,
        forgot_passwordRequest: true,
      };
    }
    case SET_FORGOT_PASSWORD_SUCCESS: {
      return {
        ...state,
        forgot_passwordFailed: false,
        forgot_password: action.forgot_password,
        forgot_passwordRequest: false,
      };
    }
    case SET_FORGOT_PASSWORD_FAILED: {
      return {
        ...state,
        forgot_passwordFailed: true,
        forgot_passwordRequest: false,
      };
    }

    default: {
      return state;
    }
  }
};

export const resetPasswordReducer = (
  state = initialPasswordState,
  action: TPasswordActions
) => {
  switch (action.type) {
    case SET_RESET_PASSWORD_REQUEST: {
      return {
        ...state,
        reset_passwordRequest: true,
      };
    }
    case SET_RESET_PASSWORD_SUCCESS: {
      return {
        ...state,
        reset_passwordFailed: false,
        reset_password: action.reset_password,
        reset_passwordRequest: false,
      };
    }
    case SET_RESET_PASSWORD_FAILED: {
      return {
        ...state,
        reset_passwordFailed: true,
        reset_passwordRequest: false,
      };
    }

    default: {
      return state;
    }
  }
};
