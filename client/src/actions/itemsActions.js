import { GET_ALL_ITEMS, ADD_ITEM, MODIFY_ITEM, DELETE_ITEM } from "./types";
import axios from "axios";

export const getAllItems = () => (dispatch) => {
  axios
    .get("http://localhost:5000/api/items", {
      headers: {
        Authorization: `Bearer ${
          JSON.parse(localStorage.getItem("user")).token
        }`,
      },
    })
    .then((response) => console.log(response.data))
    .catch();
  dispatch({ type: GET_ALL_ITEMS });
};

export const addItem = (item) => (dispatch) => {
  dispatch({ type: ADD_ITEM, payload: item });
};
export const modifyItem = (item) => (dispatch) => {
  dispatch({ type: MODIFY_ITEM, payload: item });
};

export const deleteItem = (id) => (dispatch) => {
  dispatch({ type: DELETE_ITEM, payload: id });
};
