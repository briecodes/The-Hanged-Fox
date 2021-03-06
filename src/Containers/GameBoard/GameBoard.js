import React, {useState, useRef, useEffect} from 'react';

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
  const [gameWord, setGameWord] = useState({word: undefined, hint: undefined});
  const incorrectCount = useRef();
  const correctCount = useRef();
  const word = useRef();
  const hint = useRef();

  useEffect(() => {
    fetchWordApi();
  }, []);

  function handleLetterPress(letter) {
    setUsedBank([...usedBank, letter]);

    if (!word.current.includes(letter)) {
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
    correctCount.current = 0;
    setGameWord({word: undefined, hint: undefined});
    fetchWordApi();
  };

  function wordLength() {
    const arr = word.current.split('');
    const finalArr = Array.from(new Set(arr));

    return finalArr.length;
  };

  function handleHelpOverlay() {
    props.setShowInstructions(false);
    setHelpOverlay(!helpOverlay);
  };

  function fetchWordApi() {
    fetch('https://wordsapiv1.p.rapidapi.com/words/?random=true', {
      'method': 'GET',
      'headers': {
        'x-rapidapi-host': 'wordsapiv1.p.rapidapi.com',
        'x-rapidapi-key': '46fac88d67msh5d61d8e332a2b09p178748jsn53951fc968fc'
      }
    })
    .then( response => response.json() )
    .then(res => {
      if (res.word.length > 12) {
        fetchWordApi();
        return;
      };

      word.current = res.word;
      if (res.results) {
        hint.current = res.results[0].definition;
        setGameWord({word: res.word, hint: res.results[0].definition});
      } else {
        hint.current = 'No hint for you!!';
        setGameWord({word: res.word, hint: 'No hint for you!!'});
      };
      
    })
    .catch(err => {
      console.log('fetch error: ', err);
    });
  };

  return (
    <div className='game-board'>
      <Nav home={() => props.goHome('home')} help={() => setHelpOverlay(true)} />
      <Tries tries={incorrectCount.current} />

      <HelpOverlay closeOverlay={handleHelpOverlay} showOverlay={helpOverlay || props.showInstructions} />

      <HangedFox stage={incorrectCount.current} />
      {gameWord ? <MysteryWord word={gameWord.word} usedBank={usedBank} gameStatus={gameEnd} /> : null}
      
      { gameEnd.end && !gameEnd.won ? <div className='endgame-message'>You Lose!!</div> : null}
      { gameEnd.won ? <div className='endgame-message'>Congrats!</div> : null }
      { !gameEnd.end && gameWord ? <LetterBank handleLetterPress={handleLetterPress} word={gameWord.word} usedBank={usedBank} /> : null}

      <div className='hint-container'>
        { !gameEnd.end ? <button className='hint' onClick={() => setShowHint(true)}>Hint</button> : <button className='hint' onClick={resetGame}>Play Again</button> }
        {hint.current ? <HintOverlay hint={hint.current} closeHandler={() => setShowHint(false)} showHint={showHint} /> : null}
      </div>
    </div>
  );
};