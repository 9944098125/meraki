import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { Box } from "@mui/material";

import Navbar from "../Components/Navbar";
import Home from "../Pages/Home";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);

export default function BaseRoutes() {
  return <RouterProvider router={routes} />;
}
