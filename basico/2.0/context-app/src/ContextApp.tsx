import { FC } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { Header } from "./components/Header";
import { UserProvider } from "./context/UserProvider";
import { AboutPage } from "./pages/AboutPage";
import { HomePage } from "./pages/HomePage";
import { LoginPage } from "./pages/LoginPage";

export const ContextApp: FC = () => {
  return (
    <UserProvider>
      <Header />

      <Routes>
        <Route path='/' element={ <HomePage /> } />
        <Route path='login' element={ <LoginPage /> } />
        <Route path='about' element={ <AboutPage /> } />
        <Route path='/*' element={<Navigate to='login' />}  />
      </Routes>
    </UserProvider>
  );
};
