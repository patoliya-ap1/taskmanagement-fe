import { useEffect, useState } from "react";
import { useTaskContext, type Task } from "../TaskContext/TaskContext";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const UpdateTask = () => {
  const [taskData, setTaskData] = useState<Task>({
    id: "",
    title: "",
    description: "",
    status: "PENDING",
  });

  const navigate = useNavigate();
  const location = useLocation();

  const { updateTask } = useTaskContext();

  useEffect(() => {
    const state = location.state as Task | null;
    if (state) {
      setTaskData(state);
    }
  }, []);

  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (
      taskData.title.trim() &&
      taskData.description.trim() &&
      taskData.status.trim()
    ) {
      updateTask(taskData);
      navigate("/dashboard");
      toast.success("Task Updated successfully.");
    } else {
      toast.error("please fill all task information");
    }
  };

  const handleFormInput = (e: any) => {
    const { value, name } = e.target;

    setTaskData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="flex justify-center ">
      <div className="w-[90vw]">
        <h2>Update Task</h2>
        <form onSubmit={handleSubmit}>
          <input
            className="shadow-md p-2 w-full"
            type="text"
            name="title"
            value={taskData.title}
            placeholder="title"
            onChange={handleFormInput}
          />
          <br />
          <br />
          <textarea
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
          <button className="bg-sky-600 p-2 rounded-md text-white">
            Update Task
          </button>
        </form>
      </div>
    </div>
  );
};
export default UpdateTask;
