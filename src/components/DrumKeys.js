import React, { useMemo } from "react";

import "./DrumKeys.css";

export default function DrumKeys({ soundBank, bank, power, volume }) {
  const currentBank = useMemo(() => {
    return soundBank;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [bank]);

  const playElement = useMemo(() => {
    return (e) => {
      if (power) {
        const audioFile = e.target.children[0];
        audioFile.volume = volume;
        audioFile.play();
      }
    };
  }, []);

  return (
    <div className="DrumKeys">
      <div className="DrumKeysRow">
        {currentBank &&
          currentBank.map((i) => {
            return (
              <div
                className="DrumKeysButton drum-pad"
                key={i.keyCode}
                onClick={playElement}
              >
                <audio className="clip" id={i.keyTrigger}>
                  <source src={i.url}></source>
                </audio>
                {i.keyTrigger}
              </div>
            );
          })}
      </div>
    </div>
  );
}
