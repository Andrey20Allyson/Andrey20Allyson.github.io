import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../pages/Home";

const router = createBrowserRouter([
  {
    path: '/',
    Component: Home,
  }
]);

export default function Router() {
  return <RouterProvider router={router}/>
}