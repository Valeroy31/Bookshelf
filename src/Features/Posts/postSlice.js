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
      query: () => "posts",
      transformResponse: (responseData) => {
        let min = 1;
        const loadedPost = responseData.map((post)=>{
          if(!post?.date) post.date = sub(new Date(), {minutes: min++}).toISOString()
          if(!post?.reactions) post.reactions = {
            thumbsUp: 0,
            heart: 0,
            eyes: 0,
            hooray: 0,
            laugh: 0
          }
          return post
        })
      
      return postAdapter.setAll(initialState, loadedPost)
      },
      providesTags: (result) =>
        result
          ? [
              { type: "Post", id: "LIST" },
              ...result.ids.map((id) => ({ type: "Post", id })),
            ]
          : [{ type: "Post", id: "LIST" }],
      
    }),
    getPostsByUserId: builder.query({
      query: (id) => `posts/?userId=${id}`,
      transformResponse: (responseData) => {
        let min = 1;
        const loadedPosts = responseData.map((post) => {
          if (!post?.date)
            post.date = sub(new Date(), { minutes: min++ }).toISOString();
          if (!post?.reactions)
            post.reactions = {
              thumbsUp: 0,
              heart: 0,
              eyes: 0,
              hooray: 0,
              laugh: 0,
            };
          return post;
        });
        return postAdapter.setAll(initialState, loadedPosts);
      },
      providesTags: (result) =>
        result
          ? [...result.ids.map((id) => ({ type: "Post", id }))]
          : [{ type: "Post", id: "LIST" }]
    }),

    addNewPost: builder.mutation({
      query: (initialPost) => ({
        url: "posts",
        method: "POST",
        body: {
          ...initialPost,
          date: new Date().toISOString(),
          userId: Number(initialPost.userId),
          reactions: {
            thumbsUp: 0,
            heart: 0,
            eyes: 0,
            hooray: 0,
            laugh: 0,
          },
        },
      }),
      invalidatesTags:[{ type: "Post", id: "LIST" }],
    }),

    updatePost: builder.mutation({
      query: (initialPost) => ({
        url: `posts/${initialPost.id}`,
        method: "PUT",
        body: {
          ...initialPost,
          date: new Date().toISOString(),
        },
      }),
      invalidatesTags: (result, error, arg) => [{ type: "Post", id: arg.id }],
    }),
    deletePost: builder.mutation({
      query: ({ id }) => ({
        url: `posts/${id}`,
        method: "DELETE",
        body: { id },
      }),
      invalidatesTags: (result, error, arg) => [{ type: "Post", id: arg.id }],
    }),
   addReaction: builder.mutation({
    query: ({postId, reactions})=>({
      url: `posts/${postId}`,
      method: 'PATCH',
      body: {reactions}
    }),
    async onQueryStarted({postId, reactions}, {dispatch, queryFulfilled}){
      const patchResult = dispatch(
        extendedApiSlice.util.updateQueryData('getPosts', undefined, draft =>{
           //get the post from the duplicated draft data where the id is equal to the postId
            const post = draft.entities[postId]
            if(post) post.reactions = reactions
        })
      )
      try {
        await queryFulfilled
      } catch {
        patchResult.undo()
      }
    }
   })
  }),
});

export const {
  useGetPostsQuery,
  useAddReactionMutation,
  useUpdatePostMutation,
  useDeletePostMutation,
  useAddNewPostMutation,
  useGetPostsByUserIdQuery,
} = extendedApiSlice;

//returns the query result object
const selectPostResult = extendedApiSlice.endpoints.getPosts.select();

//create memoized selector
const selectPostData = createSelector(
  selectPostResult,
  (postResult) => postResult.data,
);

//getSelectors creates selectors which we rename with aliases that already exist in the slice.
// We can also pass in a selector that returns a specific slice of state,
//  in this case the posts slice.
//  The selectors will then be aware of the posts slice and will not need to be passed the entire state object.

export const {
  selectAll: selectAllPosts,
  selectById: selectPostById,
  selectIds: selectPostIds, //aka select all posts. selectPostIds because
  //we have normalized our state to look up its values using ids
} = postAdapter.getSelectors((state) => selectPostData(state) ?? initialState);

// export const selectPostId =(state, id)=> state.posts.posts.find(post => post.id === Number(id))

  // addReaction: builder.mutation({
  //           query: ({postId, reaction})=>({
  //               url: `post/${postId}`,
  //               method: 'POST',
  //               body: {reaction}
  //           }),
  //         async onQueryStarted({postId, reaction}, {dispatch, queryFulfilled}) {
  //             const patchResult = dispatch (
  //              extendedApiSlice.util.updateQueryData('getPosts', undefined, draft =>{
  //                
  //                 const post = draft.entities[postId]
  //                 if (post) post.reactions[reaction]++
  //               })
                
  //             )
  //             try {
  //                 await queryFulfilled
  //               } catch (error) {
  //                 patchResult.undo()
  //               }
  //         }
  //       })
