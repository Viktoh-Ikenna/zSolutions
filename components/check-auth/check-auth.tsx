import { AvatarBlock } from "./avatar.styles";
import MyImage from "../my-image/my-image.component";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { ADD_USER } from "../../redux/auth/auth.types";

function CheckAuth({ children }): any {
  const token = typeof window !== "undefined" ? localStorage.getItem('zToken') : null;
  const logged = useSelector(state => state.authReducers).user_details
  const dispatch = useDispatch();

  useEffect(() => {
    if (token && !logged) {
      axios.post('/api/user', { token }).then(res => {
        dispatch({
          payload: res.data.data,
          type: ADD_USER
        })
      })
    }else{
      dispatch({
        payload: false,
        type: ADD_USER
      })
    }
  }, [dispatch])

  return <>{children}</>
}

export default CheckAuth;
