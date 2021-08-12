import React from "react";
import DrumKeys from "./DrumKeys";
import Controls from "./Controls";

import "./DrumMachine.css";

export default function DrumMachine(props) {
  const {
    soundBank,
    bank,
    setBank,
    power,
    setPower,
    volume,
    setVolume,
    displayContent,
    setDisplayContent,
  } = props;

  return (
    <div className="DrumMachine" id="drum-machine">
      <DrumKeys
        soundBank={soundBank}
        bank={bank}
        power={power}
        volume={volume}
      />

      <Controls
        power={power}
        setPower={setPower}
        volume={volume}
        setVolume={setVolume}
        bank={bank}
        setBank={setBank}
        displayContent={displayContent}
        setDisplayContent={setDisplayContent}
      />
    </div>
  );
}
