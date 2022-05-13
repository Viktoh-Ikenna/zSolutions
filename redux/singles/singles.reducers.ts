import { DISPLAY_ADD_POST } from "./singles.types";

const initails = {
  addPost: false,
};
export default function SinglesReducers(state = initails, action:any) {
  switch (action.type) {
    case DISPLAY_ADD_POST:
      return { ...state, addPost: action.payload };
    default:
      return state;
  }
}
