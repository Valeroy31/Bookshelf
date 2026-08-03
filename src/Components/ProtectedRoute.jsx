import { useSelector } from "react-redux"
import { Navigate, Outlet } from "react-router-dom"
import { selectCurrentToken } from "../Features/Auth/AuthSlice"


const ProtectedRoute = () => {

  let userToken = useSelector(selectCurrentToken)
    

    

  return   userToken ? <Outlet/> : <Navigate to = '/auth/users/sign_up' state={{from: location.pathname}} replace/>

  
}

export default ProtectedRoute