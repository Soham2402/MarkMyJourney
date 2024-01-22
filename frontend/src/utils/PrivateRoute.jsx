import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'


const PrivateRoute = ({children}) => {
    const {username} = useContext(AuthContext)
  return (
    username ? <>{children}</> : <Navigate to={'/login'} />
  )
}

export default PrivateRoute
