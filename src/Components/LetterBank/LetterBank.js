import React from 'react';

import './LetterBank.css';

export default function LetterBank(props) {
  const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

  function letterPress(e) {
    props.word.includes(e.target.dataset.letter) ? e.target.classList.add('used') : e.target.classList.add('incorrect');
    props.handleLetterPress(e.target.dataset.letter);
  };

  return (
    <div className='letter-bank'>
      {alphabet.map(l => <div key={l} data-letter={l} className='letter-tile' onClick={letterPress}>{l}</div>)}
    </div>
  );
};