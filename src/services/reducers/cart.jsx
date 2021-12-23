import {
  GET_ITEMS_FAILED,
  GET_ITEMS_REQUEST,
  GET_ITEMS_SUCCESS,
  ADD_SELECTED_BUN,
  ADD_SELECTED_TOPPING,
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
} from "../actions/cart";

const initialState = {
  items: [],
  itemsRequest: false,
  itemsFailed: false,

  selectedBun: [],
  selectedToppings: [],

  currentIngredient: {},

  order: {},
  orderRequest: false,
  orderFailed: false,

  isIngredientModalVisible: false,
  isOrderModalVisible: false,
  isErrModalVisible: false,
  error: "",

  isBtnDisabled: false,

  currentTab: "bun",
};

export const cartReducer = (state = initialState, action) => {
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

    case ADD_SELECTED_BUN: {
      return {
        ...state,
        selectedBun: [
          ...state.items.filter((item) => item._id === action.ingredient._id),
        ],
      };
    }

    case ADD_SELECTED_TOPPING: {
      return {
        ...state,
        selectedToppings: [
          ...state.selectedToppings,
          ...state.items.filter((item) => item._id === action.ingredient._id),
        ],
      };
    }

    case GET_CURRENT_INGREDIENT: {
      return {
        ...state,
        currentIngredient: action.ingredient,
      };
    }

    case DELETE_CURRENT_INGREDIENT: {
      return {
        ...state,
        currentIngredient: {},
      };
    }

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
      return {
        ...state,
        order: {},
      };
    }

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
    case TAB_SWITCH: {
      return {
        ...state,
        currentTab: action.tab,
      };
    }
    // case INCREASE_ITEM: {
    //   return {
    //     ...state,
    //     items: [...state.items].map(item =>
    //       item.id === action.id ? { ...item, qty: ++item.qty } : item
    //     )
    //   };
    // }
    // case DECREASE_ITEM: {
    //   return {
    //     ...state,
    //     items: [...state.items].map(item =>
    //       item.id === action.id ? { ...item, qty: --item.qty } : item
    //     )
    //   };
    // }
    // case DELETE_ITEM: {
    //   return { ...state, items: [...state.items].filter(item => item.id !== action.id) };
    // }
    // case APPLY_PROMO_FAILED: {
    //   return {
    //     ...state,
    //     promoRequest: false,
    //     promoFailed: true,
    //     promoDiscount: null,
    //     promoCode: ''
    //   };
    // }
    // case APPLY_PROMO_REQUEST: {
    //   return {
    //     ...state,
    //     promoFailed: false,
    //     promoRequest: true
    //   };
    // }
    default: {
      return state;
    }
  }
};
