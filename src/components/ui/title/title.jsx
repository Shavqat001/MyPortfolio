import React from 'react';
import './style.css';

function Title({ number, children, className = '' }) {
  return (
    <h2 className={`section-title ${className}`}>
      {number && <span className="title-number">{number}.</span>}
      {children}
    </h2>
  );
}

export default Title;