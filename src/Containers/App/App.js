import React, { useState } from 'react';
import './App.css';

import HomeScreen from '../../Components/HomeScreen/HomeScreen';
import GameBoard from '../GameBoard/GameBoard';

function App() {
  const [appProgression, setAppProgression] = useState('home');
  const [showInstructions, setShowInstructions] = useState(true);

  function changeScreen(n) {
    setAppProgression(n);
  };

  return (
    <div className="App">
      {appProgression === 'home' ? <HomeScreen handleScreen={changeScreen} /> : null}
      {appProgression === 'game' ? <GameBoard goHome={changeScreen} showInstructions={showInstructions} setShowInstructions={setShowInstructions} /> : null}
    </div>
  );
}

export default App;
