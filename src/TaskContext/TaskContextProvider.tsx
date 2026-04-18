import { useState } from "react";
import { TaskContext, type Task } from "./TaskContext";

const TaskContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [userInfo, setUserInfo] = useState<{
    email: string;
    password: string;
  } | null>(null);

  const [tasks, setTasks] = useState<Task[]>([
    {
      id: "834729",
      title: "Design Login Page",
      description: "Create responsive UI for login screen",
      status: "PENDING",
    },
    {
      id: "129483",
      title: "Setup Prisma",
      description: "Initialize Prisma and connect database",
      status: "COMPLETED",
    },
    {
      id: "567291",
      title: "Build API",
      description: "Create REST API for tasks module",
      status: "IN_PROGRESS",
    },
    {
      id: "908172",
      title: "Fix Bugs",
      description: "Resolve UI bugs in dashboard",
      status: "PENDING",
    },
    {
      id: "345678",
      title: "Add Authentication",
      description: "Implement JWT-based login system",
      status: "COMPLETED",
    },
    {
      id: "782134",
      title: "Create Task Form",
      description: "Build form to add new tasks",
      status: "IN_PROGRESS",
    },
    {
      id: "651209",
      title: "Optimize Performance",
      description: "Improve API response time",
      status: "PENDING",
    },
    {
      id: "443210",
      title: "Write Tests",
      description: "Add unit tests for services",
      status: "PENDING",
    },
    {
      id: "998172",
      title: "Deploy App",
      description: "Deploy backend and frontend",
      status: "COMPLETED",
    },
    {
      id: "210987",
      title: "Update UI",
      description: "Improve overall UI/UX design",
      status: "IN_PROGRESS",
    },
  ]);

  interface TASK {
    id: string;
    title: string;
    description: string;
    status: string;
  }

  const addTask = (newTask: TASK) => {
    setTasks((prev) => [...prev, newTask]);
  };

  const editTask = () => {};

  const updateTask = (updatedTask: TASK) => {
    console.log("run");
    setTasks((prev) => {
      return prev.map((task) => {
        if (task.id == updatedTask.id) {
          return updatedTask;
        } else {
          return task;
        }
      });
    });
  };

  const removeTask = (taskId: string) => {
    setTasks((prev) => prev.filter(({ id }) => id != taskId));
  };

  const handleUserLogin = (user: { email: string; password: string }) => {
    setIsLoggedIn(true);
    setUserInfo(user);
  };

  const handleUserLogout = () => {
    setIsLoggedIn(false);
    setUserInfo(null);
  };

  const taskValues = {
    isLoggedIn,
    handleUserLogin,
    handleUserLogout,
    userInfo,
    tasks,
    addTask,
    editTask,
    updateTask,
    removeTask,
  };

  return (
    <TaskContext.Provider value={taskValues}>{children}</TaskContext.Provider>
  );
};
export default TaskContextProvider;
