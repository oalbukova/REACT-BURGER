import {
Order
} from "../actions/actionTypes";

const {
  GET_ORDER_REQUEST,
  GET_ORDER_SUCCESS,
  GET_ORDER_FAILED,
  DELETE_CURRENT_ORDER,
} = Order;


const initialOrderState = {
  order: {},
  orderRequest: false,
  orderFailed: false,
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
