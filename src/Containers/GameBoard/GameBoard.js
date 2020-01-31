import React, {useState} from 'react';

import './GameBoard.css';

import HelpOverlay from '../../Components/HelpOverlay/HelpOverlay';

export default function GameBoard(props) {
  const [helpOverlay, setHelpOverlay] = useState(true);

  return (
    <div className='game-board'>
      {helpOverlay ? <HelpOverlay closeOverlay={setHelpOverlay} /> : null}
      <div className='nav'>
        <div className='nav-btn home' onClick={() => props.goHome('home')}></div>
        <div className='nav-btn help' onClick={() => setHelpOverlay(true)}></div>
      </div>
    </div>
  );
};