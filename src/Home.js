// export function Home() {
//     return (
//       <h1>Welcome to the Movie Info App </h1>
//     );
//   }
  import React from 'react';
import './Home.css'; // You can style your components using CSS

// Import your logo image
import logo from './images/movie_app_logo.png';

export function Home() {
  return (
    <div className="container">
      <header className="header">
        <img className="logo" src={logo} alt="Movie Info App Logo" />
      </header>
      <footer className="footer">
        <p>&copy; 2023 Movie Info App. All rights reserved.</p>
      </footer>
    </div>
  );
}

