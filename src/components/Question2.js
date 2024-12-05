import React, { useState } from 'react';

export default function InputText() {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event) => {
    setInputValue(event.target.value);
   
  };

  return (
    <form>
    <label>Name </label>
    <input type="text" value={inputValue} onChange={handleChange} />
    <p>Current Input Value: {inputValue}</p>
    </form>
    
  );
}
