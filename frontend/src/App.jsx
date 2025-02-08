// import MainContent from './MainContent'

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import Login from "./pages/Login"
import Register from "./pages/Register"
import ProtectedRoute from "./components/ProtectedRoute"
import Profile from './Profile.jsx'
import ErrorPage from './pages/ErrorPage.jsx'
import Dashboard from "./pages/Dashboard.jsx"
import './styles/dashboard-styles/header.css'
import './styles/index.css'
import Course from "./pages/Course.jsx"

function Logout() {
  localStorage.clear();
  return <Navigate to="/login" />
}

function RegisterAndLogout() {
  localStorage.clear();
  return <Register />
}

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/profile" element={ <ProtectedRoute><Profile /></ProtectedRoute>}></Route>
        <Route path="/" element={ <ProtectedRoute><Dashboard /></ProtectedRoute>}></Route>
        <Route path="/register" element={<RegisterAndLogout />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/logout" element={<Logout />}></Route>
        <Route path="/course" element={<ProtectedRoute><Course /></ProtectedRoute>}></Route>
        <Route path="*" element={<ErrorPage />}></Route>
      </Routes>
    </BrowserRouter>
  )
}
