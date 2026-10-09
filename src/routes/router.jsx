import { createBrowserRouter } from "react-router";
import Login from "../pages/Login";
import App from "../App";
import Dashboard from "../pages/Dashboard";
import Profile from "../pages/Profile";

export const routes = createBrowserRouter([
  {
    // Landing Page
    path: "",
    element: <Login />,
  },
  {
    path: "dashboard",
    element: <App />,    // App will serve as a parent blueprint of our pages.
    children: [
        {
            index: true,
            element: <Dashboard /> 
        },
        {
            path: "profile",
            element: <Profile />
        }
    ]
  }
]);
