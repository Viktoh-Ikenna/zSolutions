import { combineReducers } from "redux";
import AlertReducers from "./alert/alert.reducers";
import authReducers from "./auth/auth.reducer";
import carReducers from "./cars/car.reducer";
import SinglesReducers from "./singles/singles.reducers";

export default combineReducers({
  AlertReducers,
  SinglesReducers,
  authReducers,
  carReducers
});
