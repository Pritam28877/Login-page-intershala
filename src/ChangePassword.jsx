import React, { useState } from 'react';

function ChangePasswordForm() {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    // Verify the old password and update the password to the new one
    fetch('/api/change-password', {
      method: 'POST',
      body: JSON.stringify({
        oldPassword: oldPassword,
        newPassword: newPassword
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
        Old Password:
        <input type="password" value={oldPassword} onChange={(event) => setOldPassword(event.target.value)} />
      </label>
      <br />
      <label>
        New Password:
        <input type="password" value={newPassword} onChange={(event) => setNewPassword(event.target.value)} />
      </label>
      <br />
      <button type="submit">Change Password</button>
    </form>
  );
}

export default ChangePasswordForm;
