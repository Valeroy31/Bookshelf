import { useSelector } from "react-redux"
import { selectAllUsers } from "../Users/UserSlice"


const PostAuthor = ({userId}) => {
      const users = useSelector(selectAllUsers)
      const userName = users.find(user => user.id === userId)
      ;
      
  return (
    <>
   {userName ? <i style={{ marginTop: '10px', fontSize: '1.6rem' }}>by {userName.name}  </i> : <p style={{ marginTop: '10px', fontStyle: 'italic', color: '#718096' }}>by Unknown Author</p>}
    </>
  )
}

export default PostAuthor