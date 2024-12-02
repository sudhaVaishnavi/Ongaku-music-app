// //Favorites.jsx

import React from 'react';

const Favorites = ({ favorites, removeFromFavorites }) => {
  return (
    
    <div className="favorites-container">
      <h2>Your Favorites</h2>
      <table className="song-table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Singer</th>
            <th>Audio</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {favorites.length === 0 ? (
            <tr>
              <td colSpan="4" style={{ textAlign: 'center', padding: '20px' }}>
                Your favorites list is empty.
              </td>
            </tr>
          ) : (
            favorites.map((song) => (
              <tr key={song.id}>
                <td>{song.title}</td>
                <td>{song.singer}</td>
                <td>
                  <audio src={song.url} controls className="audio-player" />
                </td>
                <td>
                  <button
                    className="remove-button"
                    onClick={() => removeFromFavorites(song.id)}
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Favorites;
