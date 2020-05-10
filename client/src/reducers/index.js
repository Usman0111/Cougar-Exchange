import { combineReducers } from "redux";
import itemsReducer from "./itemsReducer";
import offersReducer from "./offersReducer";
import usersReducer from "./usersReducer";

const rootReducer = combineReducers({
  Items: itemsReducer,
  offers: offersReducer,
  auth: usersReducer,
});

export default rootReducer;
