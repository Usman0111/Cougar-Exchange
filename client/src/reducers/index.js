import { combineReducers } from "redux";
import userItemsReducer from "./userItemsReducer";
import allItemsReducer from "./allItemsReducer";
import offersReducer from "./offersReducer";

const rootReducer = combineReducers({
  allItems: allItemsReducer,
  offers: offersReducer,
  userItems: userItemsReducer
});

export default rootReducer;
