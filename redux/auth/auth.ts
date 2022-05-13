import axios from "axios";
import { ADD_USER } from "./auth.types";

export const CreateUser = (data: any) => {
  return (dispatch, getState) => {
    return new Promise((resolve, reject) => {
      axios
        .post("/api/user/signup", data)
        .then((res) => {
          localStorage.setItem("zToken", res.data.token);
          if (res.data.status) {
            dispatch({
              type: ADD_USER,
              payload: res.data.data,
            });
            resolve({ status: true, message: "Account created successfully" });
          }
        })
        .catch((error) => {
          resolve({ status: false, message: error });
        });
    });
  };
};
export const signIn = (data: any) => {
  return (dispatch, getState) => {
    return new Promise((resolve, reject) => {
      axios
        .post("/api/user/signin", data)
        .then((res) => {
          if (res.data.status) {
          localStorage.setItem("zToken", res.data.token);
            dispatch({
              type: ADD_USER,
              payload: res.data.data,
            });
            resolve({ status: true, message: "Logged in" });
          }
        })
        .catch((error) => {
          resolve({ status: false, message: error });
        });
    });
  };
};