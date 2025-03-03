import React, { useState, useEffect } from "react";

import Home from "./Home";
import BpmControl from "./components/BpmControl";
import Metronome from "./components/Metronome";
import Pendulum from "./components/Pendulum";

const App = () => {
  const [bpm, setBpm] = useState(60);
  const [clickSound, setClickSound] = useState("default");
  const [timeSignature, setTimeSignature] = useState("4/4");
  const [polyrhythm, setPolyrhythm] = useState({ first: 3, second: 4 });
  const [isPlaying, setIsPlaying] = useState(false);
  const [accelerandoSettings, setAccelerandoSettings] = useState({
    startBpm: 60,
    endBpm: 120,
    leadInMeasures: 4,
    totalMeasures: 16,
  });

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const handleDecrease = () => {
    setBpm((prevBpm) => Math.max(prevBpm - 1, 0)); // Ensure BPM doesn't go below 0
  };

  const handleIncrease = () => {
    setBpm((prevBpm) => Math.min(prevBpm + 1, 260));
  };

  useEffect(() => {
    console.log("bpm changed: ", bpm);
  }, [bpm]);

  return (
    <div>
      <Home />
      <BpmControl
        bpm={bpm}
        onIncrease={handleIncrease}
        onDecrease={handleDecrease}
        setBpm={setBpm}
        togglePlay={togglePlay}
      />
      <Metronome bpm={bpm} isPlaying={isPlaying} />
      <br />
      <Pendulum bpm={bpm} isPlaying={isPlaying} />
    </div>
  );
};

export default App;
