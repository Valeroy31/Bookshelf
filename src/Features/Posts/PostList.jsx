import { useSelector } from "react-redux";

import PostsExcerpt from "./PostsExcerpt";
import PostsHeader from "./PostsHeader";
import "../../css/Posts.css";
import { selectPostIds, useGetPostsQuery } from "./postSlice";

const PostList = () => {
 // use selectPostIds
  //because initialState is now normalized and more optimized to look up
  //posts using assigned ids
  const sortPosts = useSelector(selectPostIds)
  const {isFetching, isError, isSuccess, error} = useGetPostsQuery()
  let content;
  if (isFetching) {
    content = (
      <div className="posts-state">
        <div className="loader"></div>
      </div>
    );
  } else if (isSuccess) {
    content = (
      <section className="posts-grid">
        {sortPosts.map((postId) => (
          <PostsExcerpt key={postId} postId={postId} />
        ))}
      </section>
    );
  } else if (isError) {
    
    content = (
            <div className="posts-state">
        <p className="posts-error">Caught error: {error.error}</p>
        
      </div>
    );
  }

  return (
    <>
      <PostsHeader />

      <div className="posts-page">
        <div className="posts-page__head">
          <h1 className="posts-page__title">Posts</h1>
          {isSuccess && (
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
