import React from "react";

const BpmControl = ({ bpm, onIncrease, onDecrease, setBpm, togglePlay }) => {
  const handleInputChange = (e) => {
    const newBpm = Number(e.target.value);
    if (newBpm >= 0 && newBpm <= 300) {
      setBpm(newBpm);
    }
  };

  return (
    <div class="columns is-mobile">
      <div class="column is-full-mobile is-half-tablet is-offset-one-quarter-tablet px-5">
        <form class="box">
          <div class="field">
            <label class="label">BPM</label>
            <div class="control">
              <div class="field is-grouped">
                <input
                  class="input"
                  type="number"
                  value={bpm}
                  onChange={handleInputChange}
                ></input>
                <button
                  type="button"
                  className="button is-primary"
                  onClick={onDecrease}
                >
                  -
                </button>
                <button
                  type="button"
                  className="button is-primary"
                  onClick={onIncrease}
                >
                  +
                </button>
              </div>
            </div>
          </div>
          <div class="field">
            <button
              type="button"
              className="button is-success is-fullwidth"
              onClick={togglePlay}
            >
              Play/Pause
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BpmControl;
