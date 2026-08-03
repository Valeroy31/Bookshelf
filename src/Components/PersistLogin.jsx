import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { selectCurrentToken } from '../Features/Auth/AuthSlice'
import { useRefreshMutation } from '../Features/Auth/AuthApiSlice'
import { Outlet } from 'react-router-dom'
import { useState } from 'react'

const PersistLogin = () => {

    const token = useSelector(selectCurrentToken)
    const [isChecking, setisChecking] = useState(!token)
    const [refresh] = useRefreshMutation()
    useEffect(() => {
      const verifyToken = async()=>{
        try {
            await refresh().unwrap()
        } catch (error) {
            console.log(error);
            
        } finally{
            setisChecking(false)
        }
      
      }

      if (!token) verifyToken()
    }, [])
    
  return isChecking ? <div className='loader-2'></div> : <Outlet/>
}

export default PersistLogin