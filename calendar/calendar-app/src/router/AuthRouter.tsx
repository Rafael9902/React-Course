import { FC } from "react"
import { Navigate, Route, Routes } from "react-router-dom"
import { LoginScreen } from "../components/auth/login/LoginScreen"

export const AuthRouter: FC = () => {
  return (
    <Routes>
        <Route path='login' element={ <LoginScreen /> } />
        <Route  path='/*' element={ <Navigate to='login' /> }/>
    </Routes>
  )
}
