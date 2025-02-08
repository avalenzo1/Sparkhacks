import { useState } from "react";
import api from "../api";
import { useNavigate, Link } from "react-router-dom";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../constants";
import "../styles/loginStyle.css"


function Form({ route, method }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [rememberMe, setRememberMe] = useState(false);
    const navigate = useNavigate();

    const name = method === "login" ? "Login" : "Register";

    const handleSubmit = async (e) => {
        setLoading(true);
        e.preventDefault();

        try {
            const res = await api.post(route, { username, password })
            if (method === "login") {
                localStorage.setItem(ACCESS_TOKEN, res.data.access);
                localStorage.setItem(REFRESH_TOKEN, res.data.refresh);
                navigate("/")
            } else {
                navigate("/login")
            }
        } catch (error) {
            alert(error)
        } finally {
            setLoading(false)
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit} className="login-container">
                <span className="login-message">
                    Welcome back! Please login to your account.
                </span>
                <div className="email-input">
                    <label htmlFor="email">Username/Email Address</label>
                    <input
                        className="form-input"
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="Username/Email Address"
                    />
                </div>
                <div className="password-input">
                    <label htmlFor="password">Password</label>
                    <input
                        className="form-input"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                    />
                </div>
                <div className="remember-container">
                    <label htmlFor="rememberMe">
                        <input
                            type="checkbox"
                            id="rememberMe"
                            checked={rememberMe}
                            className="check-box"
                            onChange={(e) => setRememberMe(e.target.checked)}
                        />
                        Remember Me
                    </label>

                    <a href="/forgot-password" className="forgot-password">
                        Forgot Password?
                    </a>
                </div>

                <div className="buttons-container">
                    <button className="log-in-bttn">{name == "Login" ? "Log In" : "Register"}</button>
                </div>

                <div>
                    {name == "Login" ? <p>Already have an account? <Link to="/register">Create an account</Link>. </p> : <p>Already have an account? <Link to="/login">Login to your account</Link>. </p>}
                </div>
            </form>



        </>
    );
}

export default Form