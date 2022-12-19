import React, { useState } from 'react';

function ForgotPasswordForm() {
  const [email, setEmail] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    // Send a password reset email to the user's email address
    fetch('/api/forgot-password', {
      method: 'POST',
      body: JSON.stringify({
        email: email
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Email:
        <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} />
      </label>
      <br />
      <button type="submit">Send Password Reset Email</button>
    </form>
  );
}

export default ForgotPasswordForm;
