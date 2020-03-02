import React from 'react';

import './HomeScreen.css';
import fox from '../../Assets/Images/fox.svg';
import logotype from '../../Assets/Images/logo-lockup.svg';

export default function HomeScreen(props) {
  return (
    <div className='home-screen'>
      <img className='logotype' src={logotype} alt='The Hanged Fox logotype' />
      <embed className='fox' src={fox} />
      <p>
        a hangman game
        <span className='mobile-message'>
          <br />
          <em>for the best experience, please load on a mobile device.</em>
        </span>
      </p>
      <button onClick={() => props.handleScreen('game')}>Start</button>
    </div>
  );
};