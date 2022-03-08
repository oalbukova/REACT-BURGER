// redux
import { History, Location } from "history";
import { ThunkAction } from "redux-thunk";
import { Action, ActionCreator, Dispatch } from "redux";

// services
import { store } from "../services/store";
import { TButtonActions } from "../services/actions/button";
import { TIngredientsActions } from "../services/actions/ingredients";
import { TModalActions } from "../services/actions/modal";
import { TOrderActions } from "../services/actions/order";
import { TPasswordActions } from "../services/actions/password";
import { TSelectedItemsActions } from "../services/actions/selected-items";
import { TTabActions } from "../services/actions/tab";
import { TUserActions } from "../services/actions/user";
import { TWSActions } from "../services/actions/wsActions";
import {
  WS_CONNECTION_CLOSED,
  WS_CONNECTION_ERROR,
  WS_CONNECTION_START,
  WS_CONNECTION_SUCCESS,
  WS_SEND_MESSAGE,
  WS_GET_ALL_FEEDS,
  WS_GET_USER_FEEDS
} from "../services/constants";
import {bun1, topping1, topping2} from "./test-utils";


type TApplicationActions =
  | TButtonActions
  | TIngredientsActions
  | TModalActions
  | TOrderActions
  | TPasswordActions
  | TSelectedItemsActions
  | TTabActions
  | TUserActions
  | TWSActions;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = Dispatch<TApplicationActions>;
export type AppThunk<ReturnType = void> = ActionCreator<ThunkAction<ReturnType, Action, RootState, TApplicationActions>>;

export type TLocationState = undefined | {
  background: Location; from?: { pathname: string };
};

export type TPathname = {
  pathname: string;
};

export type THistoryState = {
  history: History;
};

export type TIngredient = {
  _id: string; name: string; type: string; proteins: number; fat: number; carbohydrates: number; calories: number; price: number; image: string; image_mobile: string; image_large: string; __v: number; uuid: string;
};

export type TBurgerIngredient = {
  ingredient: TIngredient;
};

export type TConstructorIngredient = {
  item: TIngredient; index: number; key: string; id: string; type: "top" | "bottom" | undefined; text: string;
};

export type TPageIngredient = {
  ingredientArr: Array<TOrderIngredient>; ingredient: TOrderIngredient;
};

export type TOrder = {
  number?: number;
};

export type TModal = {
  handleClose: () => void;
  children: JSX.Element;
};

export type TDragItem = {
  index: number; id: string; type: string;
};

export type TForm = {
  name: string; email: string; password: string;
};

export type TIconTypes = "secondary" | "primary" | "error" | "success";

export type TResetPasswordForm = {
  code: string; password: string;
};

export type TCookieProps = {
  [name: string]: string | Date | number | boolean;
};

export type TData = {
  success?: boolean; accessToken?: string; refreshToken?: string; user?: {
    email?: string; name?: string;
  };
};

export type TToken = {
  success?: boolean; accessToken?: string; refreshToken?: string;
};

export type TUserData = {
  success?: boolean; user?: {
    email: string; name: string;
  };
};

export type TRequestMessage = {
  success?: boolean; message?: string;
};

type TIngredientsId = ReadonlyArray<string>;

export type TFeed = {
  ingredients: TIngredientsId; _id: string; status: string; number: number; name: string; createdAt: string; updatedAt: string;
};

export type TOrderFeed = {
  feed: TFeed;
};

export type TOrderFeeds = {
 orders: Array<TFeed>; total: number; totalToday: number;
};

export type TOrderIngredient = {
  img: string, name: string, price: number, type: string, id: string,
};

export type TStatus = "Создан" | "Готовится" | "Выполнен" | string;

export type TStatusStyle = {
  color: string;
};

export type TOrderForTest = {
  ingredients: Array<TIngredient>,
  _id: string,
  owner: {
    name: string,
    email: string,
    createdAt: string,
    updatedAt: string,
  },
  status: string,
  name: string,
  createdAt: string,
  updatedAt: string,
  number: number,
  price: number,
}

export type TwsActions = {
  wsInit: typeof WS_CONNECTION_START, wsSendMessage: typeof WS_SEND_MESSAGE,
  onOpen: typeof WS_CONNECTION_SUCCESS, onClose: typeof WS_CONNECTION_CLOSED, onError: typeof WS_CONNECTION_ERROR, onMessage: typeof WS_GET_ALL_FEEDS | typeof WS_GET_USER_FEEDS
};

export type TErr = {
  success?: boolean,
  message?: string;
  type?: string;
  code?: number;
}

