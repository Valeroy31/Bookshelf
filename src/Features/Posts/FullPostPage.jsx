import { useSelector } from "react-redux"
import { Link, useParams } from "react-router-dom"
import { selectPostById } from "./postSlice"
import PostAuthor from "./PostAuthor"
import TimeAgo from "./TimeAgo"
import Reactions from "./Reactions"
import PostsHeader from "./PostsHeader"

const FullPostPage = () => {
  const { id } = useParams()
  const foundPost = useSelector((state) => selectPostById(state, Number(id)))
 
  

  if (!foundPost) {
    return (
      <>
        <PostsHeader />
        <p
          style={{
            textAlign: "center",
            marginTop: "6rem",
            fontSize: "1.8rem",
            color: "var(--color-text-muted)",
          }}
        >
          Sorry, that post could not be found.
        </p>
      </>
    )
  }

  return (
    <>
    <PostsHeader />
    <article
      style={{
        maxWidth: "72rem",
        margin: "4rem auto",
        backgroundColor: "var(--color-bg-white)",
        padding: "3.2rem",
        borderRadius: "1.6rem",
        border: "1px solid var(--color-border)",
        boxShadow: "0 1rem 3rem var(--color-primary-shadow)",
        borderTop: "4px solid var(--color-primary)",
      }}
    >
      <header>
        <h1
          style={{
            marginBottom: "1.2rem",
            color: "var(--color-navy)",
            fontSize: "2.8rem",
            lineHeight: 1.2,
            fontWeight: 700,
          }}
        >
          {foundPost.title}
        </h1>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.8rem",
            color: "var(--color-text-muted)",
            fontSize: "1.4rem",
          }}
        >
          <PostAuthor userId={foundPost.userId} />
          <span aria-hidden="true" style={{ color: "var(--color-primary-soft)" }}>
            •
          </span>
          <TimeAgo timeStamp={foundPost.date} />
        </div>
      </header>

      <div
        style={{
          height: "1px",
          backgroundColor: "var(--color-border)",
          margin: "2rem 0",
        }}
      />

      <p
        style={{
          margin: 0,
          color: "var(--color-text-muted)",
          lineHeight: 1.7,
          fontSize: "1.7rem",
        }}
      >
        {foundPost.body}
      </p>

      <footer
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "1.2rem",
          marginTop: "2.4rem",
          paddingTop: "1.6rem",
          borderTop: "1px solid var(--color-border)",
        }}
      >
        <Reactions post={foundPost} />

        <Link
          to={`/editPost/${foundPost.id}`}
          style={{
            display: "inline-block",
            padding: "0.9rem 1.8rem",
            backgroundColor: "var(--color-primary)",
            color: "var(--color-text-white)",
            fontWeight: 600,
            fontSize: "1.4rem",
            borderRadius: "0.6rem",
            textDecoration: "none",
            boxShadow: "var(--color-primary-shadow) 0 0.4rem 0.6rem",
          }}
        >
          Edit Post
        </Link>
      </footer>
    </article>
    </>
  )
}

export default FullPostPage
