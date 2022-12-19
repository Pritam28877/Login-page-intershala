import React, { useState } from "react";
import logo from './logo.svg';
import './App.css';
import { Login } from "./Login";
import { Register } from "./Register";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ForgotPasswordForm from "./ForgotPasswordForm";
import ChangePasswordForm from "./ChangePassword";


function App() {
  return (
    <div className="App">

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/ForgotPasswordForm" element={<ForgotPasswordForm />} />
        <Route path="/ChangePasswordForm" element={<ChangePasswordForm />} />

      </Routes>

    </div>
  );
}

export default App;