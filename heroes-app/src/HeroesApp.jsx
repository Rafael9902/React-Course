import { AppRouter } from "./routers/AppRouter"
import { AuthContext } from './components/auth/authContext';
import { useEffect, useReducer } from "react";
import { authReducer } from "./components/auth/authReducer";

export const HeroesApp = () => {
  const init = () => JSON.parse(localStorage.getItem('user')) || { logged: false };
  const [ user, dispatch ] = useReducer(authReducer, {}, init);
  
  useEffect(() => {
    if(!user) return;
    localStorage.setItem('user', JSON.stringify(user));
  }, [user])

  return (
    <AuthContext.Provider value={{
      user,
      dispatch
    }}>
      <AppRouter />
    </AuthContext.Provider>
  )
}
