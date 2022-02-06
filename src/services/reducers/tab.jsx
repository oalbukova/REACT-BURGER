import { TAB_SWITCH } from "../actions/actionTypes";

const initialTabState = {
  currentTab: "bun",
};

export const tabReducer = (state = initialTabState, action) => {
  switch (action.type) {
    case TAB_SWITCH: {
      return {
        ...state,
        currentTab: action.tab,
      };
    }
    default: {
      return state;
    }
  }
};
