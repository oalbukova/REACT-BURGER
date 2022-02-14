export enum Ingredients {
  GET_ITEMS_REQUEST = "GET_ITEMS_REQUEST",
  GET_ITEMS_SUCCESS = "GET_ITEMS_SUCCESS",
  GET_ITEMS_FAILED = "GET_ITEMS_FAILED",
}

export enum Order {
  GET_ORDER_REQUEST = "GET_ORDER_REQUEST",
  GET_ORDER_SUCCESS = "GET_ORDER_SUCCESS",
  GET_ORDER_FAILED = "GET_ORDER_FAILED",

  DELETE_CURRENT_ORDER = "DELETE_CURRENT_ORDER",
}

export enum Modal {
  OPEN_ORDER_MODAL = "OPEN_ORDER_MODAL",
  CLOSE_ORDER_MODAL = "CLOSE_ORDER_MODAL",

  OPEN_ERR_MODAL = "OPEN_ERR_MODAL",
  CLOSE_ERR_MODAL = "CLOSE_ERR_MODAL",

  SET_ERR = "SET_ERR",
}

export enum SelectedItems {
  ADD_SELECTED_BUN = "ADD_SELECTED_BUN",
  ADD_SELECTED_TOPPING = "ADD_SELECTED_TOPPING",

  DELETE_SELECTED_BUNS = "DELETE_SELECTED_BUNS",
  DELETE_SELECTED_TOPPINGS = "DELETE_SELECTED_TOPPINGS",

  DELETE_SELECTED_TOPPING = "DELETE_SELECTED_TOPPING",

  SORT_TOPPING = "SORT_TOPPING",
}

export enum User {
  SET_USER_REQUEST = "SET_USER_REQUEST",
  SET_USER_SUCCESS = "SET_USER_SUCCESS",
  SET_USER_FAILED = "SET_USER_FAILED",

  AUTHORIZE_REQUEST = "AUTHORIZE_REQUEST",
  AUTHORIZE_SUCCESS = "AUTHORIZE_SUCCESS",
  AUTHORIZE_FAILED = "AUTHORIZE_FAILED",

  GET_USER_REQUEST = "GET_USER_REQUEST",
  GET_USER_SUCCESS = "GET_USER_SUCCESS",
  GET_USER_FAILED = "GET_USER_FAILED",

  UPDATE_USER_REQUEST = "UPDATE_USER_REQUEST",
  UPDATE_USER_SUCCESS = "UPDATE_USER_SUCCESS",
  UPDATE_USER_FAILED = "UPDATE_USER_FAILED",

  DELETE_USER_REQUEST = "DELETE_USER_REQUEST",
  DELETE_USER_SUCCESS = "DELETE_USER_SUCCESS",
  DELETE_USER_FAILED = "DELETE_USER_FAILED",

  UPDATE_TOKEN_REQUEST = "UPDATE_TOKEN_REQUEST",
  UPDATE_TOKEN_SUCCESS = "UPDATE_TOKEN_SUCCESS",
  UPDATE_TOKEN_FAILED = "UPDATE_TOKEN_FAILED",
}

export enum Password {
  SET_FORGOT_PASSWORD_REQUEST = "SET_FORGOT_PASSWORD_REQUEST",
  SET_FORGOT_PASSWORD_SUCCESS = "SET_FORGOT_PASSWORD_SUCCESS",
  SET_FORGOT_PASSWORD_FAILED = "SET_FORGOT_PASSWORD_FAILED",

  SET_RESET_PASSWORD_REQUEST = "SET_FORGOT_PASSWORD_REQUEST",
  SET_RESET_PASSWORD_SUCCESS = "SET_FORGOT_PASSWORD_SUCCESS",
  SET_RESET_PASSWORD_FAILED = "SET_FORGOT_PASSWORD_FAILED",
}

export enum Button {
  SET_BTN_DISABLED = "SET_BTN_DISABLED",
  SET_BTN_ACTIVE = "SET_BTN_ACTIVE",
}

export enum Tab {
  TAB_SWITCH = "TAB_SWITCH",
}
