import React from 'react';

import './HomeScreen.css';
// import fox from '../../Assets/Images/hanged-fox-homepage.png';
import fox from '../../Assets/Images/fox.svg';
import logotype from '../../Assets/Images/logo-lockup.svg';

export default function HomeScreen(props) {
  return (
    <div className='home-screen'>
      <img className='logotype' src={logotype} alt='The Hanged Fox logotype' />
      <embed className='fox' src={fox} />
      <button onClick={() => props.handleScreen('game')}>Start Game</button>
    </div>
  );
};