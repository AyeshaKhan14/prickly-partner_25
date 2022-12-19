import * as types from "./actionTypes"
import axios from "axios";

const getauth=()=>(dispatch)=>{
 dispatch({type:types.USER_LOGIN_REQ})
 return axios.get("https://jiomart-api-cb44.onrender.com/username").then((r)=>dispatch({type:types.USER_LOGIN_SUCCESS,payload:r.data})).catch
 ((r)=>{ return dispatch({type:types.USER_LOGIN_FAILURE})})
}

const postauth=(data)=>(dispatch)=>{
    dispatch({type:types.USER_LOGIN_POST_REQ})
    return axios.post("https://jiomart-api-cb44.onrender.com/username",data).then((r)=>dispatch({type:types.USER_LOGIN_POST_SUCCESS,payload:r.data})).catch
    ((r)=>{ return dispatch({type:types.USER_LOGIN_POST_FAILURE})})
   }

const logout = (payload) => (dispatch) => {
    dispatch({ type: types.USER_LOGOUT_SUCCESS, payload });
  };
export {getauth,postauth,logout};