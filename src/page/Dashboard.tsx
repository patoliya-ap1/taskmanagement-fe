import { NavLink } from "react-router-dom";
import { useTaskContext } from "../TaskContext/TaskContext";
import { toast } from "react-toastify";

const Dashboard = () => {
  const { tasks, removeTask } = useTaskContext();

  const handleRemoveTask = (id: string) => {
    toast.success("Task Deleted successfully");
    removeTask(id);
  };

  return (
    <div className="mx-auto max-w-5xl px-4 py-6 sm:px-6 lg:px-8">
      <div className="mb-6 flex flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
        <div>
          <h2 className="text-2xl text-slate-900">Dashboard</h2>
        </div>
        <NavLink
          to="/add-task"
          className="inline-flex items-center justify-center rounded-full bg-sky-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-sky-700"
        >
          Add Task
        </NavLink>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {tasks.toReversed().map(({ id, title, status, description }) => (
          <div
            key={id}
            className="rounded-2xl border border-slate-200 bg-slate-50 p-4 shadow-sm"
          >
            <div className="mb-3 flex items-center justify-between gap-3">
              <h3 className="text-lg text-slate-900">{title}</h3>
              <span className="rounded-full bg-sky-100 px-3 py-1 text-xs text-sky-700">
                {status}
              </span>
            </div>
            <p className="mb-4 text-sm text-slate-700">{description}</p>
            <div className="flex flex-wrap gap-2">
              <NavLink
                to="/update-task"
                state={{ id, title, status, description }}
                className="rounded-md border border-slate-300 bg-white px-3 py-1.5 text-sm"
              >
                Edit
              </NavLink>
              <button
                type="button"
                onClick={() => handleRemoveTask(id)}
                className="rounded-md bg-red-500 px-3 py-1.5 text-sm font-medium text-white transition hover:bg-red-600"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
