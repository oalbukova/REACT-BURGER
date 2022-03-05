// constants
import { TAB_SWITCH } from "../constants";

// actions
import { TTabActions } from "../actions/tab";


type TTabState = {
  currentTab: string;
}

const initialTabState: TTabState = {
  currentTab: "bun",
};

export const tabReducer = (state = initialTabState, action: TTabActions) => {
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
