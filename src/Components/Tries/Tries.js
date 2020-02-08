import React from 'react';

import './Tries.css';

export default function Tries(props) {
  return (
    <div className={props.tries >= 3 ? 'tries-container warning' : 'tries-container'}>
      <span className='tries-heading'>tries left:</span>
      <span className='tries-number'>{5 - (props.tries ? props.tries : 0)}</span>
    </div>
  );
};