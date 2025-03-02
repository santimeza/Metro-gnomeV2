import React from "react";

const BpmControl = ({ bpm, setBpm }) => {
  const handleDecrease = () => {
    setBpm((prevBpm) => Math.max(prevBpm - 1, 0)); // Ensure BPM doesn't go below 0
  };

  const handleIncrease = () => {
    setBpm((prevBpm) => prevBpm + 1);
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
                  onChange={(e) => setBpm(Number(e.target.value))}
                ></input>
                <button
                  type="button"
                  className="button is-primary"
                  onClick={handleDecrease}
                >
                  -
                </button>
                <button
                  type="button"
                  className="button is-primary"
                  onClick={handleIncrease}
                >
                  +
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BpmControl;
