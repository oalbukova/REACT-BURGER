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

  DELETE_CURRENT_ORDER

  // UPDATE_ORDER_NUMBER,
  // TAB_SWITCH,
} from '../actions/cart';


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

  // order: {},

  // currentTab: 'bun'
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ITEMS_REQUEST: {
      return {
        ...state,
        itemsRequest: true
      };
    }
    case GET_ITEMS_SUCCESS: {
      return { ...state, itemsFailed: false, items: action.items, itemsRequest: false };
    }
    case GET_ITEMS_FAILED: {
      return { ...state, itemsFailed: true, itemsRequest: false };
    }

    case ADD_SELECTED_BUN: {
      return {
        ...state,
        selectedBun: [...state.items.filter(item => item._id === action.ingredient._id)]
      };
    }

    case ADD_SELECTED_TOPPING: {
      return {
        ...state,
        selectedToppings: [...state.selectedToppings, ...state.items.filter(item => item._id === action.ingredient._id)]
      };
    }

    case GET_CURRENT_INGREDIENT: {
      return {
        ...state,
        currentIngredient: action.ingredient
      };
    }

    case DELETE_CURRENT_INGREDIENT: {
      return {
        ...state,
        currentIngredient: {}
      };
    }

    case GET_ORDER_REQUEST: {
      return {
        ...state,
        orderRequest: true
      };
    }
    case GET_ORDER_SUCCESS: {
      return { ...state, orderFailed: false, order: action.order, orderRequest: false };
    }
    case GET_ORDER_FAILED: {
      return { ...state, orderFailed: true, orderRequest: false };
    }

    case DELETE_CURRENT_ORDER: {
      return {
        ...state,
        order: {}
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
    // case TAB_SWITCH: {
    //   return {
    //     ...state,
    //     currentTab: state.currentTab === 'items' ? 'postponed' : 'items'
    //   };
    // }
    default: {
      return state;
    }
  }
};