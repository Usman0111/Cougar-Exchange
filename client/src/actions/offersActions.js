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
  REJECT_OFFER
} from "./types";

export const getAllOffers = () => dispatch => {
  dispatch({ type: GET_ALL_OFFERS });
};

export const makeOffer = offer => dispatch => {
  dispatch({ type: ADD_OFFER, payload: offer });
  dispatch({ type: DELETE_ITEM, payload: offer.itemOffered.id });
  dispatch({ type: HIDE_ITEM, payload: offer.itemRequested.id });
};

export const recantOffer = offer => dispatch => {
  dispatch({ type: RECANT_OFFER, payload: offer.offerId });
  dispatch({ type: ADD_ITEM, payload: offer.itemOffered });
  dispatch({ type: UNHIDE_ITEM, payload: offer.itemRequested });
};

export const modifyOffer = change => dispatch => {
  dispatch({ type: MODIFY_OFFER, payload: change });
  dispatch({ type: ADD_ITEM, payload: change.previousItem });
  dispatch({ type: DELETE_ITEM, payload: change.newItem.id });
};

export const acceptOffer = offer => dispatch => {
  dispatch({ type: ACCEPT_OFFER, payload: offer.offerId });
  dispatch({ type: ADD_ITEM, payload: offer.itemOffered });
  dispatch({ type: UNHIDE_ITEM, payload: offer.itemRequested });
};

export const rejectOffer = offer => dispatch => {
  dispatch({ type: REJECT_OFFER, payload: offer.offerId });
  dispatch({ type: ADD_ITEM, payload: offer.itemRequested });
  dispatch({ type: UNHIDE_ITEM, payload: offer.itemOffered });
};
