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
  const incorrectCount = useRef();
  const correctCount = useRef();
  const word = 'success';
  const hint = 'The blood is rare and sweet as cherry wine.';

  function handleLetterPress(letter) {
    setUsedBank([...usedBank, letter]);

    if (!word.includes(letter)) {
      if (!incorrectCount.current) incorrectCount.current = 0;
      incorrectCount.current = incorrectCount.current + 1;
      if (5 <= incorrectCount.current) setReset(true);
    } else {
      if (!correctCount.current) correctCount.current = 0;
      correctCount.current = correctCount.current + 1;
      if (word.length === correctCount.current) setReset(true);
    };
  };

  function resetGame() {
    setUsedBank([]);
    setShowHint(false);
    setReset(false);
    incorrectCount.current = 0;
  };

  return (
    <div className='game-board'>
      <Nav home={() => props.goHome('home')} help={() => setHelpOverlay(true)} />

      {helpOverlay ? <HelpOverlay closeOverlay={setHelpOverlay} /> : null}

      <HangedFox stage={incorrectCount.current} />
      <MysteryWord word={word} usedBank={usedBank} />
      
      { 5 <= incorrectCount.current ? <div>You Lose!!</div> : <LetterBank handleLetterPress={handleLetterPress} word={word} usedBank={usedBank} />}

      <div className='hint-container'>
        { !reset ? <button className='hint' style={{display: showHint ? 'none' : 'unset'}} onClick={() => setShowHint(true)}>Hint</button> : <button className='hint' onClick={resetGame}>Play Again</button> }
        { showHint ? <p>{hint}</p> : null }
      </div>
    </div>
  );
};