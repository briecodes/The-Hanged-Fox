import React from 'react';

import './HelpOverlay.css';

export default function HelpOverlay(props) {
  return (
    <div className='help-overlay'>
      <div className='close-overlay' onClick={() => props.closeOverlay(false)}></div>
    </div>
  );
};