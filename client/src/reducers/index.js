import { combineReducers } from "redux";
import userItemsReducer from "./userItemsReducer";

const rootReducer = combineReducers({ userItems: userItemsReducer });

export default rootReducer;
