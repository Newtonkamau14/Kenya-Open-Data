import { Navigate } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";
import { ReactNode } from "react";

interface ProtectedRouteProps {
  children: ReactNode;
}

function ProtectedRoute({ children }: ProtectedRouteProps) {
  const {
    state: { user },
  } = useAuthContext();

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return children;
}

export default ProtectedRoute;