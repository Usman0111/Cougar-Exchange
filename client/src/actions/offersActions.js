import {
  GET_ALL_OFFERS,
  ADD_OFFER,
  ADD_ITEM,
  DELETE_ITEM,
  HIDE_ITEM,
  UNHIDE_ITEM,
  RECANT_OFFER,
  MODIFY_OFFER,
  ACCEPT_OFFER,
  REJECT_OFFER,
} from "./types";
import axios from "axios";
import { authHeader, userId } from "./userInfo";
import { getAllItems } from "./itemsActions";

export const getAllOffers = () => (dispatch) => {
  dispatch(getAllItems());
  axios
    .get("http://localhost:5000/api/offers", {
      headers: authHeader(),
    })
    .then((response) => {
      dispatch({ type: GET_ALL_OFFERS, payload: response.data, id: userId() });
    })
    .catch((error) => console.log(error));
};

export const makeOffer = (offer) => (dispatch) => {
  axios
    .post("http://localhost:5000/api/offers", offer, {
      headers: authHeader(),
    })
    .then((response) => {
      dispatch({ type: ADD_OFFER, payload: offer });
    })
    .catch((error) => console.log(error));

  dispatch({ type: DELETE_ITEM, payload: offer.itemOffered });
  dispatch({ type: HIDE_ITEM, payload: offer.itemRequested });
};

export const recantOffer = (offer) => (dispatch) => {
  dispatch({ type: RECANT_OFFER, payload: offer.offerId });
  dispatch({ type: ADD_ITEM, payload: offer.itemOffered });
  dispatch({ type: UNHIDE_ITEM, payload: offer.itemRequested });
};

export const modifyOffer = (change) => (dispatch) => {
  dispatch({ type: MODIFY_OFFER, payload: change });
  dispatch({ type: ADD_ITEM, payload: change.previousItem });
  dispatch({ type: DELETE_ITEM, payload: change.newItem.id });
};

export const acceptOffer = (offer) => (dispatch) => {
  dispatch({ type: ACCEPT_OFFER, payload: offer.offerId });
  dispatch({ type: ADD_ITEM, payload: offer.itemOffered });
  dispatch({ type: UNHIDE_ITEM, payload: offer.itemRequested });
};

export const rejectOffer = (offer) => (dispatch) => {
  dispatch({ type: REJECT_OFFER, payload: offer.offerId });
  dispatch({ type: ADD_ITEM, payload: offer.itemRequested });
  dispatch({ type: UNHIDE_ITEM, payload: offer.itemOffered });
};
