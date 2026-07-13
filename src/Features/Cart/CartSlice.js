import { createSlice } from "@reduxjs/toolkit";

const initialState = JSON.parse(localStorage.getItem('cartItems')) || []
export const CartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action)=>{
            const item = state.find(i => i.id === action.payload.id)
            if (!item) state.push({...action.payload, quantity: 1})
        },
        removeFromCart:(state, action)=>{
            // const index = state.findIndex(i=> i.id === action.payload)
            // state.splice(index, 1)
            return state.filter(i => i.id !== action.payload)
        },
        increaseQuantity: (state, action)=>{
              const item = state.find(i => i.id === action.payload.id)
              item.quantity++
        },
          decreaseQuantity: (state, action)=>{
              const item = state.find(i => i.id === action.payload.id)
             if(item.quantity > 1){
                item.quantity--
             }
             
        }
    }
})

export  const {addToCart, removeFromCart, increaseQuantity, decreaseQuantity} = CartSlice.actions
export default CartSlice.reducer

export const cartItems = (state)=>state.cart