import { useSelector } from "react-redux"
import { selectAllUsers } from "../Users/UserSlice"
import { Link } from "react-router-dom"


const PostAuthor = ({userId}) => {
      const users = useSelector(selectAllUsers)
      const userName = users.find(user => user.id === userId)
      ;
      
  return (
    <>
    <Link to={`/user/${userId}`}>{userName ? <i style={{ marginTop: '10px', fontSize: '1.6rem' }}>by {userName.name}  </i> : <p style={{ marginTop: '10px', fontStyle: 'italic', color: '#718096' }}>by Unknown Author</p>}</Link>
   </>
  )
}

export default PostAuthor