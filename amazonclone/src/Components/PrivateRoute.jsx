import { useContext } from "react";
import { AuthContext } from "../Contexts/authContext";
import { Navigate } from "react-router-dom";

export const PrivateRoute = ({ children }) => {
  const { token } = useContext(AuthContext);
  if (!token) {
    return <Navigate to={"login"} />;
  }
  return children;
};
