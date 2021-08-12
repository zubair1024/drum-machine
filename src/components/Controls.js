import React, { useState, useEffect, useCallback } from "react";

import "./Controls.css";
import Display from "./Display";
import Slider from "./Slider";
import Switch from "./Switch";

export default function Controls(props) {
  const [displayContent, setDisplayContent] = useState(<>&nbsp;</>);

  const { power, setPower, bank, setBank, volume, setVolume } = props;

  const resetDisplay = useCallback(() => {
    const timeout = setTimeout(() => {
      setDisplayContent(<>&nbsp;</>);
    }, 1000);
    return () => {
      return clearTimeout(timeout);
    };
  }, []);

  useEffect(() => {
    // console.log(`power`, power);

    setDisplayContent(`Power ${power ? "ON" : "OFF"}`);
    return resetDisplay();
  }, [power, resetDisplay]);

  useEffect(() => {
    // console.log(`bank`, bank);

    setDisplayContent(bank ? "Piano" : "Heater Kit");
    return resetDisplay();
  }, [bank, resetDisplay]);

  useEffect(() => {
    // console.log(`volume`, volume);

    setDisplayContent(`Volume ${volume}%`);
    return resetDisplay();
  }, [volume, resetDisplay]);

  return (
    <div className="Controls">
      <Switch title="Power" value={power} setValue={setPower} />
      <Display content={displayContent} />
      <Slider value={volume} setValue={setVolume} />
      <Switch title="Bank" value={bank} setValue={setBank} />
    </div>
  );
}
