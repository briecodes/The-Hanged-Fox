import React from 'react';

import './HomeScreen.css';
import fox from '../../Assets/Images/hanged-fox-homepage.png';
import logotype from '../../Assets/Images/logotype.svg';

export default function HomeScreen(props) {
  return (
    <div className='home-screen'>
      <img className='logotype' src={logotype} alt='The Hanged Fox logotype' />
      <img className='fox' src={fox} alt='Fox graphic' />
      <button onClick={() => props.handleScreen('game')}>Start Game</button>
    </div>
  );
};