import { ADD_CAR, GET_ALL_CARS, GET_EACH_CAR } from "./car.types";

const initails = {
  allCars: null,
  eachCar:null
};
export default function carReducers(state = initails, action:any) {
  switch (action.type) {
    case GET_ALL_CARS:
      return { ...state, allCars: action.payload };
    case GET_EACH_CAR:
        return { ...state, eachCar: action.payload };
    default:
      return state;
  }
}
