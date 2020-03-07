import uuid from "uuid";
import { ADD_OFFER } from "../actions/types";

const initialState = {
  offersYouMade: [
    {
      offerId: uuid.v4(),
      itemOffered: {
        id: uuid.v4(),
        name: "Offerd Item 1",
        description: "Lorem ipsum dolor sit amet, consectetur"
      },
      itemRequested: {
        id: uuid.v4(),
        name: "Desired Item 1",
        description: "Lorem ipsum dolor sit amet, consectetur"
      }
    },
    {
      offerId: uuid.v4(),
      itemOffered: {
        id: uuid.v4(),
        name: "Offerd Item 1",
        description: "Lorem ipsum dolor sit amet, consectetur"
      },
      itemRequested: {
        id: uuid.v4(),
        name: "Desired Item 1",
        description: "Lorem ipsum dolor sit amet, consectetur"
      }
    }
  ],
  offersYouGot: [
    {
      offerId: uuid.v4(),
      itemOffered: {
        id: uuid.v4(),
        name: "Offerd Item 1",
        description: "Lorem ipsum dolor sit amet, consectetur"
      },
      itemRequested: {
        id: uuid.v4(),
        name: "Desired Item 1",
        description: "Lorem ipsum dolor sit amet, consectetur"
      }
    }
  ],
  offersMade: [] // just for testing ADD_OFFER
};

const offersReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_OFFER:
      return {
        ...state,
        offersMade: [...state.offersMade, { id: uuid.v4(), ...action.payload }]
      };
    default:
      return state;
  }
};

export default offersReducer;
