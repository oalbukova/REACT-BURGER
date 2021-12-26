import {
  GET_ITEMS_FAILED,
  GET_ITEMS_REQUEST,
  GET_ITEMS_SUCCESS,
  ADD_SELECTED_BUN,
  ADD_SELECTED_TOPPING,
  DELETE_SELECTED_TOPPING,
  GET_CURRENT_INGREDIENT,
  DELETE_CURRENT_INGREDIENT,
  GET_ORDER_REQUEST,
  GET_ORDER_SUCCESS,
  GET_ORDER_FAILED,
  DELETE_CURRENT_ORDER,
  OPEN_INGREDIENT_MODAL,
  CLOSE_INGREDIENT_MODAL,
  OPEN_ORDER_MODAL,
  CLOSE_ORDER_MODAL,
  OPEN_ERR_MODAL,
  CLOSE_ERR_MODAL,
  SET_ERR,
  SET_BTN_DISABLED,
  SET_BTN_ACTIVE,
  TAB_SWITCH,
  SORT_TOPPING,
} from "../actions/cart";

// utils
import { v4 as uuidv4 } from "uuid";

const initialIngredientsState = {
  items: [],
  itemsRequest: false,
  itemsFailed: false,
};

const initialSelectedItemsState = {
  selectedBun: [],
  selectedToppings: [],
};

const initialCurrentItemState = {
  currentIngredient: {},
};

const initialOrderState = {
  order: {},
  orderRequest: false,
  orderFailed: false,
};

const initialModalState = {
  isIngredientModalVisible: false,
  isOrderModalVisible: false,
  isErrModalVisible: false,
  error: "",
};

const initialButtonState = {
  isBtnDisabled: false,
};

const initialTabState = {
  currentTab: "bun",
};

export const ingredientsReducer = (state = initialIngredientsState, action) => {
  switch (action.type) {
    case GET_ITEMS_REQUEST: {
      return {
        ...state,
        itemsRequest: true,
      };
    }
    case GET_ITEMS_SUCCESS: {
      return {
        ...state,
        itemsFailed: false,
        items: action.items,
        itemsRequest: false,
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

export const selectedItemsReducer = (
  state = initialSelectedItemsState,
  action
) => {
  switch (action.type) {
    case ADD_SELECTED_BUN: {
      return {
        ...state,
        selectedBun: [{ ...action.item, uuidId: uuidv4() }],
      };
    }

    case ADD_SELECTED_TOPPING: {
      return {
        ...state,
        selectedToppings: [
          ...state.selectedToppings,
          { ...action.item, uuidId: uuidv4() },
        ],
      };
    }

    case DELETE_SELECTED_TOPPING: {
      return {
        ...state,
        selectedToppings: [...state.selectedToppings].filter(
          (item) => item.uuidId !== action.item.uuidId
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

export const orderReducer = (state = initialOrderState, action) => {
  switch (action.type) {
    case GET_ORDER_REQUEST: {
      return {
        ...state,
        orderRequest: true,
      };
    }
    case GET_ORDER_SUCCESS: {
      return {
        ...state,
        orderFailed: false,
        order: action.order,
        orderRequest: false,
      };
    }
    case GET_ORDER_FAILED: {
      return { ...state, orderFailed: true, orderRequest: false };
    }

    case DELETE_CURRENT_ORDER: {
      return { ...state, order: {} };
    }
    default: {
      return state;
    }
  }
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
