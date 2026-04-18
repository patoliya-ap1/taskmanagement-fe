import { useState } from "react";
import { useTaskContext } from "../TaskContext/TaskContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { newTaskEmailSend } from "../utility/newTaskEmailSend";

const AddTask = () => {
  const [taskData, setTaskData] = useState({
    title: "",
    description: "",
    status: "PENDING",
  });

  const navigate = useNavigate();

  const { addTask } = useTaskContext();

  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (
      taskData.title.trim() &&
      taskData.description.trim() &&
      taskData.status.trim()
    ) {
      addTask({ id: Date.now().toString(), ...taskData });
      toast.success("New Task Created successfully.");
      newTaskEmailSend(e.currentTarget);
      navigate("/dashboard");
    } else {
      toast.error("please fill all task information");
    }
  };

  const handleFormInput = (e: any) => {
    const { value, name } = e.target;

    setTaskData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="flex justify-center">
      <div className="w-[90vw]">
        <h2>Add Task</h2>
        <form onSubmit={handleSubmit}>
          <input
            className="shadow-md p-2 w-full"
            type="text"
            name="title"
            value={taskData.title}
            placeholder="title"
            onChange={handleFormInput}
          />
          <input
            className="hidden"
            type="email"
            value={"patoliya.ap1@gmail.com"}
          />
          <br />
          <br />
          <textarea
            placeholder="Description"
            className="shadow-md p-2 w-full"
            rows={5}
            name="description"
            value={taskData.description}
            onChange={handleFormInput}
            cols={20}
          ></textarea>
          <br />
          <br />
          <select
            className="shadow-md p-2 w-full"
            name="status"
            value={taskData.status}
            onChange={handleFormInput}
          >
            <option value="PENDING">Pending</option>
            <option value="IN_PROGRESS">in Progress</option>
            <option value="COMPLETED">Completed</option>
          </select>
          <br />
          <br />
          <button className="bg-sky-700 p-2 rounded-md text-white">
            Add Task
          </button>
        </form>
      </div>
    </div>
  );
};
export default AddTask;
