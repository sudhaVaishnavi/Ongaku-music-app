//NewSongs.jsx

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './sample.css'; // Styling remains the same

const NewSongs = () => {
  const [songs, setSongs] = useState([]);
  const [query, setQuery] = useState('');
  const [popupMessage, setPopupMessage] = useState('');
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  // Fetch Songs from db.json
  useEffect(() => {
    fetchSongs();
  }, []);

  const fetchSongs = async () => {
    try {
      const response = await axios.get('http://localhost:5000/songs');
      setSongs(response.data);
    } catch (error) {
      console.error('Error fetching songs from db.json:', error);
    }
  };

  // Handle Remove Song
  const handleRemoveSong = async (songId) => {
    try {
      await axios.delete(`http://localhost:5000/songs/${songId}`);
      showPopup('Song removed successfully!');
      fetchSongs(); // Refresh the song list
    } catch (error) {
      console.error('Error removing song:', error);
      showPopup('Failed to remove song.');
    }
  };

  // Show Popup Message
  const showPopup = (message) => {
    setPopupMessage(message);
    setIsPopupVisible(true);
    setTimeout(() => {
      setIsPopupVisible(false);
    }, 3000);
  };

  // Filter Songs Based on Query
  const filteredSongs = songs.filter(
    (song) =>
      song.title.toLowerCase().includes(query.toLowerCase()) ||
      song.singer.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="song-list-container">
      <h2 className="heading">Songs from Database</h2>
      <input
        type="text"
        className="search-bar"
        placeholder="Search for songs..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <div className="song-list">
        {filteredSongs.map((song) => (
          <div key={song.id} className="song-item">
            <img src={song.img} alt={song.title} className="song-image" />
            <div className="song-details">
              <h3>{song.title}</h3>
              <p>{song.singer}</p>
              <audio src={song.url} controls className="audio-player" />
              <div className="song-actions">
                <button
                  onClick={() => handleRemoveSong(song.id)}
                  className="add-button remove-button"
                >
                  ❌ Remove
                </button>
              </div>
            </div>
          </div>
        ))}
        {filteredSongs.length === 0 && <p className="no-results">No songs match your search.</p>}
      </div>
      {isPopupVisible && (
  <div className={`popup ${isPopupVisible ? 'show' : ''}`}>
    <p>{popupMessage}</p>
  </div>
)}
    </div>
  );
};

export default NewSongs;
