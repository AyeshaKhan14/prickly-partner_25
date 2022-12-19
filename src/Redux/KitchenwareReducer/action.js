import axios from "axios";
import * as types from "./actionTypes";

export const fetchKitchenData =
  ({ page = 1, sort = "none", order = "none" }, params) =>
  (dispatch) => {
    dispatch({ type: types.GET_KITCHENWAREDATA_REQUEST });
    return axios
      .get(
        `https://jiomart-api-cb44.onrender.com/kitchenwares?_sort=${sort}&_order=${order}&_page=${page}&_limit=16`,
        params
      )
      .then((res) => {
        return dispatch({
          type: types.GET_KITCHENWAREDATA_SUCCESS,
          payload: res.data,
        });
      })
      .catch((e) => dispatch({ type: types.GET_KITCHENWAREDATA_FAILURE }));
  };
