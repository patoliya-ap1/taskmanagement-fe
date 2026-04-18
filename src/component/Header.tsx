import { NavLink } from "react-router-dom";
import { useTaskContext } from "../TaskContext/TaskContext";
import { toast } from "react-toastify";

const Header = () => {
  const { isLoggedIn, handleUserLogout } = useTaskContext();

  const handleLogout = () => {
    if (isLoggedIn) {
      handleUserLogout();
      toast.success("Logged out successfully.");
    }
  };

  return (
    <header className="flex justify-between bg-sky-600 p-3 text-white">
      <div>Task Management</div>
      <nav>
        <ul className="flex space-x-5 items-center">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          {isLoggedIn && (
            <>
              <li>
                <NavLink to="/dashboard">Dashboard</NavLink>
              </li>
              <li>
                <button
                  className="bg-red-500 p-1 rounded-md cursor-pointer"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </li>
            </>
          )}
          {!isLoggedIn && (
            <>
              <li>
                <NavLink to="/login" className="bg-sky-400 p-2 rounded-md">
                  Login
                </NavLink>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};
export default Header;
