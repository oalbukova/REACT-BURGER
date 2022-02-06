import {
  OPEN_ORDER_MODAL,
  CLOSE_ORDER_MODAL,
  OPEN_ERR_MODAL,
  CLOSE_ERR_MODAL,
  SET_ERR,
} from "./actionTypes";

export const openOrderModal = () => ({
  type: OPEN_ORDER_MODAL,
});

export const closeOrderModal = () => ({
  type: CLOSE_ORDER_MODAL,
});

export const openErrModal = () => ({
  type: OPEN_ERR_MODAL,
});

export const closeErrModal = () => ({
  type: CLOSE_ERR_MODAL,
});

export const setError = (err) => ({
  type: SET_ERR,
  text: err,
});
