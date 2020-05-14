import {
  GET_ALL_OFFERS,
  ADD_OFFER,
  HIDE_ITEM,
  RECANT_OFFER,
  MODIFY_OFFER,
  ACCEPT_OFFER,
  REJECT_OFFER,
} from "./types";
import axios from "axios";
import { authHeader, userId } from "./userInfo";
import { getAllItems, toggleItemStatus, exchangeItems } from "./itemsActions";

export const getAllOffers = () => (dispatch) => {
  dispatch(
    getAllItems(() => {
      axios
        .get("http://localhost:5000/api/offers", {
          headers: authHeader(),
        })
        .then((response) => {
          dispatch({
            type: GET_ALL_OFFERS,
            payload: response.data,
            id: userId(),
          });
        })
        .catch((error) => console.log(error));
    })
  );
};

export const makeOffer = (offer) => (dispatch, getState) => {
  //adding new offer
  axios
    .post("http://localhost:5000/api/offers", offer, {
      headers: authHeader(),
    })
    .then((response) => {
      dispatch({ type: ADD_OFFER, payload: offer });
    })
    .catch((error) => console.log(error));

  //chaning trading status of the items
  dispatch(toggleItemStatus(offer.itemOffered));
  dispatch(toggleItemStatus(offer.itemRequested));
  dispatch({ type: HIDE_ITEM, payload: offer.itemRequested });
};

export const recantOffer = (offer) => (dispatch, getState) => {
  axios
    .delete(`http://localhost:5000/api/offers/${offer.id}`, {
      headers: authHeader(),
    })
    .then((response) => {
      dispatch({ type: RECANT_OFFER, payload: offer.id });
    })
    .catch((error) => console.log(error));

  //chaning trading status of the items
  dispatch(toggleItemStatus(offer.itemOffered));
  dispatch(toggleItemStatus(offer.itemRequested));
};

export const modifyOffer = (change) => (dispatch, useState) => {
  const Offer = useState().offers.offersYouMade.filter(
    (offer) => offer.id === change.id
  )[0];

  axios
    .put(
      `http://localhost:5000/api/offers/${Offer.id}`,
      { ...Offer, itemOffered: change.newItem },
      {
        headers: authHeader(),
      }
    )
    .then((response) => {
      dispatch({ type: MODIFY_OFFER, payload: change });
    })
    .catch((error) => console.log(error));
  //chaning trading status of the items
  dispatch(toggleItemStatus(change.previousItem));
  dispatch(toggleItemStatus(change.newItem));
};

export const acceptOffer = (offer) => (dispatch) => {
  dispatch(exchangeItems(offer));
  axios
    .delete(`http://localhost:5000/api/offers/${offer.id}`, {
      headers: authHeader(),
    })
    .then((response) => {
      dispatch({ type: ACCEPT_OFFER, payload: offer.id });
    })
    .catch((error) => console.log(error));
};

export const rejectOffer = (offer) => (dispatch) => {
  axios
    .delete(`http://localhost:5000/api/offers/${offer.id}`, {
      headers: authHeader(),
    })
    .then((response) => {
      dispatch({ type: REJECT_OFFER, payload: offer.id });
    })
    .catch((error) => console.log(error));

  //chaning trading status of the items
  dispatch(toggleItemStatus(offer.itemOffered));
  dispatch(toggleItemStatus(offer.itemRequested));
};
