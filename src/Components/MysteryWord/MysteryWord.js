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
      {props.word ? wordArray().map((l, index) => <div key={index} className={`blank-tile ${checkLetter(l) ? 'uncovered' : null}`} data-letter={l}>{l}</div>) : null}
    </div>
  );
};