import { useContext } from "react"
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../components/auth/authContext";

export const PrivateRoute = ({ children }) => {
    const { user } = useContext(AuthContext);
    const location = useLocation();
    console.log(location);

    return user.logged ? children : <Navigate to='/login' />;
}
