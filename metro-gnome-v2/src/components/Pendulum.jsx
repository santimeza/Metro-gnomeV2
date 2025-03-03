import React, { useEffect, useRef } from "react";
import "../CSS/Pendulum.css";

const Pendulum = ({ bpm, isPlaying }) => {
  const pendulumRef = useRef(null);

  useEffect(() => {
    if (pendulumRef.current) {
      const swingDuration = 60 / bpm; // Calculate swing duration based on BPM
      pendulumRef.current.style.animationDuration = `${swingDuration}s`;
      pendulumRef.current.style.animationPlayState = isPlaying
        ? "running"
        : "paused";
    }
  }, [bpm, isPlaying]);

  return (
    <div className="pendulum-container">
      <div className="pendulum" ref={pendulumRef}></div>
    </div>
  );
};

export default Pendulum;
