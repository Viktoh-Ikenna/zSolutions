import { combineReducers } from "redux";
import AlertReducers from "./alert/alert.reducers";
import SinglesReducers from "./singles/singles.reducers";

export default combineReducers({
  AlertReducers,
  SinglesReducers
});
