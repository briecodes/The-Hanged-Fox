import React, {useState, useRef} from 'react';

import './GameBoard.css';

import HelpOverlay from '../../Components/HelpOverlay/HelpOverlay';
import MysteryWord from '../../Components/MysteryWord/MysteryWord';
import LetterBank from '../../Components/LetterBank/LetterBank';

export default function GameBoard(props) {
  const [helpOverlay, setHelpOverlay] = useState(true);
  const [usedBank, setUsedBank] = useState([]);
  const incorrect = useRef();
  const tries = useRef();
  const word = 'success';

  function handleLetterPress(letter) {
    setUsedBank([...usedBank, letter]);

    if (!word.includes(letter)) {
      if (!incorrect.current) incorrect.current = 0;
      incorrect.current = incorrect.current + 1;
    } else {
      if (!tries.current) tries.current = 0;
      tries.current = tries.current + 1;
    };
  };

  return (
    <div className='game-board'>

      <div className='nav'>
        <div className='nav-btn home' onClick={() => props.goHome('home')}></div>
        <div className='nav-btn help' onClick={() => setHelpOverlay(true)}></div>
      </div>

      {helpOverlay ? <HelpOverlay closeOverlay={setHelpOverlay} /> : null}
      <MysteryWord word={word} usedBank={usedBank} />
      { word.length <= incorrect.current ? <div>You Lose!!</div> : <LetterBank handleLetterPress={handleLetterPress} word={word} usedBank={usedBank} />}
    </div>
  );
};