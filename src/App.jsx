import React, { useState, useEffect } from "react";
import videoSource from "./videos/darkvideo.mp4";
import "./App.css";
import Bubble from "./Bubble";

function App() {
  const [bubbles, setBubbles] = useState(
    Array.from({ length: 5 }, () => ({
      id: Math.random(),
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      velocityX: (Math.random() - 0.5) * 2, // Random velocity in X direction
      velocityY: (Math.random() - 0.5) * 2, // Random velocity in Y direction
      visible: true,
    }))
  );

  useEffect(() => {
    const updatePositions = () => {
      setBubbles((prevBubbles) =>
        prevBubbles.map((bubble) => {
          if (!bubble.visible) return bubble;

          let newX = bubble.x + bubble.velocityX * 2; // Speed multiplier
          let newY =
            bubble.y +
            bubble.velocityY * 2 +
            Math.sin(newX / 100) * 10; // Add sine wave effect

          // Bounce logic with boundary constraints
          if (newX <= 0 || newX >= window.innerWidth - 50) { // Assuming bubble width is 50px
            bubble.velocityX *= -1;
            newX = Math.max(0, Math.min(newX, window.innerWidth - 50));
          }
          if (newY <= 0 || newY >= window.innerHeight - 50) { // Assuming bubble height is 50px
            bubble.velocityY *= -1;
            newY = Math.max(0, Math.min(newY, window.innerHeight - 50));
          }

          return {
            ...bubble,
            x: newX,
            y: newY,
          };
        })
      );

      requestAnimationFrame(updatePositions);
    };

    requestAnimationFrame(updatePositions);
    return () => cancelAnimationFrame(updatePositions);
  }, []);

  const handleBubbleClick = (id) => {
    setBubbles((prevBubbles) =>
      prevBubbles.map((bubble) =>
        bubble.id === id
          ? {
              ...bubble,
              visible: false,
            }
          : bubble
      )
    );

    setTimeout(() => {
      setBubbles((prevBubbles) =>
        prevBubbles.map((bubble) =>
          bubble.id === id
            ? {
                ...bubble,
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                visible: true,
              }
            : bubble
        )
      );
    }, 3000); // 3-second delay before the bubble reappears
  };

  return (
    <div className="app">
      <video
        className="background-video"
        src={videoSource}
        disablePictureInPicture
        autoPlay
        loop
        muted
      />
      <div className="bubble-container">
        {bubbles.map((bubble) =>
          bubble.visible ? (
            <div
              key={bubble.id}
              style={{
                position: "absolute",
                transform: `translate(${bubble.x}px, ${bubble.y}px)`,
                transition: "transform 0.1s linear",
              }}
            >
              <Bubble
                onClick={() => handleBubbleClick(bubble.id)}
                className="bubble"
              />
            </div>
          ) : null
        )}
      </div>
    </div>
  );
}

export default App;
