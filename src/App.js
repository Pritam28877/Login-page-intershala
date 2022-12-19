import React, { useState } from "react";
import './App.css';
import { Login } from "./Login";
import { Register } from "./Register";
import ChangePasswordForm from "./ChangePassword";

function App() {
  const [currentForm, setCurrentForm] = useState('login');

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }

  return (
    <div className="App">
      {/* {
        currentForm === "login" ? <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} />
      } */}
      <ChangePasswordForm/>
    </div>
  );
}

export default App;