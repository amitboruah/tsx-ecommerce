import { Navigate, Outlet } from "react-router-dom";
import { authenticated } from "../utility";

export const ProtectedRoute = () => {
  return authenticated ? <Outlet /> : <Navigate to={"/"} />;
};
