import { AppActionsTypes } from "./actions-types";

const INITIAL_STATE = {
  loading: false,
  users: {},
  list:[],
  error: "",
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AppActionsTypes.FETCH_USER_LOADING:
      return {
        ...state,
        loading: true,
      };
    case AppActionsTypes.FETCH_USER_SUCCESS:
      return {
        loading: false,
        users: action.payload,
        list:[],
        error: ""
      };
    case AppActionsTypes.FETCH_USER_FAILURE:
      return {
        loading: false,
        users: {},
        error: action.payload,
      };
      case AppActionsTypes.ADD_USER_SUCCESS:
        return {
          loading: false,
          users: action.payload,
          error: "",
        };
        case AppActionsTypes.VIEW_USER:
        return {
          ...state,
        list: action.payload,
        };
      default:
      return state;
  }
};
export default reducer;
