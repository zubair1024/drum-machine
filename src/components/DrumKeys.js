import React, { useMemo } from "react";

import "./DrumKeys.css";

export default function DrumKeys({ soundBank, bank, power, volume }) {
  const currentBank = useMemo(() => {
    let result = soundBank.map((i) => ({ ...i, audioFile: new Audio(i.url) }));
    return result;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [bank]);

  const play = (idx) => {
    if (power) {
      currentBank[idx].audioFile.volume = volume;
      currentBank[idx].audioFile.play();
    }
  };

  return (
    <div className="DrumKeys">
      <div className="DrumKeysRow">
        {currentBank &&
          currentBank.map((i, idx) => {
            return (
              <div
                className="DrumKeysButton"
                key={i.keyCode}
                onClick={() => play(idx)}
              >
                {i.keyTrigger}
              </div>
            );
          })}
      </div>
    </div>
  );
}
