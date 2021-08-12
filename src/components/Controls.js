import React from "react";

import "./Controls.css";
import Display from "./Display";
import Slider from "./Slider";
import Switch from "./Switch";

export default function Controls(props) {
  const { power, setPower, bank, setBank, volume, setVolume, displayContent } =
    props;

  return (
    <div className="Controls">
      <Switch title="Power" value={power} setValue={setPower} />
      <Display content={displayContent} />
      <Slider value={volume} setValue={setVolume} disabledOn={!power} />
      <Switch
        title="Bank"
        value={bank}
        setValue={setBank}
        disabledOn={!power}
      />
    </div>
  );
}
