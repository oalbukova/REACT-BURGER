// reducer
import {forgotPasswordReducer, resetPasswordReducer} from './password';

// constants
import {
  SET_FORGOT_PASSWORD_FAILED,
  SET_FORGOT_PASSWORD_REQUEST,
  SET_FORGOT_PASSWORD_SUCCESS,
  SET_RESET_PASSWORD_FAILED,
  SET_RESET_PASSWORD_REQUEST,
  SET_RESET_PASSWORD_SUCCESS,
} from "../../constants";

// utils
import {passwordReq} from "../../../utils/test-utils";


const initialPasswordState = {
  forgot_password: {},
  forgot_passwordRequest: false,
  forgot_passwordFailed: false,
  reset_password: {},
  reset_passwordRequest: false,
  reset_passwordFailed: false,
};

describe('forgot-password reducer', () => {
  it('should return the initial state', () => {
    expect(forgotPasswordReducer(undefined, {})).toEqual(initialPasswordState)
  })
  it('should handle SET_FORGOT_PASSWORD_REQUEST', () => {
    expect(forgotPasswordReducer(initialPasswordState, {
      type: SET_FORGOT_PASSWORD_REQUEST,
    })).toEqual({
      ...initialPasswordState, forgot_passwordRequest: true
    })
  })

  it('should handle SET_FORGOT_PASSWORD_SUCCESS', () => {
    expect(forgotPasswordReducer(initialPasswordState, {
      type: SET_FORGOT_PASSWORD_SUCCESS, forgot_password: {passwordReq}
    })).toEqual({
      ...initialPasswordState, forgot_password: {passwordReq},
    })
  })

  it('should handle SET_FORGOT_PASSWORD_FAILED', () => {
    expect(forgotPasswordReducer(initialPasswordState, {
      type: SET_FORGOT_PASSWORD_FAILED,
    })).toEqual({
      ...initialPasswordState, forgot_passwordFailed: true
    })
  })
})

describe('reset-password reducer', () => {
  it('should return the initial state', () => {
    expect(resetPasswordReducer(undefined, {})).toEqual(initialPasswordState)
  })
  it('should handle SET_RESET_PASSWORD_REQUEST', () => {
    expect(resetPasswordReducer(initialPasswordState, {
      type: SET_RESET_PASSWORD_REQUEST,
    })).toEqual({
      ...initialPasswordState, reset_passwordRequest: true
    })
  })

  it('should handle SET_RESET_PASSWORD_SUCCESS', () => {
    expect(resetPasswordReducer(initialPasswordState, {
      type: SET_RESET_PASSWORD_SUCCESS, reset_password: {passwordReq}
    })).toEqual({
      ...initialPasswordState, reset_password: {passwordReq},
    })
  })

  it('should handle SET_RESET_PASSWORD_FAILED', () => {
    expect(resetPasswordReducer(initialPasswordState, {
      type: SET_RESET_PASSWORD_FAILED,
    })).toEqual({
      ...initialPasswordState, reset_passwordFailed: true
    })
  })
})
