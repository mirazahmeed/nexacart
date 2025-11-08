// src/Components/Router/Router.jsx
import React from "react";
import { createBrowserRouter } from "react-router-dom"; // <- react-router-dom
import Root from "../Root/Root";
import Home from "../Home/Home";
import Navbar from "../Navbar/Navbar";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,           // element property (JSX)
    children: [
      { index: true, element: <Home /> },      // index route
      { path: "navbar", element: <Navbar /> }  // /navbar
    ],
  },
]);

export default router; // export the router object
