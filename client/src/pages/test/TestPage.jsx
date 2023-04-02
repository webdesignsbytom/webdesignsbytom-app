import React, { useState } from 'react';
import { SketchPicker } from 'react-color';

function TestPage() {
const [backgroundColour, setBackgroundColour] = useState(`0099FF`)

  const handleChange = (event) => {
    let str = event.hex
    let newStr = str.slice(1); // "ello World!";
    setBackgroundColour(`${newStr}`)
  }

  return (
    <div className={`grid relative h-[100vh] w-full`}
       style={{ backgroundColor: `#${backgroundColour}`}} >
      <SketchPicker
        color={backgroundColour}
        onChange={handleChange}
      />
    </div>
  );
}

export default TestPage;
