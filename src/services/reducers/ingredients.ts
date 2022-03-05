// constants
import { GET_ITEMS_FAILED, GET_ITEMS_REQUEST, GET_ITEMS_SUCCESS } from "../constants";

// actions
import { TIngredientsActions } from "../actions/ingredients";

// utils
import { TIngredient } from "../../utils/type";


type TIngredientState = {
  items: ReadonlyArray<TIngredient>,
  itemsRequest: boolean,
  itemsFailed: boolean,
}

const initialIngredientsState: TIngredientState = {
  items: [], itemsRequest: false, itemsFailed: false
};

export const ingredientsReducer = (state = initialIngredientsState, action: TIngredientsActions) => {

  switch (action.type) {
    case GET_ITEMS_REQUEST: {
      return {
        ...state, itemsRequest: true
      };
    }
    case GET_ITEMS_SUCCESS: {
      return {
        ...state, itemsFailed: false, items: action.items, itemsRequest: false
      };
    }
    case GET_ITEMS_FAILED: {
      return { ...state, itemsFailed: true, itemsRequest: false };
    }

    default: {
      return state;
    }
  }
};
