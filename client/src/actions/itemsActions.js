import { GET_ALL_ITEMS, ADD_ITEM, MODIFY_ITEM, DELETE_ITEM } from "./types";
import axios from "axios";
import { authHeader, userId } from "./userInfo";

export const getAllItems = (cb) => (dispatch) => {
  axios
    .get("http://localhost:5000/api/items", {
      headers: authHeader(),
    })
    .then((response) => {
      dispatch({ type: GET_ALL_ITEMS, payload: response.data, id: userId() });
      cb();
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

export const toggleItemStatus = (id) => (dispatch, getState) => {
  const Item = [
    ...getState().Items.allItems,
    ...getState().Items.userItems,
  ].filter((item) => item.id === id)[0];
  dispatch(modifyItem({ ...Item, trading: !Item.trading }));
};

export const exchangeItems = (offer) => (dispatch, getState) => {
  const ItemOffered = [
    ...getState().Items.allItems,
    ...getState().Items.userItems,
  ].filter((item) => item.id === offer.itemOffered)[0];

  const ItemRequested = [
    ...getState().Items.allItems,
    ...getState().Items.userItems,
  ].filter((item) => item.id === offer.itemRequested)[0];

  console.log(ItemOffered);
  console.log(ItemRequested);

  console.log(offer);
  dispatch(
    modifyItem({ ...ItemOffered, userId: offer.otherId, trading: false })
  );

  dispatch(
    modifyItem({ ...ItemRequested, userId: offer.userId, trading: false })
  );
};
