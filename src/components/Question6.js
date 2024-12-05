import React, { useState } from 'react';
import Child from './Question6c';

const ParentComponent = () => {
  const [message, setMessage] = useState('No action yet');

  // Function to be passed to the child
  const handleClick = () => {
    setMessage('Button clicked in child!');
  };

  return (
    <div>
      <p>{message}</p>
      <Child onButtonClick={handleClick} />
    </div>
  );
};

export default ParentComponent;
