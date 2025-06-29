import { Component, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import Root from "./pages/layouts/Root.jsx";
import AOS from "aos";
import "aos/dist/aos.css";
import Details from "./pages/Project/Details.jsx";
import Home from "./pages/Home/Home.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path:'/details',
        Component:Details
      }
    ],
  },
]);

AOS.init({
  duration: 1000,
  once: true,
  mirror: false,
});
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
