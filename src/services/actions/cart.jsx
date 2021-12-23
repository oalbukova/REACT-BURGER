// utils
import { API_URL } from "../../utils/constants";

export const GET_ITEMS_REQUEST = "GET_ITEMS_REQUEST";
export const GET_ITEMS_SUCCESS = "GET_ITEMS_SUCCESS";
export const GET_ITEMS_FAILED = "GET_ITEMS_FAILED";

export const ADD_SELECTED_BUN = "ADD_SELECTED_BUN";
export const ADD_SELECTED_TOPPING = "ADD_SELECTED_TOPPING";

export const GET_CURRENT_INGREDIENT = "GET_CURRENT_INGREDIENT";
export const DELETE_CURRENT_INGREDIENT = "DELETE_CURRENT_INGREDIENT";

export const GET_ORDER_REQUEST = "GET_ORDER_REQUEST";
export const GET_ORDER_SUCCESS = "GET_ORDER_SUCCESS";
export const GET_ORDER_FAILED = "GET_ORDER_FAILED";

export const DELETE_CURRENT_ORDER = "DELETE_CURRENT_ORDER";

export const OPEN_INGREDIENT_MODAL = "OPEN_INGREDIENT_MODAL";
export const CLOSE_INGREDIENT_MODAL = "CLOSE_INGREDIENT_MODAL";

export const OPEN_ORDER_MODAL = "OPEN_ORDER_MODAL";
export const CLOSE_ORDER_MODAL = "CLOSE_ORDER_MODAL";

export const OPEN_ERR_MODAL = "OPEN_ERR_MODAL";
export const CLOSE_ERR_MODAL = "CLOSE_ERR_MODAL";
export const SET_ERR = "SET_ERR";

export const SET_BTN_DISABLED = "SET_BTN_DISABLED";
export const SET_BTN_ACTIVE = "SET_BTN_ACTIVE";

export const TAB_SWITCH = 'TAB_SWITCH';

// export const UPDATE_ORDER_NUMBER = 'UPDATE_ORDER_NUMBER_REQUEST';



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
      .then((data) =>
        dispatch({
          type: GET_ITEMS_SUCCESS,
          items: data.data,
        })
      )
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
