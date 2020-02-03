import React from 'react';

import './Nav.css';

export default function Nav(props) {
  return (
    <div className='nav'>
      <div className='nav-btn home' onClick={props.home}></div>
      <div className='nav-btn help' onClick={props.help}></div>
    </div>
  );
};