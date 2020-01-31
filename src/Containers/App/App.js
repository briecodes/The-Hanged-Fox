import React, { useState } from 'react';
import './App.css';

import HomeScreen from '../../Components/HomeScreen/HomeScreen';

function App() {
  const [appProgression, setAppProgression] = useState('home');

  function changeScreen(n) {
    setAppProgression(n);
  };

  return (
    <div className="App">
      {appProgression === 'home' ? <HomeScreen handleScreen={changeScreen} /> : null}
    </div>
  );
}

export default App;
