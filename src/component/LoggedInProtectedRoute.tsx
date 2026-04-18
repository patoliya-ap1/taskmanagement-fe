import { Navigate } from "react-router-dom";
import { useTaskContext } from "../TaskContext/TaskContext";

const LoggedInProtectedRoute = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { isLoggedIn } = useTaskContext();
  return isLoggedIn ? <Navigate to="/dashboard" /> : children;
};

export default LoggedInProtectedRoute;
