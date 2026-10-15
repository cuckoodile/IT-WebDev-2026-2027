import { createBrowserRouter } from "react-router";
import App from "../App";
import Users from "../pages/Users";
import Login from "../pages/Login";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Users />,
      },
    ],
  },
  {
    path: "login",
    element: <Login />,
  },
]);

export default routes;
