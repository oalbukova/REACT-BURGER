import {
  GET_USER_FAILED,
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  UPDATE_USER_FAILED,
  UPDATE_USER_REQUEST,
  UPDATE_USER_SUCCESS,
} from "../actions/user";

const initialCurrentUserState = {
  currentUser: [],
  currentUserRequest: false,
  currentUserFailed: false,
};

export const currentUserReducer = (state = initialCurrentUserState, action) => {
  switch (action.type) {
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
        currentUser: action.currentUser,
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
        currentUser: action.currentUser,
        currentUserRequest: false,
      };
    }
    case UPDATE_USER_FAILED: {
      return { ...state, currentUserFailed: true, currentUserRequest: false };
    }
    default: {
      return state;
    }
  }
};
