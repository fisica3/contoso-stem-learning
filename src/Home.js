import React from 'react';
import logo from './Octocat.png';
import './App.css';

function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a 
          className="App-link"
          href="/authenticated/"
        >
        This is gated content.
        </a>
		    <a 
          className="button is-black is-outlined"
          href="/.auth/login/github"
        >
        Please log in with GitHub
        </a>

      </header>
    </div>
  );
}

export default Home;
