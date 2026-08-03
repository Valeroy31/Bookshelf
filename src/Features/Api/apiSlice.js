import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { stateLogOut, setCredentials } from "../Auth/AuthSlice";

    const baseQuery = fetchBaseQuery({
    baseUrl: 'http://localhost:5000/api/v1',
    credentials: 'include',
    prepareHeaders: (headers, {getState})=>{
        const accessToken = getState().auth.token
        if (accessToken) {
            headers.set('authorization', `Bearer ${accessToken}`)
        }
        return headers
    }
})

//if accessToken fails or expires, create custom baseQuery to refetch
const baseQueryForReauth = async(args, api, extraOptions)=>{
    let result = await baseQuery(args, api, extraOptions)
    if(result?.error?.originalStatus === 403 && args !== '/refresh' /* forbidden*/){
       //fetch new accesstoken from /refresh endpoint on the backend
        const refreshResult = await baseQuery('/refresh',api, extraOptions)

        if(refreshResult?.data){
            console.log(refreshResult.data);
            
            const username = api.getState().user
            api.dispatch(setCredentials({...refreshResult.data, username}))
            //retry origin query with new accesstoken
         result = await baseQuery(args, api, extraOptions)
        } else{
            api.dispatch(stateLogOut())
        }
        
    }
    return result
}

export const apiSlice = createApi({
    reducerPath: 'authApi',
    baseQuery: baseQueryForReauth,
    tagTypes: ['Post', 'User'],
    endpoints: ()=>({
       
    })
})
