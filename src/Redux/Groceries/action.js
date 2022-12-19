import * as types from "./actionTypes";
import axios from "axios";

const getGroceriesProducts = ({page = 1, sort="none", order="none"}, params) => (dispatch) => {
    dispatch({type: types.GET_GROCERIES_REQUEST})
    return axios.get(`https://jiomart-api-cb44.onrender.com/groceries?_sort=${sort}&_order=${order}&_page=${page}&_limit=20`, params).then((r) => {
       return dispatch({
        type: types.GET_GROCERIES_SUCCESS, payload: r.data
       })
    })
    .catch((e) => {
        return dispatch({type: types.GET_GROCERIES_FAILURE, payload: e})
    })
}

export { getGroceriesProducts }