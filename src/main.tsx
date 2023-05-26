import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css";
import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import Login from "./pages/login/Login";
import App from "./pages/admin/App";
import Home from "./pages/home/Home";
import Error from "./pages/error/Error";

import "./index.css";

import { MainProvider } from "./context/Maincontext";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Login,
    errorElement: <Error />,
  },
  {
    path: "/old",
    element: <Navigate to="/" />,
  },
  {
    path: "/admin",
    element: <App />,
    children: [
      {
        path: "",
        Component: Home,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <MainProvider>
      <RouterProvider router={router}></RouterProvider>
    </MainProvider>
  </React.StrictMode>
);
