import { DISPLAY_ADD_POST } from "./singles.types";


export const DisplayAddPost = (payload:boolean) => {
  return (dispatch, getState) => {
        dispatch({
          type: DISPLAY_ADD_POST,
          payload
        })
  }
};
