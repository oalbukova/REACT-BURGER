import { OPEN_ERR_MODAL, SET_ERR } from "./modal";

// utils
import { API_URL } from "../../utils/constants";

export const GET_ITEMS_REQUEST = "GET_ITEMS_REQUEST";
export const GET_ITEMS_SUCCESS = "GET_ITEMS_SUCCESS";
export const GET_ITEMS_FAILED = "GET_ITEMS_FAILED";

export function getItems() {
  return function (dispatch) {
    dispatch({
      type: GET_ITEMS_REQUEST,
    });
    fetch(`${API_URL}ingredients`)
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          dispatch({
            type: GET_ITEMS_FAILED,
          });
        }
        return Promise.reject(res.status);
      })
      .then((data) => {
        dispatch({
          type: GET_ITEMS_SUCCESS,
          items: data.data,
        });
      })
      .catch((err) => {
        dispatch({
          type: GET_ITEMS_FAILED,
        });
        dispatch({
          type: OPEN_ERR_MODAL,
        });
        dispatch({
          type: SET_ERR,
          text: err,
        });
      });
  };
}
