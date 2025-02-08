import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App.jsx'
import './styles/index.css'
import Profile from './Profile.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'

const router = createBrowserRouter([
  {path: "/",
    element: <App />,
    errorElement: <div>404 Not Found</div>
  },
  {path: "/profile",
    element: <Profile />,
    errorElement: <div>404 Not Found</div>
  }
]);
const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)