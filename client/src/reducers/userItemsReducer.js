import uuid from "uuid";
import {
  GET_ITEMS,
  ADD_ITEM,
  MODIFY_ITEM,
  DELETE_ITEM
} from "../actions/types";

const initialState = {
  items: [
    {
      id: uuid.v4(),
      name: "Name from Redux",
      description: "Lorem ipsum dolor sit amet, consectetur"
    }
  ]
};

const userItemsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ITEMS:
      return { ...state };
    case ADD_ITEM:
      return {
        ...state,
        items: [...state.items, { id: uuid.v4(), ...action.payload }]
      };
    case MODIFY_ITEM:
      return {
        ...state,
        items: state.items.map(item =>
          item.id === action.payload.id ? action.payload : item
        )
      };
    case DELETE_ITEM:
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload)
      };
    default:
      return state;
  }
};

export default userItemsReducer;
