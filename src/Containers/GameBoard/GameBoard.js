import React, {useState, useRef} from 'react';

import './GameBoard.css';

import HelpOverlay from '../../Components/HelpOverlay/HelpOverlay';
import Nav from '../../Components/Nav/Nav';
import HangedFox from '../../Components/HangedFox/HangedFox';
import MysteryWord from '../../Components/MysteryWord/MysteryWord';
import LetterBank from '../../Components/LetterBank/LetterBank';

export default function GameBoard(props) {
  const [helpOverlay, setHelpOverlay] = useState(true);
  const [usedBank, setUsedBank] = useState([]);
  const [showHint, setShowHint] = useState(false);
  const [reset, setReset] = useState(false);
  const incorrect = useRef();
  const word = 'success';
  const hint = 'The blood is rare and sweet as cherry wine.';

  function handleLetterPress(letter) {
    setUsedBank([...usedBank, letter]);

    if (!word.includes(letter)) {
      if (!incorrect.current) incorrect.current = 0;
      incorrect.current = incorrect.current + 1;
      if (5 <= incorrect.current) setReset(true);
    };
  };

  return (
    <div className='game-board'>
      <Nav home={() => props.goHome('home')} help={() => setHelpOverlay(true)} />

      {helpOverlay ? <HelpOverlay closeOverlay={setHelpOverlay} /> : null}

      <HangedFox stage={incorrect.current} />
      <MysteryWord word={word} usedBank={usedBank} />
      
      { 5 <= incorrect.current ? <div>You Lose!!</div> : <LetterBank handleLetterPress={handleLetterPress} word={word} usedBank={usedBank} />}

      <div className='hint-container'>
        { !reset ? <button className='hint' style={{display: showHint ? 'none' : 'unset'}} onClick={() => setShowHint(true)}>Hint</button> : <button className='hint'>Play Again</button> }
        { showHint ? <p>{hint}</p> : null }
      </div>
    </div>
  );
};