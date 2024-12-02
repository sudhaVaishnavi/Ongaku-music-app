//MyPlaylist.jsx

import React from 'react';

const MyPlaylist = ({ playlist, removeFromPlaylist }) => {
  return (
    <div className="playlist-container">
      <h2>My Playlist</h2>
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
          {playlist.length === 0 ? (
            <tr>
              <td colSpan="4" style={{ textAlign: 'center', padding: '20px' }}>
                Your playlist is empty.
              </td>
            </tr>
          ) : (
            playlist.map((song) => (
              <tr key={song.id}>
                <td>{song.title}</td>
                <td>{song.singer}</td>
                <td>
                  <audio src={song.url} controls className="audio-player" />
                </td>
                <td>
                  <button
                    className="remove-button"
                    onClick={() => removeFromPlaylist(song.id)}
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

export default MyPlaylist;
