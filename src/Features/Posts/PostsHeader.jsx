import { NavLink } from "react-router-dom";
import "../../css/Posts.css";
import { useDispatch, useSelector } from "react-redux";
const linkClass = ({ isActive }) =>
  isActive ? "posts-header__link is-active" : "posts-header__link";
import { counter, getCounter } from "./postSlice";
const PostsHeader = () => {
 const count = useSelector(getCounter)
  const dispatch = useDispatch()
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
             <button style={{color: 'black'}} onClick={()=>dispatch(counter())} >{count}</button>
         
        </nav>
      </div>
     
    </header>
  );
};

export default PostsHeader;
