//Login.jsx

import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = ({ onLoginSuccess }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username && password) {
      axios
        .get('http://localhost:3000/users') // Make sure your JSON server serves "users"
        .then((response) => {
          const users = response.data;
          const user = users.find(
            (u) => u.username === username && u.password === password
          );

          if (user) {
            console.log('Login successful:', user);
            onLoginSuccess();
            navigate('/main'); // Redirect to main page
          } else {
            alert('Invalid username or password');
          }
        })
        .catch((error) => {
          console.error('Error connecting to the server:', error);
        });
    } else {
      alert('Please fill out both fields');
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Username"
        style={styles.input}
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        style={styles.input}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button className="button" style={styles.button} onClick={handleLogin}>
        Login
      </button>
    </div>
  );
};

const styles = {
  input: {
    width: '100%',
    padding: '10px',
    margin: '10px 0',
    borderRadius: '4px',
    border: '1px solid #ccc',
  },
  button: {
    width: '100%',
    padding: '10px',
    backgroundColor: 'navy',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '16px',
  },
};

export default Login;
