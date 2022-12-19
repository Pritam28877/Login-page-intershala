import React, { useState } from "react";
import { Link } from "react-router-dom";

function ForgotPasswordForm(props) {
  const [email, setEmail] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    // Send a password reset email to the user's email address
    fetch("/api/forgot-password", {
      method: "POST",
      body: JSON.stringify({
        email: email,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <div className="auth-form-container">
      <form className="register-form" onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />

        <br />
        <button type="submit">Send Password Reset Email</button>
      </form>
      <Link to="/">
        <button className="link-btn">
          Already have an account? Login here.
        </button>
      </Link>
    </div>
  );
}

export default ForgotPasswordForm;
