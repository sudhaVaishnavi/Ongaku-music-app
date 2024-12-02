// //Signup.jsx

import React, { useState } from 'react';
import axios from 'axios';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if fields are empty
    if (!username || !password) {
      setError('Both fields are required.');
      return;
    }

    try {
      // Fetch existing users to check for duplicates
      const response = await axios.get('http://localhost:3000/users');
      const users = response.data;

      const userExists = users.some((user) => user.username === username);

      if (userExists) {
        setError('Username already exists.');
        setSuccess('');
      } else {
        // Add new user to the database
        const newUser = { username, password };
        await axios.post('http://localhost:3000/users', newUser);

        setSuccess('Signup successful!');
        setError('');
        setUsername('');
        setPassword('');
      }
    } catch (err) {
      console.error('Error signing up:', err);
      setError('An error occurred. Please try again later.');
    }
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <h2>New User? Signup!!</h2>
      {error && <p style={styles.error}>{error}</p>}
      {success && <p style={styles.success}>{success}</p>}
      <div style={styles.inputContainer}>
        <label>Username:</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          style={styles.input}
        />
      </div>
      <div style={styles.inputContainer}>
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={styles.input}
        />
      </div>
      <button className="button" type="submit">
        Signup
      </button>
    </form>
  );
};

const styles = {
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  inputContainer: {
    marginBottom: '10px',
  },
  input: {
    width: '100%',
    padding: '8px',
    margin: '5px 0',
  },
  button: {
    padding: '10px',
    backgroundColor: 'navy',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  error: {
    color: 'red',
  },
  success: {
    color: 'green',
  },
};

export default Signup;
