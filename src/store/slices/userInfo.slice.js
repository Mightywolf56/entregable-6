import { createSlice } from "@reduxjs/toolkit";
import { axiosEcommerce } from "../../utils/configAxios";


const initialState = {

    user: {

        id: 0,

        firstName: "",

        lastName: "",

        email: "",

        phone: "",

        createdAt: "",

        updatedAt: ""

    },

    token: ""

}


const userInfoSlice = createSlice ({
    
    name: "useInfo",
    initialState: localStorage.getItem("userInfo") 
    ? JSON.parse(localStorage.getItem("userInfo")) 
    : initialState,
    reducers: {
        setUserInfoGlobal: (state, action) => {
            return action.payload
        }
    }
})

const {setUserInfoGlobal} = userInfoSlice.actions

export const loginUser = (data) => (dispatch) => {
    const URL = "https://e-commerce-api-v2.academlo.tech/api/v1/users/login"
    
    axiosEcommerce
        .post("/users/login", data)
        .then((res) => { 
        localStorage.setItem("userInfo", JSON.stringify(data))
        dispatch(setUserInfoGlobal(res.data))
    })
         
    .catch((err) => console.log(err))
}

export const userLogOut = () => (dispatch) => {
    localStorage.removeItem("userInfo")
    dispatch(setUserInfoGlobal(initialState))
}


export default userInfoSlice.reducer