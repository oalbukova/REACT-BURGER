import {
  SET_USER_REQUEST,
  SET_USER_SUCCESS,
  SET_USER_FAILED,
} from "../actions/register";

const initialUserState = {
  user: {},
  userRequest: false,
  userFailed: false,
};

export const registerReducer = (state = initialUserState, action) => {
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
    default: {
      return state;
    }
  }
};
