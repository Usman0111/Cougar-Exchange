import { combineReducers } from "redux";
import itemsReducer from "./itemsReducer";
import offersReducer from "./offersReducer";

const rootReducer = combineReducers({
  Items: itemsReducer,
  offers: offersReducer
});

export default rootReducer;
