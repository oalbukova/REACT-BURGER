import {GET_ITEMS_FAILED, GET_ITEMS_REQUEST, GET_ITEMS_SUCCESS,} from "../constants";
import {openErrModal, setError} from "./modal";

// utils
import {API_URL} from "../../utils/constants";
import {TIngredient} from "../../utils/type";


export interface IGetIngredientsAction {
  readonly type: typeof GET_ITEMS_REQUEST;
}

export interface IGetIngredientsFailedAction {
  readonly type: typeof GET_ITEMS_FAILED;
}

export interface IGetIngredientsSuccessAction {
  readonly type: typeof GET_ITEMS_SUCCESS;
  readonly items: ReadonlyArray<TIngredient>;
}


export type TIngredientsActions =
  IGetIngredientsAction |
  IGetIngredientsFailedAction |
  IGetIngredientsSuccessAction;

export const getIngredientsAction = (): IGetIngredientsAction => ({
  type: GET_ITEMS_REQUEST
});

export const getIngredientsFailedAction = (): IGetIngredientsFailedAction => ({
  type: GET_ITEMS_FAILED
});

export const getIngredientsSuccessAction = (items: ReadonlyArray<TIngredient>): IGetIngredientsSuccessAction => ({
  type: GET_ITEMS_SUCCESS,
  items
});

export function getItems() {
  return function (dispatch: any) {
    dispatch(getIngredientsAction());
    fetch(`${API_URL}ingredients
    `)
      .then((res /*: Response*/) => {
        if (res.ok) {
          return res.json();
        } else {
          dispatch(getIngredientsFailedAction());
        }
        return Promise.reject(res.status);
      })
      .then((data) => {
        dispatch(getIngredientsSuccessAction(data.data));
      })
      .catch((err) => {
        dispatch(getIngredientsFailedAction());
        dispatch(openErrModal());
        dispatch(setError(`getItems ${err}`));
      });
  };
}
