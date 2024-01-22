import React, { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();


const AuthContextProvider = ({ children }) => {
  const [username, setUsername] = useState(() => localStorage.getItem('username')?localStorage.getItem('username') : null)
  const [tokens, setTokens] = useState(()=> localStorage.getItem('tokens')?localStorage.getItem('tokens'):null)
  
  const logout = () => {
    setUsername(null)
    setTokens(null)
    localStorage.removeItem('username')
    localStorage.removeItem('tokens')
  }
  
  const contextValues = {
    'username':username,
    'tokens': tokens,
  
    'setTokens':setTokens,
    'setUsername':setUsername,
    'logout':logout
  }

  useEffect(()=>{

  },[])
  return (
    <AuthContext.Provider value={contextValues}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
