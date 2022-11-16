import { FC } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CalendarPage } from "../components/calendar/pages/CalendarPage";
import { AuthRouter } from "./AuthRouter";

export const AppRouter: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <CalendarPage />} />
        <Route path="auth/*" element={ <AuthRouter />} />
      </Routes>
    </BrowserRouter>
  );
};
