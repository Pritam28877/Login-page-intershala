import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function ChangePasswordForm(props) {
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
        <div className="auth-form-container">
            <h2>ChangePassword</h2>
            <form className="changepassword-form" onSubmit={handleSubmit}>

                <label htmlFor="name">OldPassword</label>
                <input type="password" value={oldPassword} onChange={(event) => setOldPassword(event.target.value)} placeholder="OldPassword" />
                <label htmlFor="name">NewPassword</label>
                <input type="password" value={newPassword} onChange={(event) => setNewPassword(event.target.value)} placeholder="NewPassword"/>

                <br />
                <button type="submit">Change Password</button>
            </form>
            <Link to="/"><button className="link-btn" >Already have an account? Login here.</button></Link>
        </div>
    );
}

export default ChangePasswordForm;







