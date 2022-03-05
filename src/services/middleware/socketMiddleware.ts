// redux
import type { Middleware, MiddlewareAPI } from 'redux';

// utils
import type { RootState, AppDispatch } from '../../utils/type';
import { TwsActions } from "../../utils/type";


export const socketMiddleware = (wsActions: TwsActions): Middleware => {
  return ((store: MiddlewareAPI<AppDispatch, RootState>) => {
    let socket: WebSocket | null = null;

    return next => (action) => {
      const { dispatch } = store;
      const { type, payload, wsUrl, token } = action;
      const { wsInit, wsSendMessage, onOpen, onClose, onError, onMessage } = wsActions;

      if (type === wsInit) {
        socket = token
          ? new WebSocket(`${wsUrl}?token=${token}`)
          : new WebSocket(`${wsUrl}`);
      }
      if (socket) {
        socket.onopen = event => {
          dispatch({ type: onOpen, payload: event });
        };

        socket.onerror = event => {
          dispatch({ type: onError, payload: event });
        };

        socket.onmessage = event => {
          const { data } = event;
          const parsedData = JSON.parse(data);
          const { success, ...restParsedData } = parsedData;
          dispatch({ type: onMessage, payload: restParsedData });
        };

        socket.onclose = event => {
          dispatch({ type: onClose, payload: event });
        };

        if (type === wsSendMessage) {
          const message = token ? { ...payload, token } : { ...payload };
          socket.send(JSON.stringify(message));
        }
      }

      next(action);
    };
  }) as Middleware;
};
