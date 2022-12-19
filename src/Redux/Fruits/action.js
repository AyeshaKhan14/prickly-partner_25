import * as types from "./actionTypes";
import axios from "axios";

const getFruitsProducts = ({page = 1, sort="none", order="none"}, params) => (dispatch) => {
    dispatch({type: types.GET_FRUITS_REQUEST})
    return axios.get(`https://jiomart-api-cb44.onrender.com/fruits?_sort=${sort}&_order=${order}&_page=${page}&_limit=10`, params).then((r) => {
       return dispatch({
        type: types.GET_FRUITS_SUCCESS, payload: r.data
       })
    })
    .catch((e) => {
        return dispatch({type: types.GET_FRUITS_FAILURE, payload: e})
    })
}

export { getFruitsProducts }