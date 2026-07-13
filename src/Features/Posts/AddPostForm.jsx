import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectAllUsers } from "../Users/UserSlice";
import { addPost } from "./postSlice";
import { useNavigate } from "react-router-dom";
import PostsHeader from "./PostsHeader";
import "../../css/Posts.css";

const AddPostForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [userId, setUserId] = useState("");
  const [addRequest, setAddRequest] = useState("idle");
  const dispatch = useDispatch();
    const navigate = useNavigate()
  const titleChangeHandler = (e) => setTitle(e.target.value);
  const contentChangeHandler = (e) => setContent(e.target.value);
  const authorChangeHandler = (e) => setUserId(e.target.value);
  const users = useSelector(selectAllUsers);
  const canSave =
    [title, content, userId].every(Boolean) && addRequest === "idle";
  //  const canSave = Boolean(title) && Boolean(content) && Boolean(userId)

  const addPostHandler = async () => {
    try {
      if (canSave) {
        setAddRequest("pending");
        await dispatch(addPost({ title, body: content, userId })).unwrap();
         setTitle('')
         setContent('')
         setUserId('')
         navigate('/posts')
       
      
      }
    } catch (error) {
      console.error(error, "Could not post at this time");
    } finally {
      setAddRequest("idle");
    }
  };
  const userOptions = users.map((user) => (
    <option key={user.id} value={user.id}>
      {user.name}
    </option>
  ));

  return (
    <>
      <PostsHeader />
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
    </>
  );
};

export default AddPostForm;
