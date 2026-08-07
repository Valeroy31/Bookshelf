import { googleApi } from "./queryApiSlice";
const apiKey = import.meta.env.VITE_API_KEY
export const googleBooksApi = googleApi.injectEndpoints({
    endpoints: (builder) => ({
    searchBooks: builder.query({
       query: ({searchQuery})=>({
         url: '',
        method: 'GET',
        params: {
            q: `${searchQuery}`,
            key: apiKey
        }
       })
    }),
})
})

export const {useSearchBooksQuery} = googleBooksApi