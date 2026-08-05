import "../../css/Navbar.css";
import { IoMenuOutline } from "react-icons/io5";
import {
  FaLayerGroup,
  FaArrowTrendUp,
  FaRegStar,
  FaMagnifyingGlass,
  FaRegBookmark,
  FaBookOpen,
  FaCircleCheck,
  FaPenToSquare,
  FaChartSimple,
  FaUserGroup,
  FaListUl,
  FaRegComments,
  FaCircleInfo,
  FaGithub,
  FaHeart,
} from "react-icons/fa6";
import logo from "../../assets/files/logo-light.svg";
import icon from "../../assets/files/icon-mark.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav>
        <div className="navbar">
          <div className="right-nav">
            <Link to="/">
              <img className="logo" src={logo} alt="bookshelf" height={36} />
            </Link>
            <Link to="/">
              <img className="icon" src={icon} alt="bookshelf" height={36} />
            </Link>
            <div className="nav-options">
              <div className="discover">
                <Link to="#">
                  {" "}
                  <span> Discover</span>{" "}
                </Link>
                <div className="discover-dropdown">
                  <Link to="">
                    <span className="dd-icon" style={{ color: "#604FCD" }}>
                      <FaLayerGroup />
                    </span>
                    <div className="a-pair">
                      <p className="title">Browse by Genre</p>
                      <p className="desc">Find your next read across every category</p>
                    </div>
                  </Link>

                  <Link to="">
                    <span className="dd-icon" style={{ color: "#E8590C" }}>
                      <FaArrowTrendUp />
                    </span>
                    <div className="a-pair">
                      <p className="title">New & Trending</p>
                      <p className="desc">See what readers are loving right now</p>
                    </div>
                  </Link>

                  <Link to="">
                    <span className="dd-icon" style={{ color: "#F0A500" }}>
                      <FaRegStar />
                    </span>
                    <div className="a-pair">
                      <p className="title">Staff Picks</p>
                      <p className="desc">Hand-curated favorites from our team</p>
                    </div>
                  </Link>

                  <Link to="/search">
                    <span className="dd-icon" style={{ color: "#2B8A9E" }}>
                      <FaMagnifyingGlass />
                    </span>
                    <div className="a-pair">
                      <p className="title">Search Books</p>
                      <p className="desc">Track down any title, author, or topic</p>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="shelves">
                <Link to="#">
                  {" "}
                  <span> My Shelves</span>{" "}
                </Link>
                <div className="shelves-dropdown">
                  <Link to="">
                    <span className="dd-icon" style={{ color: "#6741D9" }}>
                      <FaRegBookmark />
                    </span>
                    <div className="a-pair">
                      <p className="title">Want to Read</p>
                      <p className="desc">Your wishlist of books waiting in the wings</p>
                    </div>
                  </Link>

                  <Link to="">
                    <span className="dd-icon" style={{ color: "#2F9E44" }}>
                      <FaBookOpen />
                    </span>
                    <div className="a-pair">
                      <p className="title">Currently Reading</p>
                      <p className="desc">Pick up right where you left off</p>
                    </div>
                  </Link>

                  <Link to="">
                    <span className="dd-icon" style={{ color: "#1971C2" }}>
                      <FaCircleCheck />
                    </span>
                    <div className="a-pair">
                      <p className="title">Read</p>
                      <p className="desc">Look back on everything you've finished</p>
                    </div>
                  </Link>

                  <Link to="">
                    <span className="dd-icon" style={{ color: "#E8590C" }}>
                      <FaPenToSquare />
                    </span>
                    <div className="a-pair">
                      <p className="title">My Reviews</p>
                      <p className="desc">Revisit the thoughts you've shared</p>
                    </div>
                  </Link>

                  <Link to="">
                    <span className="dd-icon" style={{ color: "#C2255C" }}>
                      <FaChartSimple />
                    </span>
                    <div className="a-pair">
                      <p className="title">My Stats</p>
                      <p className="desc">See your reading habits in numbers</p>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="community">
                <Link to="#">
                  {" "}
                  <span> Community </span>{" "}
                </Link>
                <div className="community-dropdown">
                  <Link to="">
                    <span className="dd-icon" style={{ color: "#1098AD" }}>
                      <FaUserGroup />
                    </span>
                    <div className="a-pair">
                      <p className="title">Friend Activity Feed</p>
                      <p className="desc">Keep up with what your friends are reading</p>
                    </div>
                  </Link>

                  <Link to="">
                    <span className="dd-icon" style={{ color: "#7048E8" }}>
                      <FaListUl />
                    </span>
                    <div className="a-pair">
                      <p className="title">Reading Lists</p>
                      <p className="desc">Explore collections shared by the community</p>
                    </div>
                  </Link>

                  <Link to="">
                    <span className="dd-icon" style={{ color: "#F08C00" }}>
                      <FaRegComments />
                    </span>
                    <div className="a-pair">
                      <p className="title">Book Reviews</p>
                      <p className="desc">Read honest takes from fellow readers</p>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="more">
                <Link to="#">
                  {" "}
                  <span> More </span>{" "}
                </Link>
                <div className="more-dropdown">
                  <Link to="">
                    <span className="dd-icon" style={{ color: "#4263EB" }}>
                      <FaCircleInfo />
                    </span>
                    <div className="a-pair">
                      <p className="title">About Bookshelf</p>
                      <p className="desc">Learn the story behind the shelf</p>
                    </div>
                  </Link>

                  <Link to="">
                    <span className="dd-icon" style={{ color: "#212529" }}>
                      <FaGithub />
                    </span>
                    <div className="a-pair">
                      <p className="title">Open Source</p>
                      <p className="desc">Peek under the hood and contribute</p>
                    </div>
                  </Link>

                  <Link to="">
                    <span className="dd-icon" style={{ color: "#E03131" }}>
                      <FaHeart />
                    </span>
                    <div className="a-pair">
                      <p className="title">Donate / Support</p>
                      <p className="desc">Help keep Bookshelf free for everyone</p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="left-nav">
            <a href="auth/users/sign_up">
              <button className="btn-signup">Sign up</button>{" "}
            </a>
            <a href="auth/users/login">
              <button className="btn-login"> Log in</button>{" "}
            </a>
            <button className="btn-explore">
              {" "}
              <div className="explore">
                <IoMenuOutline size={20} /> Explore
              </div>{" "}
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

// Discover   My Shelves   Community   More        [Sign Up]  [Log In]
