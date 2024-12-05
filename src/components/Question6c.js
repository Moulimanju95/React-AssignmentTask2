import React from 'react';

const Child = ({ onButtonClick }) => {
  return (
    <div>
      <button onClick={onButtonClick}>Click me!</button>
    </div>
  );
};

export default Child;
