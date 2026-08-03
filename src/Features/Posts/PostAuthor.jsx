import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { selectUserById } from "../Users/UserSlice"


const PostAuthor = ({userId}) => {
      const users = useSelector((state)=>selectUserById(state,userId))
    
      // const userName = users.find(user => user.id === userId)
      ;
      
  return (
    <>
    <Link to={`/author/${userId}`}>{users ? <i style={{ marginTop: '10px', fontSize: '1.6rem' }}>by {users.name}  </i> : <p style={{ marginTop: '10px', fontStyle: 'italic', color: '#718096' }}>by Unknown Author</p>}</Link>
   </>
  )
}

export default PostAuthor