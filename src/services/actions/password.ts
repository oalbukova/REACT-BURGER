// actions
import { openErrModal, setError } from "./modal";

// constants
import {
  SET_FORGOT_PASSWORD_FAILED,
  SET_FORGOT_PASSWORD_REQUEST,
  SET_FORGOT_PASSWORD_SUCCESS,
  SET_RESET_PASSWORD_FAILED,
  SET_RESET_PASSWORD_REQUEST,
  SET_RESET_PASSWORD_SUCCESS,
} from "../constants";

// api
import { forgotPasswordRequest, resetPasswordRequest } from "../api";

// utils
import { AppDispatch, AppThunk, TRequestMessage } from "../../utils/type";

export interface ISetForgotPasswordAction {
  readonly type: typeof SET_FORGOT_PASSWORD_REQUEST;
}

export interface ISetForgotPasswordFailedAction {
  readonly type: typeof SET_FORGOT_PASSWORD_FAILED;
}

export interface ISetForgotPasswordSuccessAction {
  readonly type: typeof SET_FORGOT_PASSWORD_SUCCESS;
  readonly forgot_password: TRequestMessage;
}

export interface ISetResetPasswordAction {
  readonly type: typeof SET_RESET_PASSWORD_REQUEST;
}

export interface ISetResetPasswordFailedAction {
  readonly type: typeof SET_RESET_PASSWORD_FAILED;
}

export interface ISetResetPasswordSuccessAction {
  readonly type: typeof SET_RESET_PASSWORD_SUCCESS;
  readonly reset_password: TRequestMessage;
}

export type TPasswordActions =
  ISetForgotPasswordAction |
  ISetForgotPasswordFailedAction |
  ISetForgotPasswordSuccessAction |
  ISetResetPasswordAction |
  ISetResetPasswordFailedAction |
  ISetResetPasswordSuccessAction;

export const setForgotPassword = (): ISetForgotPasswordAction => ({
  type: SET_FORGOT_PASSWORD_REQUEST
});

export const setForgotPasswordFailed = (): ISetForgotPasswordFailedAction => ({
  type: SET_FORGOT_PASSWORD_FAILED
});

export const setForgotPasswordSuccess = (forgot_password: TRequestMessage): ISetForgotPasswordSuccessAction => ({
  type: SET_FORGOT_PASSWORD_SUCCESS,
  forgot_password
});

export const setResetPassword = (): ISetResetPasswordAction => ({
  type: SET_RESET_PASSWORD_REQUEST
});

export const setResetPasswordFailed = (): ISetResetPasswordFailedAction => ({
  type: SET_RESET_PASSWORD_FAILED
});

export const setResetPasswordSuccess = (reset_password: TRequestMessage): ISetResetPasswordSuccessAction => ({
  type: SET_RESET_PASSWORD_SUCCESS,
  reset_password
});

export const forgotPassword: AppThunk = (email: string) => {
  return function (dispatch: AppDispatch) {
    dispatch(setForgotPassword());
    forgotPasswordRequest(email)
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          dispatch(setForgotPasswordFailed());
        }
        return Promise.reject(res.status);
      })
      .then((data) => {
        if (data.success) {
          dispatch(setForgotPasswordSuccess(data))
        }
      })
      .catch((err) => {
        dispatch(setForgotPasswordFailed());
        dispatch(setError(`forgotPassword ${err}`));
        dispatch(openErrModal());
      });
  };
}

export const resetPassword: AppThunk = (password: string, token: string) => {
  return function (dispatch: AppDispatch) {
    dispatch(setResetPassword());
    resetPasswordRequest(password, token)
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          dispatch(setResetPasswordFailed());
        }
        return Promise.reject(res.status);
      })
      .then((data) => {
        if (data.success) {
          dispatch(setResetPasswordSuccess(data));
        }
      })
      .catch((err) => {
        dispatch(setResetPasswordFailed());
        dispatch(setError(`resetPassword ${err}`));
        dispatch(openErrModal());
      });
  };
}
