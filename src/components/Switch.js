import React from "react";

import "./Switch.css";

export default function Switch(props) {
  const { value, setValue } = props;

  const { title = "Title" } = props;

  const toggleSwitch = () => {
    setValue((prev) => !prev);
  };

  return (
    <>
      <b style={{ textAlign: "center" }}>{title.toUpperCase()}</b>
      <div className="Switch" onClick={toggleSwitch}>
        <div
          className="inner"
          style={value ? { float: "right" } : { float: "left" }}
        ></div>
      </div>
    </>
  );
}
