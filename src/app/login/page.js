"use client";
import { useState } from "react";
import "../signup/signup.css"; // shared CSS

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !email.includes("@") || password.length < 1) {
      setError("Email and password are required.");
    } else {
      setError("");
      alert("Logged in with: " + email);
    }
  };

  return (
    <div className="page-wrapper">
      <div className="topbar">
        <span className="logo-symbol">🔷</span>
        <span className="logo-name">SeekInvest</span>
      </div>

      <div className="signup-content">
        {/* Splash crown on top of W */}
        <div className="heading-crowned">
          <img
            src="/images/splashLeftIcon.svg"
            alt="Splash Crown"
            className="splash-crown"
          />
          <h1 className="title">Welcome Back To SeekInvest</h1>
        </div>

        <p className="subtitle">
          The platform for growth and engagement, designed for forward-thinking
          enterprises and financial advisors.
        </p>

        <form onSubmit={handleSubmit} className="form">
          <label htmlFor="email" className="input-label">Email</label>
          <input
            id="email"
            type="email"
            placeholder="Enter your email"
            className={`input ${error ? "input-error" : ""}`}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label htmlFor="password" className="input-label">Password</label>
          <input
            id="password"
            type="password"
            placeholder="Enter your password"
            className={`input ${error ? "input-error" : ""}`}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <div className="forgot-password">
            <a href="/forgot-password">Forgot password?</a>
          </div>

          {error && <p className="error-text">{error}</p>}

          <button type="submit" className="submit-btn">
            Continue to Login
          </button>
        </form>

        <p className="login-text">
          Don’t have an account? <a href="/signup">Sign Up</a>
        </p>

        <p className="links">
          <a href="#">Terms of Use</a> and <a href="#">Privacy Policy</a>
        </p>
      </div>
    </div>
  );
}
