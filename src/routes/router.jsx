import { createBrowserRouter } from "react-router";
import Login from "../pages/Login";

export const routes = createBrowserRouter([
    {
        // Landing Page
        path: "/",
        element: <Login />
    }
])