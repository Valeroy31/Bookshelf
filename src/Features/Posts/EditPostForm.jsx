import { useState } from "react";
import { useSelector } from "react-redux";

import { useNavigate, useParams } from "react-router-dom";

import PostsHeader from "./PostsHeader";
import {
  selectPostById,
  useDeletePostMutation,
  useUpdatePostMutation,
} from "./postSlice";
import { useGetUsersQuery } from "../Users/UserSlice";

const EditPostForm = () => {
  const { id } = useParams();
  const post = useSelector((state) => selectPostById(state, id));
  const { isSuccess, data: users } = useGetUsersQuery();
  const [updatePost, { isLoading }] = useUpdatePostMutation();
  const [deletePost] = useDeletePostMutation();

  const navigate = useNavigate();
  const [title, setTitle] = useState(post?.title);
  const [body, setBody] = useState(post?.body);
  const [userId, setUserId] = useState(post?.userId);

  const titleChangeHandler = (e) => setTitle(e.target.value);
  const contentChangeHandler = (e) => setBody(e.target.value);
  const authorChangeHandler = (e) => setUserId(Number(e.target.value));

  if (isSuccess) {
    const { ids, entities } = users || {};
    const userOptions = ids.map((id) => (
      <option key={id} value={id}>
        {entities[id].name}
      </option>
    ));
    const canSave = [title, body, userId].every(Boolean) && !isLoading;

    const addPostHandler = async () => {
      try {
        if (canSave) {
          await updatePost({ title, body, id: post.id, userId }).unwrap();
          navigate(`/posts/${post.id}`);
        }
      } catch (error) {
        console.log(error);
      }
    };

    const deletePostHandler = async () => {
      try {
        if (canSave) {
          await deletePost({ id: post.id }).unwrap();
          navigate("/posts");
        }
      } catch (error) {
        console.log(error.message);
      }
    };

    return (
      <>
        <PostsHeader />
        <div className="post-form-wrapper">
          <section className="post-form">
            <h2 className="post-form__title">Edit your post</h2>
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
                  value={body}
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
                  defaultValue={userId}
                  onChange={authorChangeHandler}
                >
                  <option value=""></option>
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

              <button
                type="button"
                className="post-form__submit"
                onClick={deletePostHandler}
              >
                Delete Post
              </button>
            </form>
          </section>
        </div>
      </>
    );
  }
};

export default EditPostForm;
