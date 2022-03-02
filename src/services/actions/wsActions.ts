import {
  WS_CONNECTION_START,
  WS_CONNECTION_SUCCESS,
  WS_CONNECTION_ERROR,
  WS_CONNECTION_CLOSED,
  WS_GET_ALL_FEEDS, // WS_GET_USER_FEEDS,
  // WS_SEND_FEED,
  // WS_USER_NAME_UPDATE
} from '../constants';
import {TOrderFeeds} from "../../utils/type";

export interface IConnectionStartAction {
  readonly type: typeof WS_CONNECTION_START;
}

export interface IConnectionSuccessAction {
  readonly type: typeof WS_CONNECTION_SUCCESS;
}

export interface IConnectionErrorAction {
  readonly type: typeof WS_CONNECTION_ERROR;
  //readonly payload: string | undefined;
}

export interface IConnectionClosedAction {
  readonly type: typeof WS_CONNECTION_CLOSED;
}

export interface IGetAllFeedsAction {
  readonly type: typeof WS_GET_ALL_FEEDS;
  readonly payload: TOrderFeeds;
}

export type TWSActions =  IConnectionStartAction |
  IConnectionSuccessAction | IConnectionErrorAction | IConnectionClosedAction | IGetAllFeedsAction;

export const wsConnectionStart = (): IConnectionStartAction => {
  return {
    type: WS_CONNECTION_START
  };
};

export const wsConnectionSuccess = (): IConnectionSuccessAction => {
  return {
    type: WS_CONNECTION_SUCCESS
  };
};

export const wsConnectionError = (error: string | undefined): IConnectionErrorAction => {
  return {
    type: WS_CONNECTION_ERROR,
    // payload: error
  };
};

export const wsConnectionClosed = (): IConnectionClosedAction => {
  return {
    type: WS_CONNECTION_CLOSED
  };
};

export const wsGetALLFeeds = (feeds: TOrderFeeds): IGetAllFeedsAction => {
  return {
    type: WS_GET_ALL_FEEDS, payload: feeds
  };
};
//
// export const wsGetUserFeeds = feeds => {
//   return {
//     type: WS_GET_USER_FEEDS,
//     payload: feeds
//   };
// };
//
// export const wsSendFeed = feed => {
//   return {
//     type: WS_SEND_FEED,
//     payload: feed
//   };
// };
//
// export const wsUserNameUpdate = userName => {
//   return {
//     type: WS_USER_NAME_UPDATE,
//     payload: userName
//   };
// };
