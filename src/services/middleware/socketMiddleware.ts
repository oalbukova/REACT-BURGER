import type { Middleware, MiddlewareAPI } from 'redux';

import type { AppThunk, RootState, AppDispatch } from '../../utils/type';
import {TwsActions} from "../../utils/type";


export const socketMiddleware = (wsUrl: string, wsActions: TwsActions): Middleware => {
  return ((store: MiddlewareAPI<AppDispatch, RootState>) => {
    let socket: WebSocket | null = null;

    return next => (action) => {
      const { dispatch, getState } = store;
      const { type, payload } = action;
      const { wsInit, /*wsSendMessage,*/ onOpen, onClose, onError, onMessage } = wsActions;

      if (type === wsInit) {
        // объект класса WebSocket
        socket = new WebSocket(wsUrl);
      }
      if (socket) {
        // функция, которая вызывается при открытии сокета
        socket.onopen = event => {
          console.log("open")
          dispatch({ type: onOpen, payload: event });
        };

        // функция, которая вызывается при ошибке соединения
        socket.onerror = event => {
          dispatch({ type: onError, payload: event });
        };

        // функция, которая вызывается при получения события от сервера
        socket.onmessage = event => {
          const { data } = event;
          const parsedData = JSON.parse(data);
          const { success, ...restParsedData } = parsedData;
          dispatch({ type: onMessage, payload: restParsedData });
        };
        // функция, которая вызывается при закрытии соединения
        socket.onclose = event => {
          console.log("close")
          dispatch({ type: onClose, payload: event });
        };

        // if (type === wsSendMessage) {
        //   // функция для отправки сообщения на сервер
        //   const message = { ...payload, token: user.token };
        //   socket.send(JSON.stringify(message));
        // }
      }

      next(action);
    };
  }) as Middleware;
};
