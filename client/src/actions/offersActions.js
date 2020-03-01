import { ADD_OFFER, HIDE_ITEM } from "./types";

export const makeOffer = offer => dispatch => {
  dispatch({ type: ADD_OFFER, payload: offer });
  dispatch({ type: HIDE_ITEM, payload: offer.itemRequested });
};
