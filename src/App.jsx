import React from "react";
import videoSource from "./videos/darkvieo.mp4"
import './App.css'
import Bubble from "./Bubble";
import {
  useState,
  useRef
} from "react"; 

function FloatingDiv() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  // Track mouse movement
  const handleMouseMove = (e) => {
    setPosition({
      x: e.clientX,
      y: e.clientY
    });
  };

    const inputRef = useRef(null); 
  const resultRef = useRef(null); 
  const [result, setResult] = useState(0); 
 
  function plus(e) { 
    e.preventDefault(); 
    setResult((result) => result + Number(inputRef.current.value)); 
  }; 
 
    function minus(e) { 
        e.preventDefault(); 
      setResult((result) => result - Number(inputRef.current.value));
  	// Add the code for the minus function 
  };
 
    function times(e) { 
        e.preventDefault(); 
      setResult((result) => result*Number(inputRef.current.value));
    // Add the code for the plus function 
  }; 
 
    function divide(e) {
        e.preventDefault(); 
      setResult((result) => result / Number(inputRef.current.value));
    // Add the code for the divide function 
  };
 
    function resetInput(e) { 
        e.preventDefault();
        inputRef.current.value = 0;
        
    // Add the code for the resetInput function 
  }; 
 
    function resetResult(e) { 
        e.preventDefault();
        setResult((result) => 0)

  	// Add the code for the resetResult function 
  }; 
   const [isBubbleVisible, setIsBubbleVisible] = useState(true);

  const handleBubbleClick = () => {
    setIsBubbleVisible(false); // Remove bubble when clicked
  };
 

  return (
    <div className="app" onMouseMove={handleMouseMove}>
     <video
        className="background-video"
        src={videoSource} // replace with the path to your video
        disablePictureInPicture
        autoPlay
        loop
        muted
      />
      
   
      <div className="Calculator" >
           <div className="forbubblefloat" >
        <div style={{
          position: "absolute",
          top: `${position.y-40}px`,
          left: `${position.x-40}px`,
          pointerEvents: "none", // Prevents the div from blocking the pointer
        transition: "all 10s ease", // Smooth movement
          
        }} onClick={handleBubbleClick}>
     {isBubbleVisible && <Bubble onClick={handleBubbleClick} />}
      </div>
        <h1>Simplest Working Calculator</h1> 
       
      <form>
        <div className='blur'>
        <h3 ref={resultRef}> 
          {result/* add the value of the current total */} 
          </h3> 
          </div>
        <input
          pattern="[0-9]" 
          ref={inputRef} 
          type="number" 
          placeholder="Type a number" 
        /> 
              <button onClick={plus}>add</button> 
              <button onClick={minus}>subtract</button> 
              <button onClick={times}>multiply</button> 
              <button onClick={divide}>divide</button> 
              <button onClick={resetInput}>resetInput</button> 
              <button onClick={resetResult}>resetResult</button> 
        {/* Add the subtract button */} 
        {/* Add the multiply button */} 
        {/* Add the divide button */} 
        {/* Add the resetInput button */} 
        {/* Add the resetResult button */} 
        </form> 
       
        </div>
        </div>
    </div>
  );
}

export default FloatingDiv;
