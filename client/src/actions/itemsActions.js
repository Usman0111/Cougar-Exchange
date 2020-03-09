import { GET_ALL_ITEMS, ADD_ITEM, MODIFY_ITEM, DELETE_ITEM } from "./types";

export const getAllItems = () => dispatch => {
  dispatch({ type: GET_ALL_ITEMS });
};

export const addItem = item => dispatch => {
  dispatch({ type: ADD_ITEM, payload: item });
};
export const modifyItem = item => dispatch => {
  dispatch({ type: MODIFY_ITEM, payload: item });
};

export const deleteItem = id => dispatch => {
  dispatch({ type: DELETE_ITEM, payload: id });
};
