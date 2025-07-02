"use client";
import { useState } from "react";
import "./signup.css";

export default function SignUpPage() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      setError("Required email");
    } else {
      setError("");
      alert("Email submitted: " + email);
    }
  };

  return (
    <div className="page-wrapper">
      <div className="topbar">
        <span className="logo-symbol">🔷</span>
        <span className="logo-name">SeekInvest</span>
      </div>

      <div className="signup-content">
        <div className="splash-wrapper">
          <img
            src="/images/vectorLinesDarkIcon.svg"
            alt="Decorative Splash"
            className="splash-topright"
          />
        </div>

        <h1 className="title">Welcome to SeekInvest</h1>
        <p className="subtitle">
          The platform for growth and engagement, designed for forward-thinking
          enterprises and financial advisors.
        </p>

        <form onSubmit={handleSubmit} className="form">
          <label htmlFor="email" className="input-label">
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="Enter your email"
            className={`input ${error ? "input-error" : ""}`}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          {error && <p className="error-text">{error}</p>}

          <button type="submit" className="submit-btn">
            Continue with Email
          </button>
        </form>

        {/* ✅ Linked text to /login */}
        <p className="login-text">
          Already have an account? <a href="/login">Login</a>
        </p>

        <p className="links">
          <a href="#">Terms of Use</a> and <a href="#">Privacy Policy</a>
        </p>
      </div>
    </div>
  );
}
