import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name: 'auth',
    initialState: {user: null, token: null},
    reducers: {
        setCredentials: (state, action)=>{
            const {sub, accessToken} = action.payload
            state.user = sub
            state.token = accessToken
        },
        stateLogOut: (state)=>{
            state.user = ''
            state.token = null
        }
    },
})

export const {setCredentials, stateLogOut} = authSlice.actions
export default authSlice.reducer

export const selectCurrentUser = (state)=> state.auth.user
export const selectCurrentToken = (state)=> state.auth.token