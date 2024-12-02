// //SongList.jsx

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './sample.css';
import predefinedSongs from './data.jsx'; // Import predefined songs

const SongList = ({ addToPlaylist, addToFavorites }) => {
  const [query, setQuery] = useState('');
  const [popupMessage, setPopupMessage] = useState('');
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [songs, setSongs] = useState([]); // State to hold songs fetched from db.json

  // Fetch songs from db.json
  useEffect(() => {
    const fetchSongs = async () => {
      try {
        const response = await axios.get('http://localhost:5000/songs');
        setSongs(response.data); // Set fetched songs
      } catch (error) {
        console.error('Error fetching songs from db.json:', error);
      }
    };
    fetchSongs();
  }, []);

  return (
    <div className="song-list-container">
      <h2 className="heading">Song List</h2>
      <input
        type="text"
        className="search-bar"
        placeholder="Search for songs..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      {/* Render the filtered songs from predefinedSongs */}
      <div className="song-list">
        {predefinedSongs
          .filter(
            (song) =>
              song.title.toLowerCase().includes(query.toLowerCase()) ||
              song.singer.toLowerCase().includes(query.toLowerCase())
          )
          .map((song) => (
            <div key={song.id || song.title} className="song-item">
              <img src={song.img} alt={song.title} className="song-image" />
              <div className="song-details">
                <h3>{song.title}</h3>
                <p>{song.singer}</p>
                <audio src={song.url} controls className="audio-player" />
                <div className="song-actions">
                  <button
                    onClick={() => {
                      addToPlaylist(song);
                      setPopupMessage(`"${song.title}" added to Playlist!`);
                      setIsPopupVisible(true);
                      setTimeout(() => setIsPopupVisible(false), 3000);
                    }}
                    className="add-button playlist-button"
                  >
                    🎶 Add to Playlist
                  </button>
                  <button
                    onClick={() => {
                      addToFavorites(song);
                      setPopupMessage(`"${song.title}" added to Favorites!`);
                      setIsPopupVisible(true);
                      setTimeout(() => setIsPopupVisible(false), 3000);
                    }}
                    className="add-button favorite-button"
                  >
                    ❤️ Add to Favorites
                  </button>
                </div>
              </div>
            </div>
          ))}

        {/* Render the filtered songs from fetched songs (db.json) */}
        {songs
          .filter(
            (song) =>
              song.title.toLowerCase().includes(query.toLowerCase()) ||
              song.singer.toLowerCase().includes(query.toLowerCase())
          )
          .map((song) => (
            <div key={song.id || song.title} className="song-item">
              <img src={song.img} alt={song.title} className="song-image" />
              <div className="song-details">
                <h3>{song.title}</h3>
                <p>{song.singer}</p>
                <audio src={song.url} controls className="audio-player" />
                <div className="song-actions">
                  <button
                    onClick={() => {
                      addToPlaylist(song);
                      setPopupMessage(`"${song.title}" added to Playlist!`);
                      setIsPopupVisible(true);
                      setTimeout(() => setIsPopupVisible(false), 3000);
                    }}
                    className="add-button playlist-button"
                  >
                    🎶 Add to Playlist
                  </button>
                  <button
                    onClick={() => {
                      addToFavorites(song);
                      setPopupMessage(`"${song.title}" added to Favorites!`);
                      setIsPopupVisible(true);
                      setTimeout(() => setIsPopupVisible(false), 3000);
                    }}
                    className="add-button favorite-button"
                  >
                    ❤️ Add to Favorites
                  </button>
                </div>
              </div>
            </div>
          ))}

        {/* If no songs are found in both predefined and fetched lists */}
        {predefinedSongs.filter(
          (song) =>
            song.title.toLowerCase().includes(query.toLowerCase()) ||
            song.singer.toLowerCase().includes(query.toLowerCase())
        ).length === 0 &&
        songs.filter(
          (song) =>
            song.title.toLowerCase().includes(query.toLowerCase()) ||
            song.singer.toLowerCase().includes(query.toLowerCase())
        ).length === 0 ? (
          <p className="no-results">No songs match your search.</p>
        ) : null}
      </div>

      {/* Popup message */}
      {isPopupVisible && (
        <div className={`popup ${isPopupVisible ? 'show' : ''}`}>
          <p>{popupMessage}</p>
        </div>
      )}
    </div>
  );
};

export default SongList;
