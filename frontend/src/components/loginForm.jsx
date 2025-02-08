import React, { useState } from "react";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform login logic here
    console.log("Email Address:", email);
    console.log("Password:", password);
    console.log("Remember Me:", rememberMe);
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="login-container">
        <span className="login-message">
          Welcome back! Please login to your account.
        </span>
        <div className="email-input">
          <label htmlFor="email">Email Address</label>
          <input
                    className="form-input"
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Username"
                />
        </div>
        <div className="password-input">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="inputs"
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
          <button className="log-in-bttn" type="submit">Log In</button>
          <button className="sign-up-bttn" type="submit">Sign Up</button>
        </div>
      </form>
    </>
  );
}

export default LoginForm;
