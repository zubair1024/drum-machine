import React, { useState, useMemo, useCallback, useEffect } from "react";
import "./App.css";
import DrumMachine from "./components/DrumMachine";

const bankOne = [
  {
    keyCode: 81,
    keyTrigger: "Q",
    id: "Heater-1",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
  },
  {
    keyCode: 87,
    keyTrigger: "W",
    id: "Heater-2",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
  },
  {
    keyCode: 69,
    keyTrigger: "E",
    id: "Heater-3",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
  },
  {
    keyCode: 65,
    keyTrigger: "A",
    id: "Heater-4",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
  },
  {
    keyCode: 83,
    keyTrigger: "S",
    id: "Clap",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
  },
  {
    keyCode: 68,
    keyTrigger: "D",
    id: "Open-HH",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
  },
  {
    keyCode: 90,
    keyTrigger: "Z",
    id: "Kick-n'-Hat",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
  },
  {
    keyCode: 88,
    keyTrigger: "X",
    id: "Kick",
    url: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
  },
  {
    keyCode: 67,
    keyTrigger: "C",
    id: "Closed-HH",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
  },
];

const bankTwo = [
  {
    keyCode: 81,
    keyTrigger: "Q",
    id: "Chord-1",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3",
  },
  {
    keyCode: 87,
    keyTrigger: "W",
    id: "Chord-2",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3",
  },
  {
    keyCode: 69,
    keyTrigger: "E",
    id: "Chord-3",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3",
  },
  {
    keyCode: 65,
    keyTrigger: "A",
    id: "Shaker",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3",
  },
  {
    keyCode: 83,
    keyTrigger: "S",
    id: "Open-HH",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3",
  },
  {
    keyCode: 68,
    keyTrigger: "D",
    id: "Closed-HH",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3",
  },
  {
    keyCode: 90,
    keyTrigger: "Z",
    id: "Punchy-Kick",
    url: "https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3",
  },
  {
    keyCode: 88,
    keyTrigger: "X",
    id: "Side-Stick",
    url: "https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3",
  },
  {
    keyCode: 67,
    keyTrigger: "C",
    id: "Snare",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3",
  },
];

function App() {
  const [power, setPower] = useState(true);
  const [bank, setBank] = useState(false);
  const [volume, setVolume] = useState(0.51);
  const [displayContent, setDisplayContent] = useState(<>&nbsp;</>);

  const soundBank = useMemo(() => {
    return bank ? bankOne : bankTwo;
  }, [bank]);

  const resetDisplay = useCallback(() => {
    const timeout = setTimeout(() => {
      setDisplayContent(<>&nbsp;</>);
    }, 1000);
    return () => {
      return clearTimeout(timeout);
    };
  }, []);

  useEffect(() => {
    setDisplayContent(`Power ${power ? "ON" : "OFF"}`);
    return resetDisplay();
  }, [power, resetDisplay]);

  useEffect(() => {
    setDisplayContent(bank ? "Piano" : "Heater Kit");
    return resetDisplay();
  }, [bank, resetDisplay]);

  useEffect(() => {
    setDisplayContent(`Volume ${volume}%`);
    return resetDisplay();
  }, [volume, resetDisplay]);

  /**
   *
   * @param {KeyboardEvent} e a DOM event
   */
  const onKeyDown = (e) => {
    // e.stopPropagation();
    if (power) {
      const bankElements = soundBank.filter(
        (i) => i.keyCode === e.keyCode && i.keyTrigger === e.key.toUpperCase()
      );

      bankElements.forEach((i) => {
        const audio = new Audio(i.url);
        audio.volume = volume;
        setDisplayContent(i.id);
        resetDisplay();
        audio.play();
      });
    }
  };

  return (
    <div className="App" onKeyDown={onKeyDown} tabIndex="0">
      <DrumMachine
        soundBank={soundBank}
        power={power}
        setPower={setPower}
        bank={bank}
        setBank={setBank}
        volume={volume}
        setVolume={setVolume}
        displayContent={displayContent}
        setDisplayContent={setDisplayContent}
      />
    </div>
  );
}

export default App;
