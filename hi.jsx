import React from "react";
import videoSource from "./videos/darkvieo.mp4"
import './App.css'
import Bubble from "./Bubble";

import {
  useState,
  useRef
} from "react"; 


function App() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  // Track mouse movement
  const handleMouseMove = (e) => {
    setPosition({
      x: e.clientX,
      y: e.clientY
    });
  };

  const [isBubbleVisible, setIsBubbleVisible] = useState(true);
  const [scaleClass, setScaleClass] = useState("scale-up");

  const handleBubbleClick = () => {
    // Hide the bubble initially
    setIsBubbleVisible(false);
    
    // After 3 seconds, show the bubble again with a scale-up effect
    setTimeout(() => {
      setScaleClass("scale-up"); // Start small
      const randomNumx = Math.random() *10* 40;
      const randomNumy = Math.random() *10* 100;
      setPosition(
        { x: `${randomNumx}`, y: -`${randomNumy}` }
      )
        
      setIsBubbleVisible(true); // Show the bubble

      // Remove the scale-up class after a very short delay to trigger the transition
      setTimeout(() => {
        setScaleClass(""); // Scale to normal size
      }, 10); // Short delay to allow transition to apply
    }, 1000); // 3-second delay before showing again
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
                                                    
                                                
                                                    <div className="Calculator">
                                                      <div className="forbubblefloat" >
                                                      
                                                                                                  <div
                                                                                                            style={{
                                                                                                    
                                                                                                      display:isBubbleVisible?"block" : "none",
                                                                                                      position: "absolute",
                                                                                                      top: `${position.y - 40}px`,
                                                                                                      left: `${position.x - 40}px`,
                                                                                                      transition: "all 10s ease",
                                                                                                    }}
                                                                                                  
                                                                                                  >
            <Bubble onClick={handleBubbleClick} className={`bubble ${scaleClass}`} />
          
                                                                                                  </div>


                                                    
                                                      </div>
                                                      </div>
    </div>
  );
}

export default App;
