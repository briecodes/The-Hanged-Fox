import React, {useState} from 'react';

import './GameBoard.css';

import HelpOverlay from '../../Components/HelpOverlay/HelpOverlay';

export default function GameBoard() {
  const [helpOverlay, setHelpOverlay] = useState(true);

  return (
    <div className='game-board'>
      {helpOverlay ? <HelpOverlay closeOverlay={setHelpOverlay} /> : null}
    </div>
  );
};