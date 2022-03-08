// reducer
import {wsReducer} from './wsReducer';

// constants
import {
  WS_CONNECTION_CLOSED, WS_CONNECTION_ERROR, WS_CONNECTION_SUCCESS, WS_GET_ALL_FEEDS, WS_GET_USER_FEEDS,
} from "../../constants";

// utils
import {feeds} from "../../../utils/test-utils";


const initialState = {
  wsConnected: false, feeds: {
    orders: [], total: 0, totalToday: 0
  }, userFeeds: {
    orders: [], total: 0, totalToday: 0
  }, error: null,
};

describe('wsReducer reducer', () => {
  it('should return the initial state', () => {
    expect(wsReducer(undefined, {})).toEqual(initialState)
  })
  it('should handle WS_CONNECTION_SUCCESS', () => {
    expect(wsReducer(initialState, {
      type: WS_CONNECTION_SUCCESS,
    })).toEqual({
      ...initialState, error: null, wsConnected: true
    })
  })

  it('should handle WS_CONNECTION_CLOSED', () => {
    expect(wsReducer(initialState, {
      type: WS_CONNECTION_CLOSED, wsConnected: true
    })).toEqual({
      ...initialState, error: null, wsConnected: false
    })
  })

  it('should handle WS_CONNECTION_ERROR', () => {
    expect(wsReducer(initialState, {
      type: WS_CONNECTION_ERROR, payload: {success: false, message: "err"}
    })).toEqual({
      ...initialState, wsConnected: false, error: {success: false, message: "err"}
    })
  })

  it('should handle WS_GET_USER_FEEDS', () => {
    expect(wsReducer(initialState, {
      type: WS_GET_USER_FEEDS, wsConnected: false, error: null, payload: feeds,
    })).toEqual({
      ...initialState, wsConnected: false, error: null, userFeeds: feeds,
    })
  })

  it('should handle WS_GET_ALL_FEEDS', () => {
    expect(wsReducer(initialState, {
      type: WS_GET_ALL_FEEDS, payload: feeds
    })).toEqual({
      ...initialState, wsConnected: false, error: null, feeds: feeds
    })
  })
})
