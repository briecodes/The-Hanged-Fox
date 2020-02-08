import React from 'react';

import './HelpOverlay.css';

import instructionsA from '../../Assets/Images/instruction-bubbles-01.png';
import instructionsB from '../../Assets/Images/instruction-bubbles-02.png';

export default function HelpOverlay(props) {
  return (
    <div className='help-overlay' onClick={props.closeOverlay}>
      <div className='close-overlay' onClick={props.closeOverlay}></div>
      <img src={instructionsA} alt='instructions a' onClick={props.closeOverlay} />
      <img src={instructionsB} alt='instructions b' onClick={props.closeOverlay} />
    </div>
  );
};