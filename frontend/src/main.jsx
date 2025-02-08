<<<<<<< Updated upstream
import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App.jsx'
import './styles/index.css'

import { createBrowserRouter, RouterProvider } from 'react-router'

// const router = createBrowserRouter([
//   {path: "/",
//     element: <App />,
//     errorElement: <ErrorPage />
//   },
//   {
//     path: "/profile",
//     element: <Profile />,
//   }
// ]);
const root = ReactDOM.createRoot(document.getElementById('root'))
=======
import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App.jsx";
import "./styles/index.css";
import Profile from "./Profile.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import ErrorPage from "./ErrorPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/courses",
    element: <h1>Courses</h1>,
  },
  {
    path: "/messages",
    element: <h1>Messages</h1>,
  },
  {
    path: "/log out",
    element: <h1>Log out</h1>,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
>>>>>>> Stashed changes

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
