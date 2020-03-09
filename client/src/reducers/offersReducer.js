import uuid from "uuid";
import {
  GET_ALL_OFFERS,
  ADD_OFFER,
  RECANT_OFFER,
  MODIFY_OFFER,
  ACCEPT_OFFER,
  REJECT_OFFER
} from "../actions/types";

const initialState = {
  offersYouMade: [
    {
      offerId: uuid.v4(),
      itemOffered: {
        id: uuid.v4(),
        name: "Offerd Item 1 (user)"
      },
      itemRequested: {
        id: uuid.v4(),
        name: "Desired Item 1 (other)"
      }
    }
  ],
  offersYouGot: [
    {
      offerId: uuid.v4(),
      itemOffered: {
        id: uuid.v4(),
        name: "Offerd Item 1 (other)"
      },
      itemRequested: {
        id: uuid.v4(),
        name: "Desired Item 1 (user)"
      }
    }
  ]
};

const offersReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_OFFERS:
      return {
        ...state
      };
    case ADD_OFFER:
      return {
        ...state,
        offersYouMade: [
          ...state.offersYouMade,
          { offerId: uuid.v4(), ...action.payload }
        ]
      };
    case RECANT_OFFER:
      return {
        ...state,
        offersYouMade: state.offersYouMade.filter(
          offer => offer.offerId !== action.payload
        )
      };
    case MODIFY_OFFER:
      return {
        ...state,
        offersYouMade: state.offersYouMade.map(offer =>
          offer.offerId === action.payload.offerId
            ? { ...offer, itemOffered: action.payload.newItem }
            : offer
        )
      };
    case ACCEPT_OFFER:
      return {
        ...state,
        offersYouGot: state.offersYouGot.filter(
          offer => offer.offerId !== action.payload
        )
      };
    case REJECT_OFFER:
      return {
        ...state,
        offersYouGot: state.offersYouGot.filter(
          offer => offer.offerId !== action.payload
        )
      };
    default:
      return state;
  }
};

export default offersReducer;
