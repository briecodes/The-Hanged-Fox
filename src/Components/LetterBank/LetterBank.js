import React from 'react';

import './LetterBank.css';

export default function LetterBank(props) {
  const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

  function letterPress(e) {
    console.log('letter pressed!', e.target.dataset.letter);
    e.target.classList.add('used');
  };

  return (
    <div className='letter-bank'>
      {alphabet.map(l => <div key={l} data-letter={l} className='letter-tile' onClick={letterPress}>{l}</div>)}
    </div>
  );
};