import { combineReducers } from "redux";
import itemsReducer from "./itemsReducer";
import offersReducer from "./offersReducer";
import usersReducer from "./usersReducer";
import registerReducer from "./registerReducer";

const rootReducer = combineReducers({
  Items: itemsReducer,
  offers: offersReducer,
  auth: usersReducer,
  register: registerReducer,
});

export default rootReducer;
