// this ia a authenticator file just to make sure rest of the pages can't be accessed easily and are safe till a user log's in
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../store/useAuth";

export const ProtectedRoute = () => {
  const { isAuthenticated } = useAuth(); 

  if (!isAuthenticated) {
    
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
};
