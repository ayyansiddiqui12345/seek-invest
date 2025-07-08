"use client";
import { useState } from "react";
import "../signup/signup.css"; // reuse same CSS

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      setError("Please enter a valid email address.");
    } else {
      setError("");
      setSubmitted(true);
    }
  };

  return (
    <div className="page-wrapper">
      <div className="topbar">
      <title>Forgot Password - SeekInvest</title>
      <img
  src="https://app.seekinvest.com/images/coloredLogoIcon.svg"
  alt="SeekInvest Logo"
  className="logo-image"
/>
      </div>

      <div className="signup-content">
        <div className="heading-crowned-exact">
          <h1 className="title">
           
              Reset your Password
          </h1>
        </div>

        <p className="subtitle">
          Enter your email and we'll send you a link to reset your password.
        </p>

        {submitted ? (
          <p className="subtitle" style={{ color: "#22c55e", fontWeight: "500" }}>
            ✅ Reset link sent to <strong>{email}</strong>. Please check your inbox.
          </p>
        ) : (
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
            {error && <p className="error-text">{error}</p>}
            <button type="submit" className="submit-btn">
              Send Reset Link
            </button>
          </form>
        )}

        <p className="login-text">
          <a href="/login">Back to Login</a>
        </p>
      </div>
    </div>
  );
}
