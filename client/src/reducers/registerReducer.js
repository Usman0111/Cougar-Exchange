import {
  REGISTER_FAILED,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
} from "../actions/types";

let initialState = { loading: false, registered: false };

if (localStorage.getItem("registered")) {
  initialState = { loading: false, registered: true };
}

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_REQUEST:
      return { ...state, loading: true };
    case REGISTER_SUCCESS:
      localStorage.setItem("registered", true);
      return { ...state, loading: false, registered: true };
    case REGISTER_FAILED:
      return { ...state, loading: false, loginFailed: true };
    default:
      return state;
  }
};
