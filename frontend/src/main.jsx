import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App.jsx'
import './styles/index.css'
import Profile from './Profile.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import ErrorPage from './ErrorPage.jsx'

const router = createBrowserRouter([
  {path: "/",
    element: <App />,
    errorElement: <ErrorPage />
  },
  {
    path: "/profile",
    element: <Profile />,
  }
]);
const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)