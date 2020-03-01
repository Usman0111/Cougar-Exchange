import { GET_ALL_ITEMS } from "./types";

export const getAllItems = () => dispatch => {
  dispatch({ type: GET_ALL_ITEMS });
};
