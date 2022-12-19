import React, { useState } from "react";

export const Register = (props) => {
    const [email, setEmail] = useState('');
    const [phone, setPhone]=useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('/api/register', {
            method: 'POST',
            body: JSON.stringify({
              name: name,
              phone: phone,
              email: email,
              address: address
            }),
            headers: {
              'Content-Type': 'application/json'
            }
          })
            .then((response) => response.json())
            .then((data) => {
              console.log(data);
            });
    }

    return (
        <div className="auth-form-container">
            <h2>Register</h2>
        <form className="register-form" onSubmit={handleSubmit}>
            <label htmlFor="name">Full name</label>
            <input value={name} name="name" onChange={(e) => setName(e.target.value)} id="name" placeholder="full Name" />
            <label htmlFor="name">Phone Number</label>
            <input value={phone} name="name" onChange={(e) => setPhone(e.target.value)} placeholder="Phone Number" />
            <label htmlFor="email">email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" id="email" name="email" />
            <label htmlFor="password">password</label>
            <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
            <label htmlFor="name">Address</label>
            <input value={address} name="name" onChange={(e) => setAddress(e.target.value)} placeholder="Address" />
            <button type="submit">Log In</button>
        </form>
        <button className="link-btn" onClick={() => props.onFormSwitch('login')}>Already have an account? Login here.</button>
    </div>
    )
}