//App.jsx

import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate, useLocation } from 'react-router-dom';
import Login from './Login';
import Signup from './Signup';
import MainPage from './MainPage';
import Logout from './Logout';
import SongList from './SongList';
import MyPlaylist from './MyPlaylist';
import Favorites from './Favorites';
import AddNewSongs from './addNewSongs';
import NewSongs from './NewSongs'; 
import predefinedSongs from './data';
import './Sample.css';

const App = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [playlist, setPlaylist] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [songs, setSongs] = useState([]);

  const toggleForm = () => setIsLogin(!isLogin);
  const handleLoginSuccess = () => setIsAuthenticated(true);
  const handleLogout = () => setIsAuthenticated(false);

  const addToPlaylist = (song) => {
    setPlaylist((prev) => [...prev, song]);
  };

  const removeFromPlaylist = (id) => {
    setPlaylist((prev) => prev.filter((song) => song.id !== id));
  };

  const addToFavorites = (song) => {
    setFavorites((prev) => [...prev, song]);
  };

  const removeFromFavorites = (id) => {
    setFavorites((prev) => prev.filter((song) => song.id !== id));
  };

  useEffect(() => {
    const fetchSongs = async () => {
      try {
        const response = await fetch('http://localhost:5000/songs');
        const fetchedSongs = await response.json();
        setSongs([...predefinedSongs, ...fetchedSongs]);
      } catch (error) {
        console.error('Error fetching songs:', error);
        setSongs(predefinedSongs);
      }
    };
    fetchSongs();
  }, []);

  return (
    <Router>
      <DynamicBackground>
        <Routes>
          <Route
            path="/"
            element={
              isAuthenticated ? (
                <Navigate to="/main" replace />
              ) : (
                <div className="form-container">
                  {isLogin ? (
                    <>
                      <h1>Login</h1>
                      <Login onLoginSuccess={handleLoginSuccess} />
                      <button className="button" onClick={toggleForm} >
                        Go to Signup
                      </button>
                    </>
                  ) : (
                    <>
                      <h1>Signup</h1>
                      <Signup />
                      <button onClick={toggleForm} className="button">
                        Go to Login
                      </button>
                    </>
                  )}
                </div>
              )
            }
          />
          <Route path="/main" element={<MainPage onLogout={handleLogout} />} />
          <Route path="/logout" element={<Logout />} />
          <Route
            path="/songlist"
            element={
              <SongList
                songs={songs}
                addToPlaylist={addToPlaylist}
                addToFavorites={addToFavorites}
              />
            }
          />
          <Route
            path="/myplaylist"
            element={<MyPlaylist playlist={playlist} removeFromPlaylist={removeFromPlaylist} />}
          />
          <Route
            path="/favorites"
            element={<Favorites favorites={favorites} removeFromFavorites={removeFromFavorites} />}
          />
          <Route path="/addnewsongs" element={<AddNewSongs />} />
          <Route path="/newsongs" element={<NewSongs />} /> 
        </Routes>
      </DynamicBackground>
    </Router>
  );
};

const DynamicBackground = ({ children }) => {
  const location = useLocation();
  const backgroundClass = location.pathname === '/' ? 'login-bg' : 'default-bg';
  return <div className={`app-container ${backgroundClass}`}>{children}</div>;
};

export default App;
