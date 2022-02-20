import {
  OPEN_ORDER_MODAL,
  CLOSE_ORDER_MODAL,
  OPEN_ERR_MODAL,
  CLOSE_ERR_MODAL,
  SET_ERR
} from "../constants";

export interface IOpenOrderModalAction {
  readonly type: typeof OPEN_ORDER_MODAL;
}

export interface ICloseOrderModalAction {
  readonly type: typeof CLOSE_ORDER_MODAL;
}

export interface IOpenErrModalAction {
  readonly type: typeof OPEN_ERR_MODAL;
}

export interface ICloseErrModalAction {
  readonly type: typeof CLOSE_ERR_MODAL;
}

export interface ISetErrAction {
  readonly type: typeof SET_ERR;
  readonly text: string;
}

export type TModalActions =
  IOpenOrderModalAction |
  ICloseOrderModalAction |
  IOpenErrModalAction |
  ICloseErrModalAction |
  ISetErrAction;

export const openOrderModal = (): IOpenOrderModalAction => ({
  type: OPEN_ORDER_MODAL,
});

export const closeOrderModal = (): ICloseOrderModalAction => ({
  type: CLOSE_ORDER_MODAL,
});

export const openErrModal = (): IOpenErrModalAction => ({
  type: OPEN_ERR_MODAL,
});

export const closeErrModal = (): ICloseErrModalAction => ({
  type: CLOSE_ERR_MODAL,
});

export const setError = (err: string): ISetErrAction => ({
  type: SET_ERR,
  text: err,
});
