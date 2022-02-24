import {DELETE_CURRENT_ORDER, GET_ORDER_FAILED, GET_ORDER_REQUEST, GET_ORDER_SUCCESS} from "../constants";
import {openErrModal, openOrderModal, setError} from "./modal";
import {getOrderRequest} from '../api';
import {AppDispatch, AppThunk, TOrder} from "../../utils/type";


export interface IGetOrderAction {
  readonly type: typeof GET_ORDER_REQUEST;
}

export interface IGetOrderFailedAction {
  readonly type: typeof GET_ORDER_FAILED;
}

export interface IGetOrderSuccessAction {
  readonly type: typeof GET_ORDER_SUCCESS;
  readonly order: TOrder;
}

export interface IDeleteOrderAction {
  readonly type: typeof DELETE_CURRENT_ORDER;
}

export type TOrderActions =
  IGetOrderAction |
  IGetOrderFailedAction |
  IGetOrderSuccessAction |
  IDeleteOrderAction;

export const getOrderAction = (): IGetOrderAction => ({
  type: GET_ORDER_REQUEST
});

export const getOrderFailedAction = (): IGetOrderFailedAction => ({
  type: GET_ORDER_FAILED
});

export const getOrderSuccessAction = (order: TOrder): IGetOrderSuccessAction => ({
  type: GET_ORDER_SUCCESS,
  order
});

export const deleteCurrentOrder = (): IDeleteOrderAction => ({
  type: DELETE_CURRENT_ORDER,
});

export const getOrder: AppThunk = (selectedId: ReadonlyArray<string>) => {
  return function (dispatch: AppDispatch) {
    dispatch(getOrderAction());
    getOrderRequest(selectedId)
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          dispatch(getOrderFailedAction());
        }
        return Promise.reject(res.status);
      })
      .then((data) => {
        dispatch(getOrderSuccessAction(data.order));
        dispatch(openOrderModal());
      })
      .catch((err) => {
        dispatch(getOrderFailedAction());
        dispatch(setError(`getOrder ${err}`));
        dispatch(openErrModal());
      });
  };
};
