import React, { useState } from 'react';

const ToggleClassComponent = () => {
  const [isActive, setIsActive] = useState(false);

  // button is clicked
  const toggleState = () => {
    setIsActive(!isActive);
  };

  return (
    <div>
      {/* Apply class based on isActive state */}
      <div className={isActive ? 'active' : 'inactive'}>
        The current state is: {isActive ? 'Active' : 'Inactive'}
      </div>

      {/* Button to toggle the state */}
      <button onClick={toggleState}>Toggle State</button>
    </div>
  );
};

export default ToggleClassComponent;
