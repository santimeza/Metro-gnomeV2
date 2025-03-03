import React, { useEffect, useRef } from "react";
import "../CSS/Pendulum.css";

const Pendulum = ({ bpm, isPlaying }) => {
  const pendulumRef = useRef(null);

  useEffect(() => {
    if (pendulumRef.current) {
      const swingDuration = (60 / bpm) * 2; // Double the swing duration to halve the speed
      pendulumRef.current.style.animationDuration = `${swingDuration}s`;

      if (isPlaying) {
        // Reset animation to ensure it starts consistently
        pendulumRef.current.style.animation = "none";
        void pendulumRef.current.offsetWidth; // Trigger reflow
        pendulumRef.current.style.animation = `swing ${swingDuration}s infinite ease-in-out`;
        pendulumRef.current.style.animationPlayState = "running";
      } else {
        pendulumRef.current.style.animationPlayState = "paused";
      }
    }
  }, [bpm, isPlaying]);

  return (
    <div className="pendulum-container">
      <div className="pendulum" ref={pendulumRef}></div>
    </div>
  );
};

export default Pendulum;
