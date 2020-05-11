import {
  GET_ALL_ITEMS,
  ADD_ITEM,
  MODIFY_ITEM,
  DELETE_ITEM,
  HIDE_ITEM,
  UNHIDE_ITEM,
} from "../actions/types";

const initialState = {
  allItems: [],
  userItems: [],
};

const itemsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_ITEMS:
      return { ...state };
    case ADD_ITEM:
      return {
        ...state,
        userItems: [...state.userItems, { ...action.payload }],
      };
    case MODIFY_ITEM:
      return {
        ...state,
        userItems: state.userItems.map((item) =>
          item.id === action.payload.id ? action.payload : item
        ),
      };
    case DELETE_ITEM:
      return {
        ...state,
        userItems: state.userItems.filter((item) => item.id !== action.payload),
      };

    case HIDE_ITEM:
      return {
        ...state,
        allItems: state.allItems.filter((item) => item.id !== action.payload),
      };
    case UNHIDE_ITEM:
      return {
        ...state,
        allItems: [...state.allItems, { ...action.payload }],
      };
    default:
      return state;
  }
};

export default itemsReducer;
