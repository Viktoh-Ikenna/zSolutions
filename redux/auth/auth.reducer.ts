import { ADD_USER } from "./auth.types";

const initails = {
  user_details: null,
};
export default function authReducers(state = initails, action:any) {
  switch (action.type) {
    case ADD_USER:
      return { ...state, user_details: action.payload };
    default:
      return state;
  }
}
