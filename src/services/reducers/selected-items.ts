// constants
import {
  ADD_SELECTED_BUN,
  ADD_SELECTED_TOPPING,
  DELETE_SELECTED_BUNS,
  DELETE_SELECTED_TOPPING,
  DELETE_SELECTED_TOPPINGS,
  SORT_TOPPING,
} from "../constants";

// actions
import { TSelectedItemsActions } from "../actions/selected-items";

// utils
import { TIngredient } from "../../utils/type";


type TSelectedItemsState = {
  selectedBun: ReadonlyArray<TIngredient>,
  selectedToppings: ReadonlyArray<TIngredient>,
}

const initialSelectedItemsState: TSelectedItemsState = {
  selectedBun: [],
  selectedToppings: [],
};

export const selectedItemsReducer = (
  state = initialSelectedItemsState,
  action: TSelectedItemsActions
) => {
  switch (action.type) {
    case ADD_SELECTED_BUN: {
      return {
        ...state,
        selectedBun: [{ ...action.item }],
      };
    }
    case ADD_SELECTED_TOPPING: {
      return {
        ...state,
        selectedToppings: [...state.selectedToppings, { ...action.item }],
      };
    }

    case DELETE_SELECTED_BUNS: {
      return {
        ...state,
        selectedBun: [],
      };
    }
    case DELETE_SELECTED_TOPPINGS: {
      return {
        ...state,
        selectedToppings: [],
      };
    }

    case DELETE_SELECTED_TOPPING: {
      return {
        ...state,
        selectedToppings: [...state.selectedToppings].filter(
          (item) => item.uuid !== action.item.uuid
        ),
      };
    }

    case SORT_TOPPING: {
      const dragCard = state.selectedToppings[action.dragIndex];
      const NewToppingsState = [...state.selectedToppings];
      NewToppingsState.splice(action.dragIndex, 1);
      NewToppingsState.splice(action.hoverIndex, 0, dragCard);
      return {
        ...state,
        selectedToppings: NewToppingsState,
      };
    }
    default: {
      return state;
    }
  }
};
