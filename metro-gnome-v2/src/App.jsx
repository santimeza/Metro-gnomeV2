import React, { useState, useEffect } from 'react';
import Home from "./Home";
import BpmControl from "./components/BpmControl";

const App = () => {
  const [bpm, setBpm] = useState(60);
  const [clickSound, setClickSound] = useState('default');
  const [timeSignature, setTimeSignature] = useState('4/4');
  const [polyrhythm, setPolyrhythm] = useState({ first: 3, second: 4 });
  const [accelerandoSettings, setAccelerandoSettings] = useState({
    startBpm: 60,
    endBpm: 120,
    leadInMeasures: 4,
    totalMeasures: 16,
  });

  useEffect(() => {
    console.log('bpm changed: ', bpm);
  }, [bpm]);

  return (
    <div>
      <Home />
      <BpmControl bpm={bpm} setBpm={setBpm} />

      {/* <BpmControl bpm={bpm} setBpm={setBpm} />
      <ClickSoundSelector clickSound={clickSound} setClickSound={setClickSound} />
      <TimeSignature timeSignature={timeSignature} setTimeSignature={setTimeSignature} />
      <PolyrhythmVisualizer polyrhythm={polyrhythm} setPolyrhythm={setPolyrhythm} />
      <AccelerandoRitardando settings={accelerandoSettings} setSettings={setAccelerandoSettings} />
      <Metronome bpm={bpm} clickSound={clickSound} timeSignature={timeSignature} /> */}
    </div>
  );
};

export default App;
