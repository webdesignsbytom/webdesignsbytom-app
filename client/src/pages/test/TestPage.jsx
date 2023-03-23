import React, { useEffect, useRef, useState } from 'react';

function TestPage() {
  const canvasRef = useRef(null);
  const contextRef = useRef(null);

  useEffect(() => {

    const canvas = canvasRef.current
    canvas.width = window.innerWidth 
    canvas.height = window.innerHeight 

    const context = canvas.getContext("2d")

    contextRef.current = context;
  }, [])
  
  return (
    <>
      <canvas
        ref={canvasRef}
        // draw={draw}
        className='absolute bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'
      ></canvas>
    </>
  );
}

export default TestPage;
