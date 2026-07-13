import PostAuthor from "./PostAuthor"
import TimeAgo from "./TimeAgo"
import Reactions from "./Reactions"
import { Link } from "react-router-dom"
import "../../css/Posts.css"
import { selectPostById } from "./postSlice"
import { useSelector } from "react-redux"

const PostsExcerpt = ({ postId }) => {
  const post = useSelector((state)=>selectPostById(state, postId))
  return (
    <article className="post-card">
      <h2 className="post-card__title">{post.title}</h2>
      <p className="post-card__body">{post.body.substring(0, 75)}...</p>

      <div className="post-card__meta">
        <PostAuthor userId={post.userId} />
        <span className="post-card__dot" aria-hidden="true">•</span>
        <TimeAgo timeStamp={post.date} />
      </div>

      <div className="post-card__footer">
        <div className="post-card__reactions">
          <Reactions post={post} />
        </div>
        <Link className="post-card__link" to={`/posts/${post.id}`}>
          View Post →
        </Link>
      </div>
    </article>
  )
}

export default PostsExcerpt
