import { FC } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CalendarScreen } from "../components/calendar/CalendarScreen";
import { AuthRouter } from "./AuthRouter";

export const AppRouter: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <CalendarScreen />} />
        <Route path="auth/*" element={ <AuthRouter />} />
      </Routes>
    </BrowserRouter>
  );
};
