// constants
import { SET_BTN_DISABLED, SET_BTN_ACTIVE } from "../constants";

// actions
import { TButtonActions } from "../actions/button";


type TButtonState = {
  isBtnDisabled: boolean;
}

const initialButtonState: TButtonState = {
  isBtnDisabled: false,
};

export const buttonReducer = (state = initialButtonState, action: TButtonActions) => {
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
