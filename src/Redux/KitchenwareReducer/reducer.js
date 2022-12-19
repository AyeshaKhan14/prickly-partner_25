import * as types from "./actionTypes";

const initialState = {
  kitchenware: [],
  isLoading: false,
  isError: false,
};

export const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.GET_KITCHENWAREDATA_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case types.GET_KITCHENWAREDATA_SUCCESS:
      return {
        ...state,
        isLoading: false,
        kitchenware: payload,
      };
    case types.GET_KITCHENWAREDATA_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    default:
      return state;
  }
};
