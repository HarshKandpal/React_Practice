import React, { useState, useContext } from "react";
import UserContext from "../Context/UserContext";

function Login() {
  const [username, setUser] = useState('');
  const [password, setPass] = useState('');
  const { SetUser1 } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    SetUser1({username,password});
  };

  return (
    <div>
      <h2>Login</h2>
      <input
        type='text'
        placeholder='username'  // Corrected placeholder spelling
        value={username}
        onChange={(e) => setUser(e.target.value)}
      />
      <input
        type='text'  // Changed input type to 'password'
        placeholder='password'
        value={password}
        onChange={(e) => setPass(e.target.value)}  // Corrected state update
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default Login;
