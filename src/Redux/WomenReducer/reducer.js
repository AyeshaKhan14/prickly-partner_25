import * as types from "./actionTypes";

const initialState = {
  women: [],
  isLoading: false,
  isError: false,
};

export const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.GET_WOMENDATA_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case types.GET_WOMENDATA_SUCCESS:
      return {
        ...state,
        isLoading: false,
        women: payload,
      };
    case types.GET_WOMENDATA_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    default:
      return state;
  }
};
