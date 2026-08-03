import { OLApi } from "../OlApiSlice";

export const openLibraryExtendedApi = OLApi.injectEndpoints({
  endpoints: (builder) => ({
    landingPageFetch: builder.query({
      query: ({ fields, limit, page }) => ({
        url: "",
        method: "GET",
        params: {
          q: "new_york_times_nonfiction",
          fields,
          limit,
          page,
        },
      }),
    }),

      landingPageFetchTwo: builder.query({
      query: ({ fields, limit, page }) => ({
        url: "",
        method: "GET",
        params: {
          q: "subject:business AND first_publish_year:[2015 TO 2024]",
          fields,
          limit,
          page,
        },
      }),
    }),
  }),
});

export const { useLandingPageFetchQuery, useLandingPageFetchTwoQuery } = openLibraryExtendedApi;
