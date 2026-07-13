import { Navigate } from "react-router-dom"


const ProtectedRoute = ({ children }) => {
    const token = localStorage.token

   

  return   token ? children : <Navigate to = '/users/sign_up'/>
}

export default ProtectedRoute