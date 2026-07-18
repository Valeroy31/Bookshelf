import { NavLink } from "react-router-dom";
import "../../css/Posts.css";
const linkClass = ({ isActive }) =>
  isActive ? "posts-header__link is-active" : "posts-header__link";

const PostsHeader = () => {
  return (
    <header className="posts-header">
      <div className="posts-header__inner">
        <NavLink to="/posts" className="posts-header__brand">
          📚 Bookshelf Posts
        </NavLink>

        <nav className="posts-header__nav">
          <NavLink to="/posts" end className={linkClass}>
            All Posts
          </NavLink>
           <NavLink to="/postAuthors" end className={linkClass}>
            All Authors
          </NavLink>
          <NavLink to="/posts/addPost" className={linkClass}>
            + New Post
          </NavLink>
           
        </nav>
      </div>
     
    </header>
  );
};

export default PostsHeader;
