import React from 'react';

import './HangedFox.css';

export default function HangedFox(props) {
  return (
    // <div className={`hanged-fox-container stage${props.stage ? props.stage : 0}`}></div>
    <>
      <div className={`hanged-fox-container stage0 ${props.stage === 0 || props.stage === undefined ? null : 'hide'}`}></div>
      <div className={`hanged-fox-container stage1 ${props.stage === 1 ? null : 'hide'}`}></div>
      <div className={`hanged-fox-container stage2 ${props.stage === 2 ? null : 'hide'}`}></div>
      <div className={`hanged-fox-container stage3 ${props.stage === 3 ? null : 'hide'}`}></div>
      <div className={`hanged-fox-container stage4 ${props.stage === 4 ? null : 'hide'}`}></div>
      <div className={`hanged-fox-container stage5 ${props.stage === 5 ? null : 'hide'}`}></div>
    </>
  );
};