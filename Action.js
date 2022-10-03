import { SET_DATA } from "./ActionTypes"
import axios from "axios";
export  const setData = (payload) => {
  
    return async (dispatch) => {
      let res = await axios.post("http://localhost:8001/api/user/signup", payload)
     
      return res
      //  dispatch({
      //     type: "REGISTER_USER",
      //     data: res.data
      //   })
      }
}

export  const getData = () => {
  
  return async (dispatch) => {
    let res = await axios.get("http://localhost:8001/api/user/fetchData")
    console.log("@res", res)
       dispatch({
          type: "SET_DATA",
          payload: res.data
        })
    }
}