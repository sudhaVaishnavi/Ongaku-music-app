// Logout.jsx
import React from 'react';

const Logout = () => {
  // Logic to clear user authentication state (if needed)
  const handleLogout = () => {
    // For example, clearing user data from localStorage/sessionStorage
    localStorage.removeItem('user');
    sessionStorage.removeItem('user');
    // You can also redirect or show a message after logout
    window.location.href = "/"; // Redirect to home or login page after logout
  };

  return (
    <div style={styles.container}>
      <h1>You have been logged out</h1>
      <button className="button" onClick={handleLogout} style={styles.button}>
        Go to Login
      </button>
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    padding: '20px',
  },
  button: {
    padding: '10px 20px',
    backgroundColor: 'navy', // Navy blue
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '16px',
  },

};

export default Logout;
