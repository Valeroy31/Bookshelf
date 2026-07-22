
import { Link } from "react-router-dom"
import PostsHeader from "../Posts/PostsHeader"
import "../../css/Users.css"
import { useGetUsersQuery } from "./UserSlice"

const getInitials = (name = "") =>
  name
    .split(" ")
    .map((part) => part[0])
    .filter(Boolean)
    .slice(0, 2)
    .join("")
    .toUpperCase()

const AllUsers = () => {
 const {data: users, isLoading, isSuccess, isError, error} = useGetUsersQuery()
  const {ids, entities} = users || {}
  let content;

  if (isLoading) {
     content = (
      <div className="posts-state">
        <div className="loader"></div>
      </div>
    );
  }
  else if (isError){
    content = (
       <div className="posts-state">
        <p className="posts-error">Caught error: {error.error}</p>
        
      </div>
    )
  }
  else if (isSuccess) {
content = (
       <div className="users-page">
    
 <div className="users-page__head">
          <div>
            <h1 className="users-page__title">Authors</h1>
            <p className="users-page__subtitle">
              Browse everyone contributing to the shelf.
            </p>
          </div>
          <span className="users-page__count">
            {ids.length} {ids.length === 1 ? "author" : "authors"}
          </span>
        </div>

        <ul className="users-grid">
          {ids.map((id) => (
            <li key={id}>
              <Link to={`/users/${id}`} className="user-card">
                <div className="user-card__top">
                  <span className="user-avatar" aria-hidden="true">
                    {getInitials(entities[id]?.name)}
                  </span>
                  <div className="user-card__info">
                    <p className="user-card__name">{entities[id]?.name}</p>
                    <p className="user-card__username">@{entities[id]?.username}</p>
                  </div>
                </div>

                <div className="user-card__meta">
                  {entities[id]?.email && (
                    <span className="user-card__meta-row">
                      <span className="user-card__meta-icon" aria-hidden="true">
                        ✉️
                      </span>
                      {entities[id]?.email}
                    </span>
                  )}
                  {entities[id]?.company?.name && (
                    <span className="user-card__meta-row">
                      <span className="user-card__meta-icon" aria-hidden="true">
                        🏢
                      </span>
                      {entities[id]?.company.name}
                    </span>
                  )}
                </div>

                <span className="user-card__cta">View profile →</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
)
  }
  return (
    <>
      <PostsHeader />
         {content}
 
    </>
  )
}

export default AllUsers
