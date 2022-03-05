// redux
import { PayloadAction } from "@reduxjs/toolkit";

// utils
import { TErr, TOrderFeeds } from "../../utils/type";

// constants
import {
  WS_CONNECTION_START,
  WS_CONNECTION_SUCCESS,
  WS_CONNECTION_ERROR,
  WS_CONNECTION_CLOSED,
  WS_SEND_MESSAGE,
  WS_GET_ALL_FEEDS,
  WS_GET_USER_FEEDS,
} from '../constants';


export const wsActions = {
  wsInit: WS_CONNECTION_START,
  wsSendMessage: WS_SEND_MESSAGE,
  onOpen: WS_CONNECTION_SUCCESS,
  onClose: WS_CONNECTION_CLOSED,
  onError: WS_CONNECTION_ERROR,
  onMessage: WS_GET_ALL_FEEDS
};

export const wsUserActions = {
  wsInit: WS_CONNECTION_START,
  wsSendMessage: WS_SEND_MESSAGE,
  onOpen: WS_CONNECTION_SUCCESS,
  onClose: WS_CONNECTION_CLOSED,
  onError: WS_CONNECTION_ERROR,
  onMessage: WS_GET_USER_FEEDS
};

export interface IConnectionStartAction {
  readonly type: typeof WS_CONNECTION_START;
}

export interface IConnectionSuccessAction {
  readonly type: typeof WS_CONNECTION_SUCCESS;
}

export interface IConnectionErrorAction {
  readonly type: typeof WS_CONNECTION_ERROR;
  readonly payload: TErr | null;
}

export interface IConnectionClosedAction {
  readonly type: typeof WS_CONNECTION_CLOSED;
}

export interface ISendMessagedAction {
  readonly type: typeof WS_SEND_MESSAGE;
  readonly payload: PayloadAction;
}

export interface IGetAllFeedsAction {
  readonly type: typeof WS_GET_ALL_FEEDS;
  readonly payload: TOrderFeeds;
}

export interface IGetUserFeedsAction {
  readonly type: typeof WS_GET_USER_FEEDS;
  readonly payload: TOrderFeeds;
}

export type TWSActions =
  IConnectionSuccessAction | IConnectionErrorAction | IConnectionClosedAction | ISendMessagedAction | IGetAllFeedsAction | IGetUserFeedsAction;

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

export const wsConnectionError = (error: PayloadAction): IConnectionErrorAction => {
  return {
    type: WS_CONNECTION_ERROR,
    payload: error
  };
};


export const wsConnectionClosed = (): IConnectionClosedAction => {
  return {
    type: WS_CONNECTION_CLOSED
  };
};

export const wsSendMessage = (message: { payload: void, type: string }): ISendMessagedAction => {
  return {
    type: WS_SEND_MESSAGE,
    payload: message
  };
};

export const wsGetALLFeeds = (feeds: TOrderFeeds): IGetAllFeedsAction => {
  return {
    type: WS_GET_ALL_FEEDS, payload: feeds
  };
};

export const wsGetUserFeeds = (userFeeds: TOrderFeeds): IGetUserFeedsAction => {
  return {
    type: WS_GET_USER_FEEDS,
    payload: userFeeds
  };
};
