import { fetchBaseQuery } from "@reduxjs/toolkit/query"
import { createApi } from "@reduxjs/toolkit/query/react"


export const OLApi = createApi({
    reducerPath: 'OLApi',
    baseQuery: fetchBaseQuery({baseUrl: 'https://openlibrary.org/search.json'}),
    endpoints: ()=>({})
})