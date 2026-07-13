import { configureStore } from "@reduxjs/toolkit";
import  counterReducer from "./Features/Counter/counterSlice";
import postReducer from './Features/Posts/postSlice'
import userReducer from "./Features/Users/UserSlice";
import cartReducer from "./Features/Cart/CartSlice";

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        posts: postReducer,
        users: userReducer,
        cart: cartReducer
    }
})
let previousCart = store.getState().cart

store.subscribe(()=>{
    let currentCart = store.getState().cart
    if(previousCart !== currentCart) localStorage.setItem('cartItems', JSON.stringify(currentCart) )
    previousCart = currentCart
    
    
})