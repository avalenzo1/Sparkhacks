import React from "react";
import "../ErrorPage.css"; // Import a CSS file for styles
import { BrowserRouter, Routes, Route, Navigate, Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <>
      <div className="error-page-container">
        {/* Blue Bar at the top with Logo */}
        <div className="blue-bar">
          <img src="/piazza.jpg" alt="Logo" className="logo" />
          <Link to="/" className="go-back-link">Go Back</Link>
        </div>

        {/* Error Page Content */}
        <div className="error-content">
          <h1>Error 404: Page Not Found</h1>
          <p>
            The page you're looking for might have been removed or is
            temporarily unavailable.
          </p>

          {/* New Image Below the Text */}
          <img
            src="/sadrobot.jpg"
            alt="Error Illustration"
            className="error-image"
          />
        </div>
      </div>
    </>
  );
};

export default ErrorPage;
