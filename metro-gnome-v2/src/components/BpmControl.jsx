import React from "react";

const BpmControl = ({ bpm, setBpm }) => {
  return (
    <div class="card">
      <header class="card-header">
        <p class="card-header-title">BPM</p>
      </header>
      <div class="card-content">
        <button class="button is-primary">-</button>
        <input 
          class="input" 
          type="text" 
          value={bpm} 
          onChange={(e) => setBpm(Number(e.target.value))}>
        </input>
        <button class="button is-primary">+</button>

      </div>
    </div>
  );
};

export default BpmControl;