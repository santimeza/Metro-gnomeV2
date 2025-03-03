import React, { useEffect, useRef, useState } from "react";

const Metronome = ({ bpm, isPlaying }) => {
  const audioContextRef = useRef(
    new (window.AudioContext || window.webkitAudioContext)()
  );
  const [clickBuffers, setClickBuffers] = useState({});
  const clickSoundUrls = {
    click1: "https://santimeza.github.io/metro-gnome/audioFiles/click_1.wav",
    click2: "https://santimeza.github.io/metro-gnome/audioFiles/click_2.wav",
    click3: "https://santimeza.github.io/metro-gnome/audioFiles/click_3.wav",
  };

  useEffect(() => {
    const loadClickSound = async (url) => {
      const response = await fetch(url);
      const data = await response.arrayBuffer();
      return audioContextRef.current.decodeAudioData(data);
    };

    const loadAllClickSounds = async () => {
      const buffers = {};
      buffers["click1"] = await loadClickSound(clickSoundUrls["click1"]);
      buffers["click2"] = await loadClickSound(clickSoundUrls["click2"]);
      buffers["click3"] = await loadClickSound(clickSoundUrls["click3"]);
      setClickBuffers(buffers);
      console.log("Click sounds loaded");
    };

    loadAllClickSounds();
  }, []);

  const playClick = (clickType) => {
    const source = audioContextRef.current.createBufferSource();
    source.buffer = clickBuffers[clickType];
    source.connect(audioContextRef.current.destination);
    source.start(0);
  };

  useEffect(() => {
    if (isPlaying) {
      const interval = 60000 / bpm;
      const timer = setInterval(() => {
        playClick("click1");
      }, interval);

      return () => clearInterval(timer);
    }
  }, [bpm, isPlaying, clickBuffers]);

  return <div>{/* Metronome logic only */}</div>;
};

export default Metronome;
