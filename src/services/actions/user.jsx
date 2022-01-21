import { OPEN_ERR_MODAL, SET_ERR } from "./modal";

// utils
import { API_URL } from "../../utils/constants";
import { setCookie, getCookie, deleteCookie } from "../../utils/utils";

export const SET_USER_REQUEST = "SET_USER_REQUEST";
export const SET_USER_SUCCESS = "SET_USER_SUCCESS";
export const SET_USER_FAILED = "SET_USER_FAILED";

export const AUTHORIZE_REQUEST = "AUTHORIZE_REQUEST";
export const AUTHORIZE_SUCCESS = "AUTHORIZE_SUCCESS";
export const AUTHORIZE_FAILED = "AUTHORIZE_FAILED";

export const GET_USER_REQUEST = "GET_USER_REQUEST";
export const GET_USER_SUCCESS = "GET_USER_SUCCESS";
export const GET_USER_FAILED = "GET_USER_FAILED";

export const UPDATE_USER_REQUEST = "UPDATE_USER_REQUEST";
export const UPDATE_USER_SUCCESS = "UPDATE_USER_SUCCESS";
export const UPDATE_USER_FAILED = "UPDATE_USER_FAILED";

export const DELETE_USER_FAILED = "DELETE_USER_FAILED";
export const DELETE_USER_REQUEST = "DELETE_USER_REQUEST";
export const DELETE_USER_SUCCESS = "DELETE_USER_SUCCESS";

export function register(email, password, name) {
  return function (dispatch) {
    dispatch({
      type: SET_USER_REQUEST,
    });
    fetch(`${API_URL}auth/register`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password, name }),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          dispatch({
            type: SET_USER_FAILED,
          });
        }
        return Promise.reject(res.status);
      })
      .then((data) => {
        if (data.success) {
          dispatch({
            type: SET_USER_SUCCESS,
            user: data,
          });
        }
      })
      .catch((err) => {
        dispatch({
          type: SET_USER_FAILED,
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
            user: data,
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

export function authorize(email, password) {
  return function (dispatch) {
    dispatch({
      type: AUTHORIZE_REQUEST,
    });
    fetch(`${API_URL}auth/login`, {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      redirect: "follow",
      referrerPolicy: "no-referrer",
      body: JSON.stringify({ email, password }),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          dispatch({
            type: AUTHORIZE_FAILED,
          });
        }
        return Promise.reject(res.status);
      })

      .then((data) => {
        if (data.success) {
          dispatch({
            type: AUTHORIZE_SUCCESS,
            user: data,
          });
          let accessToken = data.accessToken.split("Bearer ")[1];
          if (accessToken) {
            setCookie("token", accessToken);
          }

          let authToken = data.refreshToken;
          if (authToken) {
            localStorage.setItem("refreshToken", authToken);
          }
          getUser();
        }
      })
      .catch((err) => {
        if (err === 401) {
          dispatch({
            type: AUTHORIZE_FAILED,
          });
          dispatch({
            type: SET_ERR,
            text: `${err} Неправильные почта или пароль`,
          });
          dispatch({
            type: OPEN_ERR_MODAL,
          });
        } else {
          dispatch({
            type: AUTHORIZE_FAILED,
          });
          dispatch({
            type: SET_ERR,
            text: err,
          });
          dispatch({
            type: OPEN_ERR_MODAL,
          });
        }
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
            user: data,
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

export function deleteUser(token) {
  return function (dispatch) {
    dispatch({
      type: AUTHORIZE_REQUEST,
    });
    fetch(`${API_URL}auth/logout`, {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      redirect: "follow",
      referrerPolicy: "no-referrer",
      body: JSON.stringify({ token }),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          dispatch({
            type: DELETE_USER_FAILED,
          });
        }
        return Promise.reject(res.status);
      })

      .then((data) => {
        if (data.success) {
          dispatch({
            type: DELETE_USER_SUCCESS,
            user: data,
          });
          deleteCookie("token");
          // deleteCookie("authToken");
          // localStorage.removeItem("refreshToken");
          // localStorage.removeItem("userName");
        }
      })
      .catch((err) => {
        if (err === 401) {
          dispatch({
            type: AUTHORIZE_FAILED,
          });
          dispatch({
            type: SET_ERR,
            text: `${err} Неправильные почта или пароль`,
          });
          dispatch({
            type: OPEN_ERR_MODAL,
          });
        } else {
          dispatch({
            type: AUTHORIZE_FAILED,
          });
          dispatch({
            type: SET_ERR,
            text: err,
          });
          dispatch({
            type: OPEN_ERR_MODAL,
          });
        }
      });
  };
}
