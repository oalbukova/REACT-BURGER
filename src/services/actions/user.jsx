import { OPEN_ERR_MODAL, SET_ERR } from "./modal";

// utils
import { API_URL } from "../../utils/constants";
import { getCookie } from "../../utils/utils";

export const GET_USER_REQUEST = "GET_USER_REQUEST";
export const GET_USER_SUCCESS = "GET_USER_SUCCESS";
export const GET_USER_FAILED = "GET_USER_FAILED";
export const UPDATE_USER_REQUEST = "UPDATE_USER_REQUEST";
export const UPDATE_USER_SUCCESS = "UPDATE_USER_SUCCESS";
export const UPDATE_USER_FAILED = "UPDATE_USER_FAILED";

export function getUser() {
  return function (dispatch) {
    dispatch({
      type: GET_USER_REQUEST,
    });

    fetch(`${API_URL}auth/user`, {
      method: "GET",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + getCookie("token"),
      },
      redirect: "follow",
      referrerPolicy: "no-referrer",
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          dispatch({
            type: GET_USER_FAILED,
          });
        }
        return Promise.reject(res.status);
      })
      .then((data) => {
        if (data.success) {
          dispatch({
            type: GET_USER_SUCCESS,
            currentUser: data,
          });
        }
      })
      .catch((err) => {
        dispatch({
          type: GET_USER_FAILED,
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

export function updateUser(email, password, name) {
  return function (dispatch) {
    dispatch({
      type: UPDATE_USER_REQUEST,
    });

    fetch(`${API_URL}auth/user`, {
      method: "PATCH",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + getCookie("token"),
      },
      redirect: "follow",
      referrerPolicy: "no-referrer",
      body: JSON.stringify({ email, password, name }),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          dispatch({
            type: UPDATE_USER_FAILED,
          });
        }
        return Promise.reject(res.status);
      })
      .then((data) => {
        if (data.success) {
          dispatch({
            type: UPDATE_USER_SUCCESS,
            currentUser: data,
          });
        }
      })
      .catch((err) => {
        dispatch({
          type: UPDATE_USER_FAILED,
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
