// import MainContent from './MainContent'

<<<<<<< HEAD
import react from "react"
=======
>>>>>>> 468bbea (pls work)
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Home from "./pages/Home"
import ProtectedRoute from "./components/ProtectedRoute"
import Profile from './Profile.jsx'
import ErrorPage from './pages/ErrorPage.jsx'
import './styles/index.css'

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
        <Route path="/" element={
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        }>

        </Route>
        <Route path="/test" element={<p>Test</p>}></Route>
        <Route path="/register" element={<RegisterAndLogout />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/logout" element={<Logout />}></Route>
        <Route path="*" element={<ErrorPage />}></Route>
      </Routes>
    </BrowserRouter>
  )
}
