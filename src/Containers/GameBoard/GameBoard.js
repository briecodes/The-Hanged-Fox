import React, {useState, useRef} from 'react';

import './GameBoard.css';

import HelpOverlay from '../../Components/HelpOverlay/HelpOverlay';
import Nav from '../../Components/Nav/Nav';
import HangedFox from '../../Components/HangedFox/HangedFox';
import MysteryWord from '../../Components/MysteryWord/MysteryWord';
import LetterBank from '../../Components/LetterBank/LetterBank';
import HintOverlay from '../../Components/HintOverlay/HintOverlay';
import Tries from '../../Components/Tries/Tries';

export default function GameBoard(props) {
  const [helpOverlay, setHelpOverlay] = useState(false);
  const [usedBank, setUsedBank] = useState([]);
  const [showHint, setShowHint] = useState(false);
  const [gameEnd, setGameEnd] = useState({end: false, won: null});
  const incorrectCount = useRef();
  const correctCount = useRef();
  const word = 'success';
  const hint = 'The blood is rare and sweet as cherry wine.';

  function handleLetterPress(letter) {
    setUsedBank([...usedBank, letter]);

    if (!word.includes(letter)) {
      if (!incorrectCount.current) incorrectCount.current = 0;
      incorrectCount.current = incorrectCount.current + 1;
      if (5 <= incorrectCount.current) setGameEnd({end: true, won: false});
    } else {
      if (!correctCount.current) correctCount.current = 0;
      correctCount.current = correctCount.current + 1;
      if (wordLength() === correctCount.current) setGameEnd({end: true, won: true});
    };
  };

  function resetGame() {
    setUsedBank([]);
    setShowHint(false);
    setGameEnd({end: false, won: null});
    incorrectCount.current = 0;
  };

  function wordLength() {
    const arr = word.split('');
    const finalArr = Array.from(new Set(arr));

    return finalArr.length;
  };

  function handleHelpOverlay() {
    props.setShowInstructions(false);
    setHelpOverlay(!helpOverlay);
  };

  return (
    <div className='game-board'>
      <Nav home={() => props.goHome('home')} help={() => setHelpOverlay(true)} />
      <Tries tries={incorrectCount.current} />

      {/* {helpOverlay || props.showInstructions ? <HelpOverlay closeOverlay={handleHelpOverlay} /> : null} */}
      <HelpOverlay closeOverlay={handleHelpOverlay} showOverlay={helpOverlay || props.showInstructions} />

      <HangedFox stage={incorrectCount.current} />
      <MysteryWord word={word} usedBank={usedBank} />
      
      { gameEnd.end && !gameEnd.won ? <div className='endgame-message'>You Lose!!</div> : null}
      { gameEnd.won ? <div className='endgame-message'>Congrats!</div> : null }
      { !gameEnd.end ? <LetterBank handleLetterPress={handleLetterPress} word={word} usedBank={usedBank} /> : null}

      <div className='hint-container'>
        { !gameEnd.end ? <button className='hint' onClick={() => setShowHint(true)}>Hint</button> : <button className='hint' onClick={resetGame}>Play Again</button> }
        <HintOverlay hint={hint} closeHandler={() => setShowHint(false)} showHint={showHint} />
      </div>
    </div>
  );
};