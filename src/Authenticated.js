import React from 'react';
import './App.css';
import './hero.css';

function Authenticated() {
  return (
    <div className="App">
      <div class="intro column is-8 is-offset-2">
                <h2 class="title">Welcome to your gated content demo!</h2><br/>
                <p class="subtitle">Thank you for logging in.</p>
      </div>
    </div>
  );
}

export default Authenticated;
