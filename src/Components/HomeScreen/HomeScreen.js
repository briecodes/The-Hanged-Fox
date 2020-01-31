import React from 'react';

import './HomeScreen.css';

export default function HomeScreen(props) {
  return (
    <button onClick={() => props.handleScreen('game')}>Start Game</button>
  );
};