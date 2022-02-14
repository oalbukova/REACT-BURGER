import { User } from "../actions/actionTypes";

const {
  SET_USER_REQUEST,
  SET_USER_SUCCESS,
  SET_USER_FAILED,
  AUTHORIZE_REQUEST,
  AUTHORIZE_SUCCESS,
  AUTHORIZE_FAILED,
  GET_USER_FAILED,
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  UPDATE_USER_FAILED,
  UPDATE_USER_REQUEST,
  UPDATE_USER_SUCCESS,
  DELETE_USER_FAILED,
  DELETE_USER_REQUEST,
  DELETE_USER_SUCCESS,
  UPDATE_TOKEN_FAILED,
  UPDATE_TOKEN_REQUEST,
  UPDATE_TOKEN_SUCCESS,
} = User;

const initialUserState = {
  user: [],
  token: {},

  userRequest: false,
  userFailed: false,

  authRequest: false,
  authFailed: false,

  currentUserRequest: false,
  currentUserFailed: false,

  deleteUserRequest: false,
  deleteUserFailed: false,

  updateTokenRequest: false,
  updateTokenFailed: false,
};

export const userReducer = (state = initialUserState, action) => {
  switch (action.type) {
    case SET_USER_REQUEST: {
      return {
        ...state,
        userRequest: true,
      };
    }
    case SET_USER_SUCCESS: {
      return {
        ...state,
        userFailed: false,
        user: action.user,
        userRequest: false,
      };
    }
    case SET_USER_FAILED: {
      return { ...state, userFailed: true, userRequest: false };
    }

    case AUTHORIZE_REQUEST: {
      return {
        ...state,
        authRequest: true,
      };
    }
    case AUTHORIZE_SUCCESS: {
      return {
        ...state,
        authFailed: false,
        user: action.user,
        authRequest: false,
      };
    }
    case AUTHORIZE_FAILED: {
      return { ...state, authFailed: true, authRequest: false };
    }

    case GET_USER_REQUEST: {
      return {
        ...state,
        currentUserRequest: true,
      };
    }
    case GET_USER_SUCCESS: {
      return {
        ...state,
        currentUserFailed: false,
        user: action.user,
        currentUserRequest: false,
      };
    }
    case GET_USER_FAILED: {
      return { ...state, currentUserFailed: true, currentUserRequest: false };
    }

    case UPDATE_USER_REQUEST: {
      return {
        ...state,
        currentUserRequest: true,
      };
    }
    case UPDATE_USER_SUCCESS: {
      return {
        ...state,
        currentUserFailed: false,
        user: action.user,
        currentUserRequest: false,
      };
    }
    case UPDATE_USER_FAILED: {
      return { ...state, currentUserFailed: true, currentUserRequest: false };
    }

    case DELETE_USER_REQUEST: {
      return {
        ...state,
        deleteUserRequest: true,
      };
    }
    case DELETE_USER_SUCCESS: {
      return {
        ...state,
        deleteUserFailed: false,
        user: {},
        deleteUserRequest: false,
      };
    }
    case DELETE_USER_FAILED: {
      return { ...state, deleteUserFailed: true, deleteUserRequest: false };
    }

    case UPDATE_TOKEN_REQUEST: {
      return {
        ...state,
        updateTokenRequest: true,
      };
    }
    case UPDATE_TOKEN_SUCCESS: {
      return {
        ...state,
        updateTokenFailed: false,
        token: action.token,
        updateTokenRequest: false,
      };
    }
    case UPDATE_TOKEN_FAILED: {
      return { ...state, updateTokenFailed: true, updateTokenRequest: false };
    }

    default: {
      return state;
    }
  }
};
