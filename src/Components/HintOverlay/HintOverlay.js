import React from 'react';

import './HintOverlay.css';

export default function HintOverlay(props) {

  return (
    <div className={`hint-overlay-container ${props.showHint ? '' : 'hide'}`} onClick={props.closeHandler}>
      <div className='close-overlay'></div>
      <div className='hint-close'></div>
      <div className='hint'>
        <h3>
          Hint:
        </h3>
        {props.hint}
      </div>
    </div>
  );
};