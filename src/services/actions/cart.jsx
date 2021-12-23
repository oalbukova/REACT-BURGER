// utils
import { API_URL } from '../../utils/constants';

export const GET_ITEMS_REQUEST = 'GET_ITEMS_REQUEST';
export const GET_ITEMS_SUCCESS = 'GET_ITEMS_SUCCESS';
export const GET_ITEMS_FAILED = 'GET_ITEMS_FAILED';

export const ADD_SELECTED_BUN = 'ADD_SELECTED_BUN';
export const ADD_SELECTED_TOPPING = 'ADD_SELECTED_TOPPING';

// export const GET_INGREDIENT_DATA = 'GET_INGREDIENT_DATA';



// export const GET_ORDER_NUMBER_REQUEST = 'GET_ORDER_NUMBER_REQUEST';
// export const GET_ORDER_NUMBER_SUCCESS = 'GET_ORDER_NUMBER_SUCCESS';
// export const GET_ORDER_NUMBER_FAILED = 'GET_ORDER_NUMBER_FAILED';

// export const UPDATE_ORDER_NUMBER = 'UPDATE_ORDER_NUMBER_REQUEST';

// export const TAB_SWITCH = 'TAB_SWITCH';


export function getItems() {
  return function (dispatch) {
    dispatch({
      type: GET_ITEMS_REQUEST
    })
    fetch(`${API_URL}ingredients`)
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          dispatch({
            type: GET_ITEMS_FAILED
          });
        }
        return Promise.reject(res.status);
      })
      .then(data => dispatch({
        type: GET_ITEMS_SUCCESS,
        items: data.data
      }))
      .catch(err => {
        dispatch({
          type: GET_ITEMS_FAILED
        })
      })
  }
}

// export function addSelectedIngredient(ingredient) {
//   return function (dispatch) {
//     dispatch({
//       type: 'ADD_TODO',
//       selectedIngredients: ingredient
//     })
//   }
// }


