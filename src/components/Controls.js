import React, { useState, useEffect } from "react";

import "./Controls.css";
import Display from "./Display";
import Slider from "./Slider";
import Switch from "./Switch";

export default function Controls(props) {
  const [displayContent, setDisplayContent] = useState(<>&nbsp;</>);

  const { power, setPower, bank, setBank, volume, setVolume } = props;

  useEffect(() => {
    // console.log(`power`, power);

    setDisplayContent(`Power ${power ? "ON" : "OFF"}`);
    const timeout = setTimeout(() => {
      setDisplayContent(<>&nbsp;</>);
    }, 1000);
    return () => {
      return clearTimeout(timeout);
    };
  }, [power]);

  useEffect(() => {
    // console.log(`bank`, bank);

    setDisplayContent(bank ? "Piano" : "Heater Kit");
    const timeout = setTimeout(() => {
      setDisplayContent(<>&nbsp;</>);
    }, 1000);
    return () => {
      return clearTimeout(timeout);
    };
  }, [bank]);

  useEffect(() => {
    // console.log(`volume`, volume);

    setDisplayContent(`Volume ${volume}%`);
    const timeout = setTimeout(() => {
      setDisplayContent(<>&nbsp;</>);
    }, 1000);
    return () => {
      return clearTimeout(timeout);
    };
  }, [volume]);

  return (
    <div className="Controls">
      <Switch title="Power" value={power} setValue={setPower} />
      <Display content={displayContent} />
      <Slider value={volume} setValue={setVolume} />
      <Switch title="Bank" value={bank} setValue={setBank} />
    </div>
  );
}
