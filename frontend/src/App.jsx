import { lazy, Suspense } from "react"

import { Routes, Route } from "react-router-dom"

import Loader from "./components/Loader"
import AuthContextProvider from "./context/AuthContext"
import PrivateRoute from "./utils/PrivateRoute"



function App() {
  const HeaderComponent = lazy(() => import("./components/Header"))
  const Blog = lazy(() => import("./pages/Blog/Blog"))
  const Login = lazy(() => import("./pages/Login/Login"))
  const Signup = lazy(() => import("./pages/Signup/SignUp"))


  return (
    <>
  <AuthContextProvider>
    <Suspense fallback={<Loader/>}>
        <HeaderComponent />
    </Suspense>

  <Suspense fallback = {<Loader/>}>
    <Routes>
        <Route element={
            <Login/> }
        path="/login" exact/> 

        <Route element = {
            <PrivateRoute>
              <Blog/>
            </PrivateRoute>
          }   
        path = "/blogs" />

        <Route element = {<Signup/>} path="/sign-up"/>

    </Routes>
  </Suspense>
</AuthContextProvider>
    </>
  )
}

export default App
