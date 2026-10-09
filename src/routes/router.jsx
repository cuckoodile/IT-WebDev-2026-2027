import { createBrowserRouter } from "react-router";
import App from "../App";
import AboutMe from "../pages/AboutMe";
import Hobby from "../pages/Hobby";

export const routes = createBrowserRouter([
  {
    // Landing Page
    path: "",
    element: <App />,
    children: [
      {
        index: true,
        element: <AboutMe />
      },
      {
        path: "hobby/:id",
        element: <Hobby />
      },
    ]
  },
]);
