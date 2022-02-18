import {
  addUserSuccess,
  fetchUserFailure,
  fetchUserRequest,
  fetchUserSuccess,
} from "../app/actions";
import axios from "axios";
import { deleteData, getData, patchData, postData } from "../../services/baseApiService";
import { USER_BASE_URL } from "../../apiConfig/user";

export const fetchUser = () => {
  return (dispatch) => {
    dispatch(fetchUserRequest());

    const response = getData(USER_BASE_URL).then((res) =>
      dispatch(fetchUserSuccess(res))
    ).catch((error)=>{throw error});
    console.log(response);
  };
};

export const addUser = (data) => {
  return (dispatch) => {
    const response = postData(USER_BASE_URL,data).then((res) =>
    {
    
    dispatch(fetchUser())
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
