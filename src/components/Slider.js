import React from "react";

export default function Slider({ value, setValue }) {
  const onChange = (e) => {
    const value = e.target.value;
    setValue(value);
  };

  return (
    <div>
      <input
        type="range"
        step="0.01"
        min="0"
        max="1"
        value={value}
        onChange={onChange}
      ></input>
    </div>
  );
}
