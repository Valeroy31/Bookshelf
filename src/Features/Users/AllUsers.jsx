import { useSelector } from "react-redux"
import { selectAllUsers } from "./UserSlice"
import { Link } from "react-router-dom"
import PostsHeader from "../Posts/PostsHeader"
import "../../css/Users.css"

const getInitials = (name = "") =>
  name
    .split(" ")
    .map((part) => part[0])
    .filter(Boolean)
    .slice(0, 2)
    .join("")
    .toUpperCase()

const AllUsers = () => {
  const users = useSelector(selectAllUsers)

  return (
    <>
      <PostsHeader />
      <div className="users-page">
        <div className="users-page__head">
          <div>
            <h1 className="users-page__title">Authors</h1>
            <p className="users-page__subtitle">
              Browse everyone contributing to the shelf.
            </p>
          </div>
          <span className="users-page__count">
            {users.length} {users.length === 1 ? "author" : "authors"}
          </span>
        </div>

        <ul className="users-grid">
          {users.map((user) => (
            <li key={user.id}>
              <Link to={`/users/${user.id}`} className="user-card">
                <div className="user-card__top">
                  <span className="user-avatar" aria-hidden="true">
                    {getInitials(user.name)}
                  </span>
                  <div className="user-card__info">
                    <p className="user-card__name">{user.name}</p>
                    <p className="user-card__username">@{user.username}</p>
                  </div>
                </div>

                <div className="user-card__meta">
                  {user.email && (
                    <span className="user-card__meta-row">
                      <span className="user-card__meta-icon" aria-hidden="true">
                        ✉️
                      </span>
                      {user.email}
                    </span>
                  )}
                  {user.company?.name && (
                    <span className="user-card__meta-row">
                      <span className="user-card__meta-icon" aria-hidden="true">
                        🏢
                      </span>
                      {user.company.name}
                    </span>
                  )}
                </div>

                <span className="user-card__cta">View profile →</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default AllUsers
