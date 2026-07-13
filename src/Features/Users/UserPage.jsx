import { useSelector } from "react-redux"
import { Link, useParams } from "react-router-dom"
import { selectUserById } from "./UserSlice"
import { selectUserPosts } from "../Posts/postSlice"
import PostsHeader from "../Posts/PostsHeader"
import "../../css/Users.css"

const getInitials = (name = '')=>
    name.split(" ")
    .map((part)=>part[0])
    .filter(Boolean)
    .slice(0, 2)
    .join('')
    .toUpperCase()



const UserPage = () => {
  const { id } = useParams()
   const user = useSelector((state) => selectUserById(state, id))
  const userPosts = useSelector(state=>selectUserPosts(state, id))
   // const posts = useSelector(selectAllPosts)
  // const userPosts = posts.filter((post) => post.userId === user.id)

  if (!user) {
    return (
      <>
        <PostsHeader />
        <div className="users-notfound">
          <h1 className="users-notfound__title">Author not found</h1>
          <p className="users-notfound__text">
            We couldn&apos;t find the author you were looking for.
          </p>
          <Link to="/postAuthors" className="free-btn">
            Back to authors
          </Link>
        </div>
      </>
    )
  }


  return (
    <>
      <PostsHeader />
      <div className="users-page">
        <Link to="/postAuthors" className="user-profile__back">
          ← All authors
        </Link>

        <header className="user-profile">
          <span className="user-avatar user-avatar--lg" aria-hidden="true">
            {getInitials(user.name)}
          </span>
          <div className="user-profile__info">
            <h1 className="user-profile__name">{user.name}</h1>
            <p className="user-profile__username">@{user.username}</p>
            <div className="user-profile__chips">
              {user.email && (
                <a className="user-chip" href={`mailto:${user.email}`}>
                  ✉️ {user.email}
                </a>
              )}
              {user.phone && (
                <span className="user-chip">📞 {user.phone}</span>
              )}
              {user.website && (
                <a
                  className="user-chip"
                  href={`https://${user.website}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  🔗 {user.website}
                </a>
              )}
              {user.address?.city && (
                <span className="user-chip">📍 {user.address.city}</span>
              )}
              {user.company?.name && (
                <span className="user-chip">🏢 {user.company.name}</span>
              )}
            </div>
          </div>
        </header>

        <section className="user-posts">
          <div className="user-posts__head">
            <h2 className="user-posts__title">Posts</h2>
            <span className="user-posts__count">
              {userPosts.length} {userPosts.length === 1 ? "post" : "posts"}
            </span>
          </div>

          {userPosts.length > 0 ? (
            <ul className="user-posts__list">
              {userPosts.map((post) => (
                <li key={post.id} className="user-post-item">
                  <Link to={`/posts/${post.id}`} className="user-post-item__link">
                    {post.title}
                    <span className="user-post-item__arrow" aria-hidden="true">
                      →
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <p className="users-empty">
              {user.name} hasn&apos;t written any posts yet.
            </p>
          )}
        </section>
      </div>
    </>
  )
}

export default UserPage
