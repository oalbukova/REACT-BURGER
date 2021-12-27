import { OPEN_ORDER_MODAL, OPEN_ERR_MODAL, SET_ERR } from "./modal";

// utils
import { API_URL } from "../../utils/constants";

export const GET_ORDER_REQUEST = "GET_ORDER_REQUEST";
export const GET_ORDER_SUCCESS = "GET_ORDER_SUCCESS";
export const GET_ORDER_FAILED = "GET_ORDER_FAILED";

export const DELETE_CURRENT_ORDER = "DELETE_CURRENT_ORDER";

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
        dispatch({
          type: OPEN_ORDER_MODAL,
        });
      })
      .catch((err) => {
        dispatch({
          type: GET_ORDER_FAILED,
        });
        dispatch({
          type: SET_ERR,
          text: err,
        });
        dispatch({
          type: OPEN_ERR_MODAL,
        });
      });
  };
}
