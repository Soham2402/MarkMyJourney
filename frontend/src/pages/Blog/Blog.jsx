import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthContext'
import { testRequest } from '../../utils/AuthRequests'
const Blog = () => {
    const {username} = useContext(AuthContext)
    const authtoken = localStorage.getItem("tokens")
    const testClick = async ()=>{
      try{
        const data = await testRequest()
        console.log(data)
      }catch(e){
        console.log(e)
      }
    }
  return (
    <div>
      Hello this is the blog section {username ? <p>{username}</p>: <p>No user</p>}
      <p>{JSON.parse(authtoken).access}</p>
      <button onClick={() => testClick()}>test button</button>
    </div>
  )
}

export default Blog
