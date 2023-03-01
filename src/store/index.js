import { configureStore } from "@reduxjs/toolkit";
import userInfo from "./slices/userInfo.slice"
import cart from "./slices/cartSlice"



export default configureStore ({
    reducer: {
        userInfo,
        cart,
    }
})