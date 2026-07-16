import { configureStore } from "@reduxjs/toolkit";
import  counterReducer from "./Features/Counter/counterSlice";
import userReducer from "./Features/Users/UserSlice";
import cartReducer from "./Features/Cart/CartSlice";
import { apiSlice } from "./Features/Api/apiSlice";

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        users: userReducer,
        cart: cartReducer,
        [apiSlice.reducerPath]: apiSlice.reducer //computed key to
        //compensate for the dynamicity of the reducerPath value
    },
    middleware: getDefaultMiddleware =>{
        getDefaultMiddleware()
        .concat(apiSlice.middleware)
    }
})
let previousCart = store.getState().cart

store.subscribe(()=>{
    let currentCart = store.getState().cart
    if(previousCart !== currentCart) localStorage.setItem('cartItems', JSON.stringify(currentCart) )
    previousCart = currentCart
    
    
})