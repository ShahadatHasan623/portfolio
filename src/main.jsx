import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import Root from "./pages/layouts/Root.jsx";
import ScrollPage from "./scrollpage/ScrollPage.jsx";
import AOS from "aos";
import "aos/dist/aos.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <ScrollPage></ScrollPage>,
      },
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
