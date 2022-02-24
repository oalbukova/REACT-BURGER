import {DELETE_CURRENT_ORDER, GET_ORDER_FAILED, GET_ORDER_REQUEST, GET_ORDER_SUCCESS,} from "../constants";
import {TOrderActions} from "../actions/order";
import {TOrder} from "../../utils/type";

type TOrderState = {
  orderRequest: boolean,
  orderFailed: boolean,
  order: TOrder,
}

const initialOrderState: TOrderState = {
  order: {},
  orderRequest: false,
  orderFailed: false,
};

export const orderReducer = (state = initialOrderState, action: TOrderActions) => {
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
      return {...state, orderFailed: true, orderRequest: false};
    }

    case DELETE_CURRENT_ORDER: {
      return {...state, order: {}};
    }
    default: {
      return state;
    }
  }
};
