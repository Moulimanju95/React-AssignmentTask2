import React, { useState } from 'react';
import Button from './Question12b';

const ReusableButtonComponent = () => {
  const [count, setCount] = useState(0);

  // Click handler to increment the count
  const incrementCount = () => {
    setCount(count + 1);
  };

  // Click handler to reset the count
  const resetCount = () => {
    setCount(0);
  };

  return (
    <div>
      <b>Counter: {count}</b>
      <br></br>
      {/* Using the Button component */}
      <Button text="Increment" onClick={incrementCount} style={{ marginLeft: '10px' , marginRight:'15px'}} />
      <Button text="Reset" onClick={resetCount} />
    </div>
  );
};

export default ReusableButtonComponent;
