import { createContext, useContext } from "react";

export interface Task {
  id: string;
  title: string;
  description: string;
  status: string;
}

export interface TaskContextType {
  isLoggedIn: boolean;
  handleUserLogin: (user: { email: string; password: string }) => void;
  handleUserLogout: () => void;
  userInfo: { email: string; password: string } | null;
  tasks: Task[];
  addTask: (newTask: Task) => void;
  editTask: () => void;
  updateTask: (updatedTask: Task) => void;
  removeTask: (taskId: string) => void;
}

export const TaskContext = createContext<TaskContextType | undefined>(
  undefined,
);

export const useTaskContext = () => {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error("useTaskContext must be used within TaskContextProvider");
  }
  return context;
};
