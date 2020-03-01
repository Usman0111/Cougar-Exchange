import uuid from "uuid";
import { GET_ALL_ITEMS, HIDE_ITEM } from "../actions/types";

const initialState = {
  items: [
    {
      id: uuid.v4(),
      name: "Test Item 1",
      description: "Lorem ipsum dolor sit amet, consectetur"
    },
    {
      id: uuid.v4(),
      name: "Test Item 2",
      description: "Lorem ipsum dolor sit amet, consectetur"
    }
  ]
};

const allItemsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_ITEMS:
      return { ...state };
    case HIDE_ITEM:
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload)
      };
    default:
      return state;
  }
};

export default allItemsReducer;
