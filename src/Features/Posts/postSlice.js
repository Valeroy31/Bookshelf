import {
  createSlice,
  createAsyncThunk,
  createSelector,
  createEntityAdapter,
} from "@reduxjs/toolkit";
import axios from "axios";
import { sub } from "date-fns"


const POST_URL = "https://jsonplaceholder.typicode.com/posts";
const postAdapter = createEntityAdapter({
  sortComparer: (a, b) => b.date.localeCompare(a.date)
})

//normalizing state and arranging it in order of date added by default
const initialState = postAdapter.getInitialState({
  status: "idle",
  count: 0,
  error: null
})
// const initialState = {
//   posts: [],
//   status: "idle",
//   count: 0,
//   error: null,
// };

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {

    const response = await axios.get(POST_URL);
    console.log(response.data);

    return [...response.data];

});

export const addPost = createAsyncThunk('posts/addPost', async (initialPost) => {
  const response = await axios.post(POST_URL, initialPost)
  return response.data

})
export const updatePost = createAsyncThunk('posts/editPost', async (initialPost, thunkAPI) => {
 try {
   const { id } = initialPost
  const response = await axios.put(`${POST_URL}/${id}`, initialPost)
  return response.data
 } catch (error) {
  return thunkAPI.rejectWithValue(error.response.data)
 }

})
export const deletePost = createAsyncThunk('posts/deletePost', async (id) => {

  const response = await axios.delete(`${POST_URL}/${id}`)
  console.log(response.data);
    return id

  
})

export const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {

    reactionAdded: (state, action) => {
      const { postId, reaction } = action.payload;
      const existingPost = state.entities[postId]
      // const existingPost = state.posts.find((post) => post.id === postId);
      if (existingPost) existingPost.reactions[reaction]++;
    },
    counter: (state) => {
      state.count++
    }
  },

  extraReducers(builder) {
    // builder parameter is an obj that lets us define 
    // additional case reducers that run in response
    //  to actions defined outside the slice e.g. createAsyncThunk
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = 'succeeded'
        //if it succeeds, add time stamp to the fetched info
        //also pass in the prepared info to the individual post
        //objects coming from the API by mapping
        let min = 1
        const loadedPosts = action.payload.map((post) => {
          post.date = sub(new Date(), { minutes: min++ }).toISOString()
          post.reactions = {
            thumbsUp: 0,
            heart: 0,
            eyes: 0,
            hooray: 0,
            laugh: 0,
          }
          //return the individual objects
          return post;
        })

        // fetchPosts loads the *entire* list, so replace rather than
        // concat. Replacing is idempotent: if the thunk runs twice
        // (e.g. StrictMode double-invokes the effect), you still end up
        // with 100 posts instead of 200 duplicated ones.
        postAdapter.setAll(state, loadedPosts)
        // state.posts = loadedPosts
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error?.message
      })
      .addCase(addPost.fulfilled, (state, action) => {
        action.payload.userId = Number(action.payload.userId)
        action.payload.date = new Date().toISOString()
        action.payload.reactions = {
          thumbsUp: 0,
          heart: 0,
          eyes: 0,
          hooray: 0,
          laugh: 0,
        }
        postAdapter.upsertOne(state, action.payload)
        console.log(action.payload);

      })
      .addCase(updatePost.fulfilled, (state, action) => {
        action.payload.date = new Date().toISOString()
        postAdapter.upsertOne(state, action.payload)
        // const posts = state.posts.filter(post => post.id != id)
        // state.posts = [...posts, action.payload]
      })
      .addCase(deletePost.fulfilled, postAdapter.removeOne)

      // .addCase(deletePost.fulfilled, (state, action) => {


      //   postAdapter.removeOne(state, action.payload)
      //   // const posts = state.posts.filter(post => post.id !== Number(action.payload))
      //   // state.posts = posts
      // })
  },
});
export const { counter, reactionAdded } = postSlice.actions;
export default postSlice.reducer;


//getSelectors creates selectors which we rename with aliases that already exist in the slice. 
// We can also pass in a selector that returns a specific slice of state,
//  in this case the posts slice.
//  The selectors will then be aware of the posts slice and will not need to be passed the entire state object.

export const {
  selectAll: selectAllPosts,
  selectById: selectPostById,
  selectIds: selectPostIds //aka select all posts. selectPostIds because
  //we have normalized our state to look up its values using ids

} = postAdapter.getSelectors(state => state.posts)
// export const selectAllPosts = (state) => state.posts.posts;
export const getPostsStatus = (state) => state.posts.status;
export const getPostsError = (state) => state.posts.error;
export const getCounter = (state) => state.posts.count
export const selectUserPosts = createSelector(
  [selectAllPosts, (state, userId) => userId],
  (posts, userId) => posts.filter(post => post.userId === Number(userId))

)

// export const selectPostById = createSelector(
//   [selectAllPosts, (state, id) => id],
//   ((posts, id) => posts.find(post => post.id === Number(id)))
// )

export const selectPostByDate = createSelector(
  [selectAllPosts],
  ((posts) => posts.toSorted((a, b) => b.date.localeCompare(a.date)))
)

// export const selectPostId =(state, id)=> state.posts.posts.find(post => post.id === Number(id))

