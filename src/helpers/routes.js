import { Route, useNavigate, useLocation, Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/auth";

export function RequireAuth({ children, user, navigate }) {
  let location = useLocation();

  if (!user) {
    // Redirect them to the /login page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.
    return <Navigate to={navigate} state={{ from: location }} replace />;
  }

  return children;
}

export function RedirectUser({ children, user, navigate }) {
  let location = useLocation();

  if (user) {
    return <Navigate to={navigate} state={{ from: location }} replace />;
  }

  return children;
}
