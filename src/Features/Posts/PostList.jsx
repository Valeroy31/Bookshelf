import { selectPostIds, getPostsError, getPostsStatus } from "./postSlice";

import { useSelector } from "react-redux";

import PostsExcerpt from "./PostsExcerpt";
import PostsHeader from "./PostsHeader";
import "../../css/Posts.css";

const PostList = () => {
  const sortPosts = useSelector(selectPostIds);
  const postsStatus = useSelector(getPostsStatus);
  const error = useSelector(getPostsError);

  let content;
  if (postsStatus === "loading") {
    content = (
      <div className="posts-state">
        <div className="loader"></div>
      </div>
    );
  } else if (postsStatus === "succeeded") {
    content = (
      <section className="posts-grid">
        {sortPosts.map((postId) => (
          <PostsExcerpt key={postId} postId={postId} />
        ))}
      </section>
    );
  } else if (postsStatus === "failed") {
    content = (
      <div className="posts-state">
        <p className="posts-error">{error}</p>
      </div>
    );
  }

  return (
    <>
      <PostsHeader />

      <div className="posts-page">
        <div className="posts-page__head">
          <h1 className="posts-page__title">Posts</h1>
          {postsStatus === "succeeded" && (
            <span className="posts-page__count">
              {sortPosts.length} {sortPosts.length === 1 ? "post" : "posts"}
            </span>
          )}
        </div>

        {content}
      </div>
    </>
  );
};

export default PostList;
