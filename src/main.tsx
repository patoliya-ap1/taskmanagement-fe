import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./page/Home.tsx";
import Login from "./page/Login.tsx";
import SignUp from "./page/Signup.tsx";
import Dashboard from "./page/Dashboard.tsx";
import AddTask from "./page/AddTask.tsx";
import TaskContextProvider from "./TaskContext/TaskContextProvider.tsx";
import UpdateTask from "./page/UpdateTask.tsx";
import ProtectedRoute from "./component/ProtectedRoute.tsx";
import LoggedInProtectedRoute from "./component/LoggedInProtectedRoute.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "login",
        element: (
          <LoggedInProtectedRoute>
            <Login />
          </LoggedInProtectedRoute>
        ),
      },
      {
        path: "signup",
        element: <LoggedInProtectedRoute><SignUp /></LoggedInProtectedRoute>,
      },
      {
        path: "add-task",
        element: (
          <ProtectedRoute>
            <AddTask />
          </ProtectedRoute>
        ),
      },
      {
        path: "update-task",
        element: (
          <ProtectedRoute>
            <UpdateTask />
          </ProtectedRoute>
        ),
      },
      {
        path: "dashboard",
        element: (
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <TaskContextProvider>
      <RouterProvider router={router} />
    </TaskContextProvider>
  </StrictMode>,
);
