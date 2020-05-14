import {
  GET_ALL_OFFERS,
  ADD_OFFER,
  RECANT_OFFER,
  MODIFY_OFFER,
  ACCEPT_OFFER,
  REJECT_OFFER,
} from "../actions/types";

const initialState = {
  offersYouMade: [],
  offersYouGot: [],
};

const offersReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_OFFERS:
      return {
        ...state,
        offersYouMade: action.payload.filter(
          (offer) => offer.userId === action.id
        ),
        offersYouGot: action.payload.filter(
          (offer) => offer.otherId === action.id
        ),
      };
    case ADD_OFFER:
      return {
        ...state,
        offersYouMade: [...state.offersYouMade, action.payload],
      };
    case RECANT_OFFER:
      return {
        ...state,
        offersYouMade: state.offersYouMade.filter(
          (offer) => offer.id !== action.payload
        ),
      };
    case MODIFY_OFFER:
      return {
        ...state,
        offersYouMade: state.offersYouMade.map((offer) =>
          offer.id === action.payload.id
            ? { ...offer, itemOffered: action.payload.newItem }
            : offer
        ),
      };
    case ACCEPT_OFFER:
      return {
        ...state,
        offersYouGot: state.offersYouGot.filter(
          (offer) => offer.id !== action.payload
        ),
      };
    case REJECT_OFFER:
      return {
        ...state,
        offersYouGot: state.offersYouGot.filter(
          (offer) => offer.id !== action.payload
        ),
      };
    default:
      return state;
  }
};

export default offersReducer;
