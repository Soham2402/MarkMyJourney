import React, { useContext, useState } from 'react'
import { AuthContext } from '../context/AuthContext'
import { jwtDecode } from "jwt-decode";
import { useNavigate } from 'react-router-dom'
import { getAuthTokens } from '../utils/AuthRequests'

const Login = () => {
  const {setUsername, setTokens} = useContext(AuthContext)
  const [user,setUser] = useState(null)
  const [pass,setPass] = useState(null)

  const navigate = useNavigate();

  const onSubmit =async (e)=>{
    e.preventDefault()
    try {
      const response = await getAuthTokens(user, pass)
      const username = jwtDecode(response.access).name
      setUsername(username)
      setTokens(response)
      navigate('/blogs')
    }catch{
      console.log(e)
    }
  }


  return (
    <div>
      <form action="" method="post" className='flex flex-col justify-center items-center gap-10 p-10 w-full bg-[#45187f]'>
        <input type="text" name="username" id="username"  placeholder='Username' onChange={e => setUser(e.target.value)} className='py-1 px-5'/>
        <input type="password" name="password" id="password"  placeholder='Password' onChange={e => setPass(e.target.value)} className='py-1 px-5'/>
        <input type="submit" onClick={(e) => onSubmit(e)} className='py-1 px-5 bg-[#1c0a33] text-white cursor-pointer' />
      </form>
    </div>
  )
}

export default Login
