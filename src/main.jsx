import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router";

import "./index.css";
import { routes } from "./routes/router";

createRoot(document.getElementById("root")).render(
  // Wrapper: "Provider"

  <RouterProvider router={routes} />,
);
