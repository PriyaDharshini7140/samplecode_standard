import { AppActionsTypes } from "./actions-types";

export const fetchUserRequest = () => {
    return {
      type: AppActionsTypes.FETCH_USER_LOADING
    }
  }
  
  export const fetchUserSuccess = posts => {
    return {
      type: AppActionsTypes.FETCH_USER_SUCCESS,
      payload: posts
    }
  }
  
  export const fetchUserFailure = error => {
    return {
      type: AppActionsTypes.FETCH_USER_FAILURE,
      payload: error
    }
  }

  export const addUserSuccess = posts => {
    return {
      type: AppActionsTypes.ADD_USER_SUCCESS,
      payload: posts
    }
  }
  export const viewUserSuccess = posts => {
    return {
      type: AppActionsTypes.VIEW_USER,
      payload: posts
    }
  }