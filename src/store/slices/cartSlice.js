import {createSlice} from "@reduxjs/toolkit"
import { axiosEcommerce, getConfig } from "../../utils/configAxios";


const initialState = {
    products: [],
}


const cartSlice = createSlice ({

    name: "cart",
    initialState,
    reducers: {
        setProductCartGlobal: (state, action) => {
            return {...state, products: action.payload}
        }
    }


})

const {setProductCartGlobal} = cartSlice.actions;

export const getAllCartProducts = () => (dispatch) => {
    axiosEcommerce
    .get("/cart", getConfig())
    .then((res) => dispatch(setProductCartGlobal(res.data)))
    .catch((err) => console-log(err))

}

export const addProductCart = (data) => (dispatch) => {
    axiosEcommerce
     .post("/cart", data, getConfig())
     .then((res) => dispatch(getAllCartProducts()))
     .catch((err) => console.log(err))
}

export const deleteProductCart = (id) => (dispatch) => {
    axiosEcommerce
    .delete(`/cart/${id}`)
    .then((res) => console.log(res.data))
    .catch((err) => console.log(err))
}


export default cartSlice.reducer 