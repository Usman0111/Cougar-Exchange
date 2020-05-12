import { GET_ALL_ITEMS, ADD_ITEM, MODIFY_ITEM, DELETE_ITEM } from "./types";
import axios from "axios";
import { authHeader, userId } from "./userInfo";

export const getAllItems = () => (dispatch) => {
  axios
    .get("http://localhost:5000/api/items", {
      headers: authHeader(),
    })
    .then((response) => {
      dispatch({ type: GET_ALL_ITEMS, payload: response.data, id: userId() });
    })
    .catch((error) => console.log(error));
};

export const addItem = (item) => (dispatch) => {
  axios
    .post("http://localhost:5000/api/items", item, {
      headers: authHeader(),
    })
    .then((response) => {
      dispatch({ type: ADD_ITEM, payload: item });
    })
    .catch((error) => console.log(error));
};
export const modifyItem = (item) => (dispatch) => {
  axios
    .put(`http://localhost:5000/api/items/${item.id}`, item, {
      headers: authHeader(),
    })
    .then((response) => {
      dispatch({ type: MODIFY_ITEM, payload: item });
    })
    .catch((error) => console.log(error));
};

export const deleteItem = (id) => (dispatch) => {
  axios
    .delete(`http://localhost:5000/api/items/${id}`, {
      headers: authHeader(),
    })
    .then((response) => {
      dispatch({ type: DELETE_ITEM, payload: id });
    })
    .catch((error) => console.log(error));
};
