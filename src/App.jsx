import React from 'react'
import videoSource from "./videos/darkvieo.mp4"

import {
  useState,
  useRef
} from "react"; 
import "./App.css";

const App = () => {
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
 
  return (
     <div > 
        <video
        className="background-video"
        src={videoSource} // replace with the path to your video
        autoPlay
        loop
        muted
      />
      <div className="Calculator">
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
)}

export default App

