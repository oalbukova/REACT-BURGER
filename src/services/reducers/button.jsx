import {  SET_BTN_DISABLED, SET_BTN_ACTIVE } from "../constants";


const initialButtonState = {
  isBtnDisabled: false,
};

export const buttonReducer = (state = initialButtonState, action) => {
  switch (action.type) {
    case SET_BTN_DISABLED: {
      return {
        ...state,
        isBtnDisabled: true,
      };
    }
    case SET_BTN_ACTIVE: {
      return {
        ...state,
        isBtnDisabled: false,
      };
    }
    default: {
      return state;
    }
  }
};
