import { useState } from "react";
import { useTaskContext } from "../TaskContext/TaskContext";
import { NavLink } from "react-router-dom";
import { toast } from "react-toastify";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });

  const { handleUserLogin } = useTaskContext();

  const handleFormInput = (e: any) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: any) => {
    e.preventDefault();

    if (formData.email.trim() && formData.password.trim()) {
      handleUserLogin(formData);
      toast.success("LoggedIn Successfully.");
    } else {
      toast.error("Please fill all information");
    }
  };

  return (
    <div className="flex justify-center items-center h-[50vh]">
      <div className="shadow-md p-5">
        <h2>Login</h2>
        <form onSubmit={handleFormSubmit}>
          <input
            className="shadow-md p-2"
            placeholder="email"
            name="email"
            value={formData.email}
            onChange={handleFormInput}
          />
          <br />
          <br />
          <input
            className="shadow-md p-2"
            type="password"
            placeholder="password"
            name="password"
            value={formData.password}
            onChange={handleFormInput}
          />
          <br />
          <br />
          <div className="space-x-3">
            <button className="bg-sky-700 px-2 rounded-md py-1 text-white">
              Login
            </button>
            <NavLink
              to="/signup"
              className="bg-sky-500 px-2 rounded-md py-1.5 text-white"
            >
              Signup
            </NavLink>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Login;
