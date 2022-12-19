import * as types from "./actionTypes";

const initalState = {
    groceries: [],
    isLoading: false,
    isError: false,
};

const reducer = (state = initalState, action) => {
   const{type, payload} = action;
   switch(type) {
    case types.GET_GROCERIES_REQUEST:
        return { ...state, isLoading: true, isError: false }
    case types.GET_GROCERIES_SUCCESS:
        return { ...state, isLoading: false, groceries: payload, isError: false }
    case types.GET_GROCERIES_FAILURE:
        return { ...state, isLoading: false, groceries: [], isError: true }
    default:
        return state
   }
};

export {reducer}