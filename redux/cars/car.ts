import axios from "axios";
import { GET_ALL_CARS, GET_EACH_CAR } from "./car.types";

export const GetAllCars = () => {
  return (dispatch, getState) => {
    return new Promise((resolve, reject) => {
      axios
        .get("/api/car")
        .then((res) => {
          if (res.data.status) {
            dispatch({
              type: GET_ALL_CARS,
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
export const addCar = (form: any) => {
  return (dispatch, getState) => {
    return new Promise((resolve, reject) => {
      const config = {
        headers: { "content-type": "multipart/form-data" },
        onUploadProgress: (event) => {
          console.log(
            `Current progress:`,
            Math.round((event.loaded * 100) / event.total)
          );
        },
      };
      axios
        .post("/api/car/add", form, config)
        .then((res) => {
          if (res.data.status) {
           dispatch(GetAllCars())
            resolve({ status: true, message: "Account created successfully" });
          }
        })
        .catch((error) => {
          resolve({ status: false, message: error });
        });
    });
  };
};
export const getEachCar = (payload: any) => {
  return (dispatch, getState) => {
           dispatch({
             type:GET_EACH_CAR,
             payload
           })
  };
};

export const deleteCar = (id: any) => {
  return (dispatch, getState) => {
    return new Promise((resolve, reject) => {
      axios
        .delete(`/api/car/delete/${id}`)
        .then((res) => {
          if (res.data.status) {
           dispatch(GetAllCars())
            resolve({ status: true, message: "Account created successfully" });
          }
        })
        .catch((error) => {
          resolve({ status: false, message: error });
        });
    });
  };
};