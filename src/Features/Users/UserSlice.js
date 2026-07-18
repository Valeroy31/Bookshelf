import { createEntityAdapter, createSelector } from "@reduxjs/toolkit"
import { apiSlice } from "../Api/apiSlice"

const userAdapter = createEntityAdapter()

const initialState = userAdapter.getInitialState()

export const extendedApiUserSlice = apiSlice.injectEndpoints({
    endpoints: (builder)=>({
        getUsers: builder.query({
            query: ()=> 'users',
            transformResponse: (responseData)=>{
               return userAdapter.setAll(initialState,responseData)
            },
            
            providesTags: (result)=>
                result ? [
                {type: 'Posts', id: 'LIST'},
                ...result.ids.map(id => ({type: 'Posts', id}))
                
            ] : {type: 'Posts', id: 'LIST'}
            
        })
    })
})

export const {useGetUsersQuery} = extendedApiUserSlice

const selectUserResult = extendedApiUserSlice.endpoints.getUsers.select()

export const userResult = createSelector(
    selectUserResult,
    userResult => userResult.data
)

       export const {
        selectAll,
        selectIds: selectAllUsers,
        selectById: selectUserById
       } = userAdapter.getSelectors( (state)=> userResult(state) ?? initialState)


