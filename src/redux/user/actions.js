import {
  fetchUserRequest,
  fetchUserSuccess,
  viewUserSuccess,
} from "../app/actions";
import axios from "axios";
import { deleteData, getData, patchData, postData } from "../../services/baseApiService";
import { USER_BASE_URL } from "../../apiConfig/user";

export const loginUser = (data) => {
  
  return (dispatch) => {
   debugger
      dispatch(fetchUserSuccess(data))
  
  };
};

export const fetchUser = () => {
  return (dispatch) => {
    

    const response = getData(USER_BASE_URL).then((res) =>dispatch(viewUserSuccess(res))).catch((error)=>{throw error});
    console.log(response);
  };
};

export const addUser = (data) => {
  debugger
  return (dispatch) => {
 
    const response = postData(USER_BASE_URL,data).then((res) =>
    {
    
      debugger
      dispatch(fetchUserSuccess(res))
  }
  ).catch((error)=>{throw error});
  console.log(response);
}; 
};
export const deleteUser = (data) => {
  
  return (dispatch) => {
    const response = deleteData(USER_BASE_URL+data).then((res) =>
    {
    
    dispatch(fetchUser())
  }
  ).catch((error)=>{throw error});
  console.log(response);
}; 
};
export const editUser = (id,data) => {
  return (dispatch) => {
    const response = patchData(USER_BASE_URL+id,data).then((res) =>
    {
    
    dispatch(fetchUser())
  }
  ).catch((error)=>{throw error});
  console.log(response);
}; 
};
