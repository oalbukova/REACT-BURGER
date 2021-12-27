import {
  OPEN_INGREDIENT_MODAL,
  CLOSE_INGREDIENT_MODAL,
  OPEN_ORDER_MODAL,
  CLOSE_ORDER_MODAL,
  OPEN_ERR_MODAL,
  CLOSE_ERR_MODAL,
  SET_ERR,
} from "../actions/modal";

const initialModalState = {
  isIngredientModalVisible: false,
  isOrderModalVisible: false,
  isErrModalVisible: false,
  error: "",
};

export const modalReducer = (state = initialModalState, action) => {
  switch (action.type) {
    case OPEN_INGREDIENT_MODAL: {
      return {
        ...state,
        isIngredientModalVisible: true,
      };
    }
    case CLOSE_INGREDIENT_MODAL: {
      return {
        ...state,
        isIngredientModalVisible: false,
      };
    }

    case OPEN_ORDER_MODAL: {
      return {
        ...state,
        isOrderModalVisible: true,
      };
    }
    case CLOSE_ORDER_MODAL: {
      return {
        ...state,
        isOrderModalVisible: false,
      };
    }

    case OPEN_ERR_MODAL: {
      return {
        ...state,
        isErrModalVisible: true,
      };
    }
    case CLOSE_ERR_MODAL: {
      return {
        ...state,
        isErrModalVisible: false,
      };
    }

    case SET_ERR: {
      return {
        ...state,
        error: action.text,
      };
    }
    default: {
      return state;
    }
  }
};
