import { REGISTER_FAILED, REGISTER_REQUEST, REGISTER_SUCCESS } from "./types";
import axios from "axios";

export const register = (cb, user) => (dispatch) => {
  dispatch({ type: REGISTER_REQUEST });

  axios
    .post("http://localhost:5000/api/users/register", user)
    .then((response) => {
      dispatch({ type: REGISTER_SUCCESS });
      cb();
    })
    .catch((error) => {
      dispatch({ type: REGISTER_FAILED });
    });
};
