"use client";
import { useState } from "react";
import "../signup/signup.css"; // using same CSS

export default function LoginPage() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");



  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.includes("@") || password.length < 1) {
      setError("Valid email and password are required.");
    } else {
      setError("");
      alert("Logged in as: " + email);
    }
  };

  return (
    <div className="page-wrapper">
      <div className="topbar">
        <title>Login - SeekInvest</title>
      
      <img
  src="https://app.seekinvest.com/images/coloredLogoIcon.svg"
  alt="SeekInvest Logo"
  className="logo-image"
/>

      </div>

      <div className="signup-content">
        {/* Title with splash crown */}
        <div className="heading-crowned-exact">
          <img
            src="/images/splashLeftIcon.svg"
            alt="Splash Crown"
            className="splash-crown-exact"
          />
          <h1 className="title">Welcome Back to SeekInvest</h1>
        </div>

        <p className="subtitle">
          The platform for growth and engagement, designed for forward-thinking enterprises and financial advisors.
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
          <div className="password-wrapper">
            <input
              id="password"
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              className="input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button
              type="button"
              className="toggle-password"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "🚫" : "👁️"}
            </button>
          </div>

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
};