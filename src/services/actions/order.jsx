import { Order } from "./actionTypes";
import { openOrderModal, openErrModal, setError } from "./modal";

// utils
import { API_URL } from "../../utils/constants";

const {
  GET_ORDER_REQUEST,
  GET_ORDER_SUCCESS,
  GET_ORDER_FAILED,
  DELETE_CURRENT_ORDER,
} = Order;

export function getOrder(selectedId) {
  return function (dispatch) {
    dispatch({
      type: GET_ORDER_REQUEST,
    });
    fetch(`${API_URL}orders`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ingredients: selectedId,
      }),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          dispatch({
            type: GET_ORDER_FAILED,
          });
        }
        return Promise.reject(res.status);
      })
      .then((data) => {
        dispatch({
          type: GET_ORDER_SUCCESS,
          order: data.order,
        });
        dispatch(openOrderModal());
      })
      .catch((err) => {
        dispatch({
          type: GET_ORDER_FAILED,
        });
        dispatch(setError(`getOrder ${err}`));
        dispatch(openErrModal());
      });
  };
}

export const deleteCurrentOrder = () => ({
  type: DELETE_CURRENT_ORDER,
});
