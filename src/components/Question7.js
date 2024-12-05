import React from 'react';

const Greeting = ({ greeting }) => {
  return <p>{greeting}</p>;
};

// Set the default value for greeting if no prop is passed
Greeting.defaultProps = {
  greeting: 'Hello'
};

export default Greeting;