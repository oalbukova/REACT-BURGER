// reducer
import {ingredientsReducer} from './ingredients';

// constants
import {GET_ITEMS_FAILED, GET_ITEMS_REQUEST, GET_ITEMS_SUCCESS} from "../../constants";

// utils
import  {topping1} from "../../../utils/test-utils";


const initialIngredientsState = {
  items: [], itemsRequest: false, itemsFailed: false
};

describe('ingredients reducer', () => {
  it('should return the initial state', () => {
    expect(ingredientsReducer(undefined, {})).toEqual(initialIngredientsState)
  })
  it('should handle GET_ITEMS_REQUEST', () => {
    expect(ingredientsReducer(initialIngredientsState, {
      type: GET_ITEMS_REQUEST,
    })).toEqual({
      ...initialIngredientsState, itemsRequest: true
    })
  })

  it('should handle GET_ITEMS_SUCCESS', () => {
    expect(ingredientsReducer(initialIngredientsState, {
      type: GET_ITEMS_SUCCESS, items: [topping1]
    })).toEqual({
      ...initialIngredientsState, items: [topping1],
    })
  })

  it('should handle GET_ITEMS_FAILED', () => {
    expect(ingredientsReducer(initialIngredientsState, {
      type: GET_ITEMS_FAILED,
    })).toEqual({
      ...initialIngredientsState, itemsFailed: true
    })
  })
})
