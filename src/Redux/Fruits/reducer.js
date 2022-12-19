import * as types from "./actionTypes";

const initalState = {
    fruits: [],
    isLoading: false,
    isError: false,
};

const reducer = (state = initalState, action) => {
   const{type, payload} = action;
   switch(type) {
    case types.GET_FRUITS_REQUEST:
        return { ...state, isLoading: true, isError: false }
    case types.GET_FRUITS_SUCCESS:
        return { ...state, isLoading: false, fruits: payload, isError: false }
    case types.GET_FRUITS_FAILURE:
        return { ...state, isLoading: false, fruits: [], isError: true }
    default:
        return state
   }
};

export {reducer}