import { Navigate } from "react-router-dom";
import { useTaskContext } from "../TaskContext/TaskContext";

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { isLoggedIn } = useTaskContext();

  return isLoggedIn ? children : <Navigate to="/login" />;
};
export default ProtectedRoute;
