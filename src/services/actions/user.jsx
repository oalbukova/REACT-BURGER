import { openErrModal, setError } from "./modal";
import {
  SET_USER_REQUEST,
  SET_USER_SUCCESS,
  SET_USER_FAILED,
  AUTHORIZE_REQUEST,
  AUTHORIZE_SUCCESS,
  AUTHORIZE_FAILED,
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  GET_USER_FAILED,
  UPDATE_USER_REQUEST,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_FAILED, 
  DELETE_USER_REQUEST,
  DELETE_USER_SUCCESS, 
  DELETE_USER_FAILED, 
  UPDATE_TOKEN_REQUEST, 
  UPDATE_TOKEN_SUCCESS,
  UPDATE_TOKEN_FAILED, 
} from "./actionTypes";

// utils
import { API_URL } from "../../utils/constants";
import { setCookie, getCookie, deleteCookie } from "../../utils/utils";


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
        dispatch(setError(`register ${err}`));
        dispatch(openErrModal());
      });
  };
}

export function updateToken(callback) {
  return function (dispatch) {
    dispatch({
      type: UPDATE_TOKEN_REQUEST,
    });
    fetch(`${API_URL}auth/token`, {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      redirect: "follow",
      referrerPolicy: "no-referrer",
      body: JSON.stringify({
        token: `${localStorage.getItem("refreshToken")}`,
      }),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          dispatch({
            type: UPDATE_TOKEN_FAILED,
          });
        }
        return Promise.reject(res.status);
      })
      .then((data) => {
        if (data.success) {
          dispatch({
            type: UPDATE_TOKEN_SUCCESS,
            token: data,
          });
          const accessToken = data.accessToken.split("Bearer ")[1];
          if (accessToken) {
            setCookie("token", accessToken);
          }

          const authToken = data.refreshToken;
          if (authToken) {
            localStorage.setItem("refreshToken", authToken);
          }
          callback && callback();
        }
      })
      .catch((err) => {
        dispatch({
          type: UPDATE_TOKEN_FAILED,
        });
        dispatch(setError(`${err} token не обновлен`));
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
        if (err === 403) {
          dispatch(updateToken(() => dispatch(getUser())));
        }
        dispatch(setError(`getUser ${err}`));
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
          const accessToken = data.accessToken.split("Bearer ")[1];
          if (accessToken) {
            setCookie("token", accessToken);
          }

          const authToken = data.refreshToken;
          if (authToken) {
            localStorage.setItem("refreshToken", authToken);
          }
          dispatch(getUser());
        }
      })
      .catch((err) => {
        if (err === 401) {
          dispatch({
            type: AUTHORIZE_FAILED,
          });
          dispatch(setError(`${err} Неправильные почта или пароль`));
          dispatch(openErrModal());
        } else {
          dispatch({
            type: AUTHORIZE_FAILED,
          });
          dispatch(setError(`authorize ${err}`));
          dispatch(openErrModal());
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
        if (err === 403) {
          dispatch(
            updateToken(() => dispatch(updateUser(email, password, name)))
          );
        }
        dispatch({
          type: UPDATE_USER_FAILED,
        });
        dispatch(setError(`updateUser ${err}`));
      });
  };
}

export function deleteUser(token) {
  return function (dispatch) {
    dispatch({
      type: DELETE_USER_REQUEST,
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
        }
      })
      .catch((err) => {
        dispatch({
          type: DELETE_USER_FAILED,
        });
        dispatch(openErrModal());
        dispatch(setError(`deleteUser ${err}`));
      });
  };
}
