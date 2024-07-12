import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import "./utils/fonts/fonts.css";
import { RouterProvider } from "react-router-dom";
import routes from "./routes/routes.jsx";
import { SectionProvider } from "./context/SectionCon.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <SectionProvider>
    <RouterProvider router={routes} />
  </SectionProvider>
);
