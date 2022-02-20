import {CLOSE_ERR_MODAL, CLOSE_ORDER_MODAL, OPEN_ERR_MODAL, OPEN_ORDER_MODAL, SET_ERR} from "../constants";

const initialModalState = {
  isOrderModalVisible: false,
  isErrModalVisible: false,
  error: "",
};

export const modalReducer = (state = initialModalState, action) => {
  switch (action.type) {
    case OPEN_ORDER_MODAL: {
      return {
        ...state,
        isOrderModalVisible: true,
      };
    }
    case CLOSE_ORDER_MODAL: {
      return {
        ...state,
        isOrderModalVisible: false,
      };
    }

    case OPEN_ERR_MODAL: {
      return {
        ...state,
        isErrModalVisible: true,
      };
    }
    case CLOSE_ERR_MODAL: {
      return {
        ...state,
        isErrModalVisible: false,
      };
    }

    case SET_ERR: {
      return {
        ...state,
        error: action.text,
      };
    }
    default: {
      return state;
    }
  }
};
