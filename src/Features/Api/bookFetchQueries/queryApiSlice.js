import { fetchBaseQuery } from "@reduxjs/toolkit/query"
import { createApi } from "@reduxjs/toolkit/query/react"


export const OLApi = createApi({
    reducerPath: 'OLApi',
    baseQuery: fetchBaseQuery({baseUrl: 'https://openlibrary.org/'}),
    endpoints: ()=>({})
})

export const googleApi = createApi({
    reducerPath: 'googleApi',
    baseQuery: fetchBaseQuery({baseUrl: 'https://www.googleapis.com/books/v1/volumes/'}),
    endpoints: ()=>({})
})