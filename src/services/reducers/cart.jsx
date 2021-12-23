import {
  GET_ITEMS_FAILED,
  GET_ITEMS_REQUEST,
  GET_ITEMS_SUCCESS,

  // GET_SELECTED_BUNS_REQUEST,
  // GET_SELECTED_BUNS_SUCCESS,
  // GET_SELECTED_BUNS_FAILED,

  // GET_SELECTED_TOPPINGS_REQUEST,
  // GET_SELECTED_TOPPINGS_SUCCESS,
  // GET_SELECTED_TOPPINGS_FAILED,
  ADD_SELECTED_BUN,
  ADD_SELECTED_TOPPING,

  // DELETE_INGREDIENT_DATA,
  // GET_ORDER_NUMBER_REQUEST,
  // GET_ORDER_NUMBER_SUCCESS,
  // GET_ORDER_NUMBER_FAILED,
  // UPDATE_ORDER_NUMBER,
  // TAB_SWITCH,
} from '../actions/cart';
import { v4 as uuidv4 } from 'uuid';

const initialState = {
  items: [],
  itemsRequest: false,
  itemsFailed: false,

  selectedBun: [],
  // selectedBuns: [],
  // selectedBunsRequest: false,
  // selectedBunsFailed: false,

  selectedToppings: [],
  // selectedToppingsRequest: false,
  // selectedToppingsFailed: false,

  // currentIngredient: {},

  // orderNumber: [],
  // orderNumberRequest: false,
  // orderNumberFailed: false,

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
        selectedBun: [...state.items.filter(item => item._id === action.ingredient._id)].map(item => {
          item.key = uuidv4();
          return item
        })
      };
    }

    case ADD_SELECTED_TOPPING: {
      return {
        ...state,
        selectedToppings: [...state.selectedToppings, ...state.items.filter(item => item._id === action.ingredient._id)].map(item => {
          item.key = uuidv4();
          return item
        })
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