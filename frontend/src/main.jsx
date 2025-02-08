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

root.render(
  <StrictMode>
    <App />
  </StrictMode>
)