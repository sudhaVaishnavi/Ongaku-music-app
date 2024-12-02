//addNewSongs.jsx

import React, { useState } from 'react';
import axios from 'axios';

const AddNewSongs = ({ onAddSong }) => {
  const [songName, setSongName] = useState('');
  const [singerName, setSingerName] = useState('');
  const [songImageUrl, setSongImageUrl] = useState('');
  const [audioFileUrl, setAudioFileUrl] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation: Ensure all fields are filled
    if (!songName || !singerName || !songImageUrl || !audioFileUrl) {
      alert('Please fill all the fields');
      return;
    }

    // Create new song object
    const newSong = {
      title: songName,
      singer: singerName,
      img: songImageUrl, // Use URL for image
      url: audioFileUrl, // Use URL for audio
    };

    try {
      const response = await axios.post('http://localhost:5000/songs', newSong);

      // Check the response status
      if (response.status === 201) {
        onAddSong(newSong); // Optionally update local state in parent component
        alert('Song added successfully!');
      } else {
        console.warn('Unexpected response:', response);
        alert('Song was added, but there was an issue with the response.');
      }
    } catch (error) {
      console.error('Full error details:', error);
      if (error.response) {
        alert(`Server Error: ${error.response.status} - ${error.response.statusText}`);
      } else if (error.request) {
        alert('No response received from the server.');
      } else {
        alert('Song added successfully!');
        
      }
    }
    

    // Reset form fields
    setSongName('');
    setSingerName('');
    setSongImageUrl('');
    setAudioFileUrl('');
  };

  return (
    <div className="add-song-container">
      <h2>Add New Song</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Song Name:</label>
          <input
            type="text"
            value={songName}
            onChange={(e) => setSongName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Singer Name:</label>
          <input
            type="text"
            value={singerName}
            onChange={(e) => setSingerName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Song Image URL:</label>
          <input
            type="url"
            value={songImageUrl}
            onChange={(e) => setSongImageUrl(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Audio File URL:</label>
          <input
            type="url"
            value={audioFileUrl}
            onChange={(e) => setAudioFileUrl(e.target.value)}
            required
          />
        </div>
        <button type="submit">Add Song</button>
      </form>
    </div>
  );
};

export default AddNewSongs;
