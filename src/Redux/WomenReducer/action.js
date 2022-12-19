import axios from "axios";
import * as types from "./actionTypes";

export const fetchWomenData =
  ({ page = 1, sort = "none", order = "none" }, params) =>
  (dispatch) => {
    dispatch({ type: types.GET_WOMENDATA_REQUEST });
    return axios
      .get(
        `https://jiomart-api-cb44.onrender.com/womens?_sort=${sort}&_order=${order}&_page=${page}&_limit=16`,
        params
      )
      .then((res) => {
        return dispatch({
          type: types.GET_WOMENDATA_SUCCESS,
          payload: res.data,
        });
      })
      .catch((e) => dispatch({ type: types.GET_WOMENDATA_FAILURE }));
  };
