import { createContext } from "react";

export const AuthContext = createContext()


const AuthContext = ({children}) => {
  return (
    <AuthContext.provider value = {'soham'}>
      {children}
    </AuthContext.provider>
  )
}

export default AuthContext
