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

  return (
    <div className='mystery-word-container'>
      {wordArray().map((l, index) => <div key={index} className={`blank-tile ${props.tf ? 'uncovered' : null}`} data-letter={l}>{l}</div>)}
    </div>
  );
};