"use client";
import { useState } from "react";
import "./signup.css";

export default function SignupPage() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.includes("@")) {
      setError("Please enter a valid email address.");
    } else {
      setError("");
      alert("Signed up with: " + email);
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
        <div className="heading-crowned-exact">
          <h1 className="title">
            <span className="w-wrapper">
              <img
                src="/images/vectorLinesDarkIcon.svg"
                alt="Splash Crown"
                className="vector-lines-dark-icon"
              />
              W
            </span>
            elcome to SeekInvest
          </h1>
        </div>

        <p className="subtitle">
          Sign up to access powerful tools for financial advisors and growing businesses.
        </p>

        <form onSubmit={handleSubmit} className="form">
          <label className="input-label">Email</label>
          <input
            type="email"
            className={`input ${error ? "input-error" : ""}`}
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          {error && <p className="error-text">{error}</p>}

          <button type="submit" className="submit-btn">
            Continue with Email
          </button>
        </form>

        <p className="login-text">
          Already have an account? <a href="/login">Log In</a>
        </p>

        <p className="links">
          <a href="#">Terms of Use</a> and <a href="#">Privacy Policy</a>
        </p>
      </div>
    </div>
  );
}
