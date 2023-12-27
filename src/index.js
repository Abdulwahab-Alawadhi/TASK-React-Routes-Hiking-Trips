import React from "react";
import "./index.css";
import * as ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import Nav from "./components/Nav";
import TripsList from "./components/TripsList";
import TripDetail from "./components/TripDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Nav />
        <Home />
      </>
    ),
  },
  {
    path: "/tripdetails/:tripId",
    element: (
      <>
        <Nav />
        <TripDetail />
      </>
    ),
  },
  {
    path: "/tripslist",
    element: (
      <>
        <Nav />
        <TripsList />
      </>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
