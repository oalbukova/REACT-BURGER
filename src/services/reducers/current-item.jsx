import {
  GET_CURRENT_INGREDIENT,
  DELETE_CURRENT_INGREDIENT,
} from "../actions/current-item";

const initialCurrentItemState = {
  currentIngredient: {},
};

export const currentItemReducer = (state = initialCurrentItemState, action) => {
  switch (action.type) {
    case GET_CURRENT_INGREDIENT: {
      return {
        ...state,
        currentIngredient: action.ingredient,
      };
    }

    case DELETE_CURRENT_INGREDIENT: {
      return { ...state, currentIngredient: {} };
    }
    default: {
      return state;
    }
  }
};
