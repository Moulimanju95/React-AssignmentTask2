import { useState } from "react";

const InputDisplayComponent = () => {
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");

  const handleInput1Change = (event) => {
    setInput1(event.target.value);
  };

  const handleInput2Change = (event) => {
    setInput2(event.target.value);
  };

  return (
    <div>
      {/* Input Field 1 */}
      <input
        type="text"
        value={input1}
        onChange={handleInput1Change}
        placeholder="Enter value for input 1"
      />

      {/* Input Field 2 */}
      <input
        type="text"
        value={input2}
        onChange={handleInput2Change}
        placeholder="Enter value for input 2"
      />

      {/* Display*/}
      <div>
        <br></br>
        <b>Enter values</b>
        <p>Input 1: {input1}</p>
        <p>input 2: {input2}</p>
      </div>
    </div>
  );
};

export default InputDisplayComponent;
