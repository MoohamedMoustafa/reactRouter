import { useEffect, useState } from "react";
import "./App.css";
import {
  createBrowserRouter,
  RouterProvider,
  useLocation,
} from "react-router-dom";
import Layout from "./Layout/Layout";
import Home from "./Home/Home";
import About from "./About/About";
import Contact from "./Contact/Contact";
import Portofolio from "./Portofolio/Portofolio";
import NotFound from "./NotFound/NotFound";

function App() {
  const router = createBrowserRouter(
    [
      {
        path: "",
        element: <Layout />,
        children: [
          { index: true, element: <Home /> },
          { path: "about", element: <About /> },
          { path: "contact", element: <Contact /> },
          { path: "portofolio", element: <Portofolio /> },
          { path: "*", element: <NotFound /> },
        ],
      },
    ],
    {
      basename:
        process.env.NODE_ENV === "production" ? "/reactRouterProject" : "",
    }
  );

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
