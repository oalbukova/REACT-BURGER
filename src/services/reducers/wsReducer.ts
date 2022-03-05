// constants
import {
  WS_CONNECTION_CLOSED,
  WS_CONNECTION_ERROR,
  WS_CONNECTION_SUCCESS,
  WS_GET_ALL_FEEDS, WS_GET_USER_FEEDS,
} from '../constants';

// utils
import { TErr, TOrderFeeds } from "../../utils/type";

// actions
import { TWSActions } from "../actions/wsActions";


export type TWSState = {
  wsConnected: boolean;
  feeds: TOrderFeeds;
  userFeeds: TOrderFeeds;
  error?: TErr | null;
}

export const initialState: TWSState = {
  wsConnected: false,
  feeds: {
    orders: [],
    total: 0,
    totalToday: 0
  },
  userFeeds: {
    orders: [],
    total: 0,
    totalToday: 0
  },
  error: null,
};

export const wsReducer = (state = initialState, action: TWSActions) => {
  switch (action.type) {

    case WS_CONNECTION_SUCCESS:
      return {
        ...state,
        error: null,
        wsConnected: true
      };

    case WS_CONNECTION_ERROR:
      return {
        ...state,
        error: action.payload,
        wsConnected: false
      };

    case WS_CONNECTION_CLOSED:
      return {
        ...state,
        error: null,
        wsConnected: false
      };

    case WS_GET_ALL_FEEDS:
      return {
        ...state,
        error: null,
        feeds: action.payload,
      };
    case WS_GET_USER_FEEDS:
      return {
        ...state,
        error: null,
        userFeeds: action.payload,
      };
    default:
      return state;
  }
};
