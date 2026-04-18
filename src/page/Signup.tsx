import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import { sendEmail } from "../utility/emailSend";
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const SignUp = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    username: "",
  });

  const navigate = useNavigate();

  const handleFormInput = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (
      formData.username.trim() &&
      formData.email.trim() &&
      formData.password.trim()
    ) {
      const form = e.currentTarget;
      sendEmail(form);
      setFormData({
        email: "",
        password: "",
        username: "",
      });
      toast.success("Signup Completed");
      navigate("/login");
    } else {
      toast.error("Please fill all information");
    }
  };

  return (
    <div className="flex justify-center items-center h-[50vh]">
      <div className="shadow-md p-5">
        <h2>Signup</h2>
        <form onSubmit={handleFormSubmit}>
          <input
            type="text"
            className="shadow-md p-2"
            placeholder="username"
            name="username"
            value={formData.username}
            onChange={handleFormInput}
          />
          <br />
          <br />
          <input
            className="shadow-md p-2"
            placeholder="email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleFormInput}
          />
          <br />
          <br />
          <input
            className="shadow-md p-2"
            placeholder="password"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleFormInput}
          />
          <br />
          <br />
          <div className="space-x-3">
            <button className="bg-sky-700 px-2 rounded-md py-1 text-white">
              Signup
            </button>
            <NavLink
              to="/login"
              className="bg-sky-500 px-2 rounded-md py-2 text-white"
            >
              Login
            </NavLink>
          </div>
        </form>
      </div>
    </div>
  );
};
export default SignUp;
