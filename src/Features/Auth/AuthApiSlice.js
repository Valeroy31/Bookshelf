import { apiSlice } from "../Api/apiSlice";
import { setCredentials } from "./AuthSlice";

export const authApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (credentials) => ({
                url: '/login',
                method: 'POST',
                body: { ...credentials }
            })
        }),
        signUp: builder.mutation({
            query: (credentials) => ({
                url: '/users/sign_up',
                method: 'POST',
                body: { ...credentials }
            })
        }),
        logOut: builder.mutation({
            query: () => ({
                url: '/logout',
                method: 'GET',
                
            })
        }),
        refresh: builder.mutation({
            query: () => ({
                url: '/refresh',
                method: 'GET'
            }),
            async onQueryStarted(args, { dispatch, queryFulfilled }) {
                try {
                    const { data } = await queryFulfilled
                    dispatch(setCredentials({ ...data }))
                } catch (error) {
                    console.log(error);

                }


            }
        })
    })
})

export const { useLoginMutation, useLogOutMutation, useRefreshMutation, useSignUpMutation } = authApiSlice