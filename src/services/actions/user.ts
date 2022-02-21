import {openErrModal, setError} from "./modal";
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
} from "../constants";

// utils
import {deleteCookie, setTokens} from "../../utils/utils";
import {TData, TDeleteUserData, TToken, TUserData} from "../../utils/type";
import {
  authorizeRequest,
  deleteUserRequest,
  getUserRequest,
  registerRequest,
  updateTokenRequest,
  updateUserRequest
} from "../api";


export interface IAuthorizeAction {
  readonly type: typeof AUTHORIZE_REQUEST;
}

export interface IAuthorizeFailedAction {
  readonly type: typeof AUTHORIZE_FAILED;
}

export interface IAuthorizeSuccessAction {
  readonly type: typeof AUTHORIZE_SUCCESS;
  readonly user: TData;
}

export interface IDeleteUserAction {
  readonly type: typeof DELETE_USER_REQUEST;
}

export interface IDeleteUserFailedAction {
  readonly type: typeof DELETE_USER_FAILED;
}

export interface IDeleteUserSuccessAction {
  readonly type: typeof DELETE_USER_SUCCESS;
  readonly user: TDeleteUserData;
}

export interface IGetUserAction {
  readonly type: typeof GET_USER_REQUEST;
}

export interface IGetUserFailedAction {
  readonly type: typeof GET_USER_FAILED;
}

export interface IGetUserSuccessAction {
  readonly type: typeof GET_USER_SUCCESS;
  readonly user: TUserData;
}

export interface ISetUserAction {
  readonly type: typeof SET_USER_REQUEST;
}

export interface ISetUserFailedAction {
  readonly type: typeof SET_USER_FAILED;
}

export interface ISetUserSuccessAction {
  readonly type: typeof SET_USER_SUCCESS;
  readonly user: TData;
}

export interface IUpdateUserAction {
  readonly type: typeof UPDATE_USER_REQUEST;
}

export interface IUpdateUserFailedAction {
  readonly type: typeof UPDATE_USER_FAILED;
}

export interface IUpdateUserSuccessAction {
  readonly type: typeof UPDATE_USER_SUCCESS;
  readonly user: TUserData;
}

export interface IUpdateTokenAction {
  readonly type: typeof UPDATE_TOKEN_REQUEST;
}

export interface IUpdateTokenFailedAction {
  readonly type: typeof UPDATE_TOKEN_FAILED;
}

export interface IUpdateTokenSuccessAction {
  readonly type: typeof UPDATE_TOKEN_SUCCESS;
  readonly token: TToken;
}

export type TUserActions =
  IAuthorizeAction |
  IAuthorizeFailedAction |
  IAuthorizeSuccessAction |
  IDeleteUserAction |
  IDeleteUserFailedAction |
  IDeleteUserSuccessAction |
  IGetUserAction |
  IGetUserFailedAction |
  IGetUserSuccessAction |
  ISetUserAction |
  ISetUserFailedAction |
  ISetUserSuccessAction |
  IUpdateUserAction |
  IUpdateUserFailedAction |
  IUpdateUserSuccessAction |
  IUpdateTokenAction |
  IUpdateTokenFailedAction |
  IUpdateTokenSuccessAction;

export const authorizeAction = (): IAuthorizeAction => ({
  type: AUTHORIZE_REQUEST
});

export const authorizeFailedAction = (): IAuthorizeFailedAction => ({
  type: AUTHORIZE_FAILED
});

export const authorizeSuccessAction = (user: TData): IAuthorizeSuccessAction => ({
  type: AUTHORIZE_SUCCESS,
  user
});

export const deleteUserAction = (): IDeleteUserAction => ({
  type: DELETE_USER_REQUEST
});

export const deleteUserFailedAction = (): IDeleteUserFailedAction => ({
  type: DELETE_USER_FAILED
});

export const deleteUserSuccessAction = (user: TDeleteUserData): IDeleteUserSuccessAction => ({
  type: DELETE_USER_SUCCESS,
  user
});

export const getUserAction = (): IGetUserAction => ({
  type: GET_USER_REQUEST
});

export const getUserFailedAction = (): IGetUserFailedAction => ({
  type: GET_USER_FAILED
});

export const getUserSuccessAction = (user: TUserData): IGetUserSuccessAction => ({
  type: GET_USER_SUCCESS,
  user
});

export const setUserAction = (): ISetUserAction => ({
  type: SET_USER_REQUEST
});

export const setUserFailedAction = (): ISetUserFailedAction => ({
  type: SET_USER_FAILED
});

export const setUserSuccessAction = (user: TData): ISetUserSuccessAction => ({
  type: SET_USER_SUCCESS,
  user
});

export const updateUserAction = (): IUpdateUserAction => ({
  type: UPDATE_USER_REQUEST
});

export const updateUserFailedAction = (): IUpdateUserFailedAction => ({
  type: UPDATE_USER_FAILED
});

export const updateUserSuccessAction = (user: TUserData): IUpdateUserSuccessAction => ({
  type: UPDATE_USER_SUCCESS,
  user
});

export const updateTokenAction = (): IUpdateTokenAction => ({
  type: UPDATE_TOKEN_REQUEST
});

export const updateTokenFailedAction = (): IUpdateTokenFailedAction => ({
  type: UPDATE_TOKEN_FAILED
});

export const updateTokenSuccessAction = (token: TToken): IUpdateTokenSuccessAction => ({
  type: UPDATE_TOKEN_SUCCESS,
  token
});

export function register(email: string, password: string, name: string) {
  return function (dispatch: any) {
    dispatch(setUserAction());
    registerRequest(email, password, name)
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          dispatch(setUserFailedAction());
        }
        return Promise.reject(res.status);
      })
      .then((data) => {
        if (data.success) {
          dispatch(setUserSuccessAction(data));
          setTokens(data);
          dispatch(getUser());
        }
      })
      .catch((err) => {
        dispatch(setUserFailedAction());
        dispatch(setError(`register ${err}`));
        dispatch(openErrModal());
      });
  };
}

export function updateToken(callback: any) {
  return function (dispatch: any) {
    dispatch(updateTokenAction());
    updateTokenRequest()
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          dispatch(updateTokenFailedAction());
        }
        return Promise.reject(res.status);
      })
      .then((data) => {
        if (data.success) {
          dispatch(updateTokenSuccessAction(data));
          setTokens(data);
          callback && callback();
        }
      })
      .catch((err) => {
        dispatch(updateTokenFailedAction());
        dispatch(setError(`${err} token не обновлен`));
      });
  };
}

export function getUser() {
  return function (dispatch: any) {
    dispatch(getUserAction());
    getUserRequest()
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          dispatch(getUserFailedAction());
        }
        return Promise.reject(res.status);
      })
      .then((data) => {
        if (data.success) {
          dispatch(getUserSuccessAction(data));
        }
      })
      .catch((err) => {
        dispatch(getUserFailedAction());
        if (err === 403) {
          dispatch(updateToken(() => dispatch(getUser())));
        }
        dispatch(setError(`getUser ${err}`));
      });
  };
}

export function authorize(email: string, password: string) {
  return function (dispatch: any) {
    dispatch(authorizeAction());
    authorizeRequest(email, password)
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          dispatch(authorizeFailedAction());
        }
        return Promise.reject(res.status);
      })
      .then((data) => {
        if (data.success) {
          dispatch(authorizeSuccessAction(data));
          setTokens(data);
          dispatch(getUser());
        }
      })
      .catch((err) => {
        authorizeFailedAction();
        dispatch(openErrModal());
        if (err === 401) {
          dispatch(setError(`${err} Неправильные почта или пароль`));
        } else {
          dispatch(setError(`authorize ${err}`));
        }
      });
  };
}

export function updateUser(email: string, password: string, name: string) {
  return function (dispatch: any) {
    dispatch(updateUserAction());
    updateUserRequest(email, password, name)
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          dispatch(updateUserFailedAction());
        }
        return Promise.reject(res.status);
      })
      .then((data) => {
        if (data.success) {
          dispatch(updateUserSuccessAction(data));
        }
      })
      .catch((err) => {
        if (err === 403) {
          dispatch(
            updateToken(() => dispatch(updateUser(email, password, name)))
          );
        }
        dispatch(updateUserFailedAction());
        dispatch(setError(`updateUser ${err}`));
      });
  };
}

export function deleteUser(token: string | null) {
  return function (dispatch: any) {
    dispatch(deleteUserAction());
    deleteUserRequest(token)
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          dispatch(deleteUserFailedAction());
        }
        return Promise.reject(res.status);
      })
      .then((data) => {
        if (data.success) {
          dispatch(deleteUserSuccessAction(data));
          deleteCookie("token");
        }
      })
      .catch((err) => {
        dispatch(deleteUserFailedAction());
        dispatch(openErrModal());
        dispatch(setError(`deleteUser ${err}`));
      });
  };
}

