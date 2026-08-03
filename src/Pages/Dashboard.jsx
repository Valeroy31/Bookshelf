import { useDispatch, useSelector } from "react-redux"
import { selectCurrentUser, stateLogOut } from "../Features/Auth/AuthSlice"
import { useLogOutMutation } from "../Features/Auth/AuthApiSlice"
import Navbar from "../Components/LandingPage/Navbar"


const Dashboard = () => {
  const user = useSelector(selectCurrentUser)
  const [logOut] = useLogOutMutation()
const dispatch = useDispatch()
  
  const logout =async()=>{
   try {
      await logOut().unwrap()
     dispatch(stateLogOut())
   } catch (error) {
      console.log(error);
      
   }
  }
  return (
    <>
    <header>
      <Navbar/>
    </header>
    <h1>Welcome {user}</h1>
    <button onClick={logout}>Logout</button>
    
    </>
  )
}

export default Dashboard