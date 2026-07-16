import { createSelector, createEntityAdapter } from "@reduxjs/toolkit";
import { sub } from "date-fns";
import { apiSlice } from "../Api/apiSlice";

const postAdapter = createEntityAdapter({
  sortComparer: (a, b) => b.date.localeCompare(a.date),
});

//normalizing state and arranging it in order of date added by default
const initialState = postAdapter.getInitialState();

export const extendedApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
  getPosts: builder.query({
    query: ()=> 'posts',
    transformResponse: (responseData)=>{
      let min = 1
      const loadedPost = responseData.map((post)=>{
        post.date = sub(new Date(), {minutes: min++}).toISOString(),
        post.reactions = {
           thumbsUp: 0,
              heart: 0,
              eyes: 0,
              hooray: 0,
              laugh: 0,
        }
        return post
      })
      postAdapter.setAll(initialState, loadedPost)
    },
    providesTags: (result, error, arg)=>
      result ? [
      {type: 'Post', id: 'LIST'},
      ...result.ids.map((id)=>(
        {type: 'Post', id}
      ))
    ] : {type: 'Post', id: 'LIST'}
  }),
  addPosts: builder.mutation({
    query: (initialPost)=>(
      {
      url: 'posts',
      method: 'POST',
      body: {
        ...initialPost, 
        date: new Date().toISOString(),
        userId: Number(initialPost.userId),
        reactions:  {
          thumbsUp: 0,
              heart: 0,
              eyes: 0,
              hooray: 0,
              laugh: 0,
        }
      },
      

    }
    ),
    invalidateTags: [
      {type: 'Post', id: 'LIST'}
      ]
  })
    
  }),
});

export const { useGetPostsQuery } = extendedApiSlice

//returns the query result object
const selectPostResult = extendedApiSlice.endpoints.getPosts.select()

//create memoized selector
const selectPostData = createSelector(
  selectPostResult,
  postResult => postResult.data
)

//getSelectors creates selectors which we rename with aliases that already exist in the slice.
// We can also pass in a selector that returns a specific slice of state,
//  in this case the posts slice.
//  The selectors will then be aware of the posts slice and will not need to be passed the entire state object.

export const {
  selectAll: selectAllPosts,
  selectById: selectPostById,
  selectIds: selectPostIds, //aka select all posts. selectPostIds because
  //we have normalized our state to look up its values using ids
} = postAdapter.getSelectors((state)=> selectPostData(state) ?? initialState)



// export const selectPostId =(state, id)=> state.posts.posts.find(post => post.id === Number(id))

// reactionAdded: (state, action) => {
//   const { postId, reaction } = action.payload;
//   const existingPost = state.entities[postId]
//   // const existingPost = state.posts.find((post) => post.id === postId);
//   if (existingPost) existingPost.reactions[reaction]++;
// }

  