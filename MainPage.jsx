//MainPage.jsx

import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Sample.css';

const MainPage = ({ onLogout }) => {
  const navigate = useNavigate();

  const goBack = () => navigate(-1);

  // Call `onLogout` to reset auth and redirect to logout page
  const handleLogout = () => {
    onLogout();
    navigate('/logout');
  };

  return (
    <div className="main-page">
      {/* Vertical Navigation Bar */}
      <div className="navbar">
        
        <Link to="/songlist" className="nav-link">SongList</Link>
        <Link to="/myplaylist" className="nav-link">MyPlaylist</Link>
        <Link to="/favorites" className="nav-link">Favorites</Link> 
        <Link to="/addnewsongs" className="nav-link">Add New</Link>
        <Link to="/newsongs" className="nav-link">New Songs</Link>
        <button className="button" onClick={handleLogout} >Logout</button>
      </div>

      {/* Main Content Area */}
      <div className="content">
        <h1>Welcome to Ongaku Music App</h1>
        <p>
          Ongaku (音楽) means "music" in Japanese, and this app is your one-stop destination for everything music. Whether you want to explore trending tracks, organize your favorite playlists, or enjoy a personalized music experience, Ongaku has it all!
        </p>

        <section className="features">
          <h2>Why Choose Ongaku?</h2>
          <ul>
            <li>🎼 <b>Extensive Song Library:</b> <i>Access thousands of songs from various genres, artists, and languages.</i></li>
            <li>🎧 <b>Personalized Playlists:</b> <i>Create and manage your own playlists to suit your mood.</i></li>
            <li>🔍 <b>Smart Navigation:</b> <i>Effortlessly browse different sections of the app with an intuitive interface.</i></li>
            <li>📈 <b>Trending Songs:</b> <i>Stay updated with the latest and most popular tracks.</i></li>
          </ul>
        </section>

        <section className="how-it-works">
          <h2>How It Works</h2>
          <p>1️⃣ Use the navigation bar to explore different sections of the app.</p>
          <p>2️⃣ Add your favorite songs to your personalized playlist for easy access.</p>
          <p>3️⃣ Enjoy seamless playback of your favorite tracks.</p>
          <p>4️⃣ Log out securely when you're done with your session.</p>
        </section>

        <section className="coming-soon">
          <h2>Coming Soon</h2>
          <p>🌟 <b>Offline Mode:</b> Download songs to listen offline.</p>
          <p>🌟 <b>Recommendations:</b> Get personalized song suggestions based on your preferences.</p>
          <p>🌟 <b>Lyrics Display:</b> Sing along with built-in lyrics support.</p>
        </section>
      </div>
    </div>
  );
};

export default MainPage;
