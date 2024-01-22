import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'

const Header = () => {
    const {username,logout} = useContext(AuthContext)
  return (
    <header>
    <nav className=" bg-[#1c0a33] text-white flex flex-col md:flex-row items-center justify-center">
        {username ? <Link  onClick={e => logout()} to = '/login'>Logout</Link> : <Link to="/login" className="p-10">Login</Link>}
        <Link to="/signup"className="p-10">Sign Up</Link>
        <Link to="/blogs"className="p-10">Blogs</Link>
    </nav>
  </header>
  )
}

export default Header
