import { NavLink } from "react-router-dom";
import { useTaskContext } from "../TaskContext/TaskContext";

const SectionTwo = () => {
  const { isLoggedIn } = useTaskContext();
  return (
    <div className="mt-5 shadow-md p-3">
      <h3 className="pb-2">Explore All Task</h3>
      <p>Manage Tasks with Dashboard, signup in out app for create tasks.</p>
      <div className="mt-2 space-x-2 text-white">
        {!isLoggedIn && (
          <NavLink to="/signup" className="bg-sky-600 px-3 py-2 rounded-md">
            Signup
          </NavLink>
        )}
        {isLoggedIn && (
          <NavLink to="/dashboard" className="bg-sky-400 px-3 py-2 rounded-md">
            Dashboard
          </NavLink>
        )}
      </div>
    </div>
  );
};
export default SectionTwo;
