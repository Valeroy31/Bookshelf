import { OLApi } from "./queryApiSlice";

export const openLibraryExtendedApi = OLApi.injectEndpoints({
  endpoints: (builder) => ({
    landingPageFetch: builder.query({
      query: ({ fields, limit, page }) => ({
        url: "search.json",
        method: "GET",
        params: {
          q: "new_york_times_nonfiction",
          fields,
          limit,
          page,
        },
      }),
      keepUnusedDataFor: 3600
    }),

      landingPageFetchTwo: builder.query({
      query: ({ fields, limit, page }) => ({
        url: "search.json",
        method: "GET",
        params: {
          q: "subject:business AND first_publish_year:[2015 TO 2024]",
          fields,
          limit,
          page,
        },
      }),
       keepUnusedDataFor: 3600
    }),

    bookSearchResult: builder.query({
      query: ({ searchQuery, fields }) => ({
        url: 'search.json',
        method: "GET",
        params: {
          q: `${searchQuery}`,
          fields
        }
      }),
      keepUnusedDataFor: 300
    }),

     authorSearchResult: builder.query({
      query: ({ searchQuery, fields }) => ({
        url: 'search/authors.json',
        method: "GET",
        params: {
          q: `${searchQuery}`,
          fields
        }
      }),
      keepUnusedDataFor: 300
    }),
  authorProfile: builder.query({
      query: ({ key, fields }) => ({
        url: `/authors/${key}.json`,
        method: "GET",
        params: {
          fields
        }
      }),
      keepUnusedDataFor: 300
    }),
     booksByAuthorSearchResult: builder.query({
      query: ({ searchQuery, fields }) => ({
        url: 'search.json',
        method: "GET",
        params: {
          author: `${searchQuery}`,
          fields
        }
      }),
      keepUnusedDataFor: 300
    }),
  }),
});

export const { useLandingPageFetchQuery, useAuthorProfileQuery, useAuthorSearchResultQuery, useBooksByAuthorSearchResultQuery, useLandingPageFetchTwoQuery, useBookSearchResultQuery } = openLibraryExtendedApi;
