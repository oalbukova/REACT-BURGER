import { Ingredients } from "./actionTypes";
import { openErrModal, setError } from "./modal";

// utils
import { API_URL } from "../../utils/constants";

export function getItems() {
  const { GET_ITEMS_REQUEST, GET_ITEMS_SUCCESS, GET_ITEMS_FAILED } =
    Ingredients;

  return function (dispatch) {
    dispatch({
      type: GET_ITEMS_REQUEST,
    });
    fetch(`${API_URL}ingredients`)
      .then((res /*: Response*/) => {
        if (res.ok) {
          return res.json();
        } else {
          dispatch({
            type: GET_ITEMS_FAILED,
          });
        }
        return Promise.reject(res.status);
      })
      .then((data) => {
        dispatch({
          type: GET_ITEMS_SUCCESS,
          items: data.data,
        });
      })
      .catch((err) => {
        dispatch({
          type: GET_ITEMS_FAILED,
        });
        dispatch(openErrModal());
        dispatch(setError(`getItems ${err}`));
      });
  };
}
