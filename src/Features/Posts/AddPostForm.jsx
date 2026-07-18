import { useState } from "react";
import {  useGetUsersQuery } from "../Users/UserSlice";

import { useNavigate } from "react-router-dom";
import PostsHeader from "./PostsHeader";
import "../../css/Posts.css";
import { useAddNewPostMutation } from "./postSlice";

const AddPostForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [userId, setUserId] = useState("");
  const [addNewPost, {isLoading}] = useAddNewPostMutation()
  const { data: users, isSuccess} = useGetUsersQuery()
  const navigate = useNavigate();
  const titleChangeHandler = (e) => setTitle(e.target.value);
  const contentChangeHandler = (e) => setContent(e.target.value);
  const authorChangeHandler = (e) => setUserId(e.target.value);
 
  const canSave =
    [title, content, userId].every(Boolean) && !isLoading;
  //  const canSave = Boolean(title) && Boolean(content) && Boolean(userId)

  const addPostHandler = async () => {
    try {
      if (canSave) {
       await addNewPost({title, body: content, userId}).unwrap()
        setTitle("");
        setContent("");
        setUserId("");
        navigate("/posts");
      }
    } catch (error) {
      console.log(error, "Could not post at this time");
    } 
  };
 if (isSuccess){
   const {ids, entities} = users || {}
  const userOptions = ids.map((id) => (
    <option key={id} value={id}>
      {entities[id].name}
    </option>  
  ))
return(
   <div className="post-form-wrapper">
        <section className="post-form">
          <h2 className="post-form__title">Add a new post</h2>
          <p className="post-form__subtitle">
            Share your thoughts with the community.
          </p>
          <form action="" method="post">
            <div className="post-form__group">
              <label className="post-form__label" htmlFor="post-title">
                Title
              </label>
              <input
                className="post-form__control"
                type="text"
                id="post-title"
                placeholder="Give your post a title"
                value={title}
                onChange={titleChangeHandler}
              />
            </div>

            <div className="post-form__group">
              <label className="post-form__label" htmlFor="post-content">
                Content
              </label>
              <textarea
                className="post-form__control"
                id="post-content"
                placeholder="Write something worth reading…"
                value={content}
                onChange={contentChangeHandler}
              />
            </div>

            <div className="post-form__group">
              <label className="post-form__label" htmlFor="user">
                Author
              </label>
              <select
                className="post-form__control"
                name="user"
                id="user"
                value={userId}
                onChange={authorChangeHandler}
              >
                <option value="">Select an author</option>
                {userOptions}
              </select>
            </div>

            <button
              type="button"
              className="post-form__submit"
              disabled={!canSave}
              onClick={addPostHandler}
            >
              Save Post
            </button>
          </form>
        </section>
      </div>
)
 

    
 
 }

  return (
    <>
      <PostsHeader />
    
    </>
  );
};

export default AddPostForm;
