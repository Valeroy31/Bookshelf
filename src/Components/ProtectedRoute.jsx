import { useSelector } from "react-redux"
import { Navigate, Outlet, useLocation } from "react-router-dom"
import { selectCurrentToken } from "../Features/Auth/AuthSlice"


const ProtectedRoute = () => {

  let userToken = useSelector(selectCurrentToken)
  const location = useLocation()

  return   userToken ? <Outlet/> : <Navigate to = '/auth/users/sign_up' state={{from: location.pathname}} replace/>

  
}

export default ProtectedRoute