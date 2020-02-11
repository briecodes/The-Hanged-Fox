import React from 'react';

import './MysteryWord.css';

export default function MysteryWord(props) {

  function wordArray() {
    const newArray = [];
    for (const l of props.word) {
      newArray.push(l);
    };

    return newArray
  };

  function checkLetter(l) {
    return props.usedBank.find(letter => letter === l) ? true : false;
  };

  return (
    <div className='mystery-word-container'>
      {props.word ? wordArray().map((l, index) => 
        <div
          key={index}
          data-letter={l}
          className={`${l === ' ' || l === '-' ? 'dash-tile' : 'blank-tile'} ${checkLetter(l) ? 'uncovered' : props.gameStatus.end ? 'not-found' : ''}`}
        >
            {l}
        </div>)
      : null}
    </div>
  );
};