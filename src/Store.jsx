import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./Features/Cart/CartSlice";
import { apiSlice } from "./Features/Api/apiSlice";
import authReducer from "./Features/Auth/AuthSlice"
import { OLApi } from "./Features/Api/OlApiSlice";
export const store = configureStore({
    reducer: {
       
        cart: cartReducer,
        auth: authReducer,
        [OLApi.reducerPath]: OLApi.reducer,
        [apiSlice.reducerPath]: apiSlice.reducer //computed key to
        //compensate for the dynamicity of the reducerPath value
    },
    middleware: getDefaultMiddleware =>
getDefaultMiddleware()
        .concat(apiSlice.middleware, OLApi.middleware),
       
    
        
    
})
let previousCart = store.getState().cart

store.subscribe(()=>{
    let currentCart = store.getState().cart
    if(previousCart !== currentCart) localStorage.setItem('cartItems', JSON.stringify(currentCart) )
    previousCart = currentCart
    
    
})