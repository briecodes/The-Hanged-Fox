import React from 'react';

import './HangedFox.css';

export default function HangedFox(props) {
  return (
    <div className={`hanged-fox-container stage${props.stage ? props.stage : 0}`}></div>
  );
};