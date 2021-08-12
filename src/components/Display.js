import React from "react";

import "./Display.css";

export default function Display(props) {
  return (
    <div className="Display" id="display">
      <p>{props.content}</p>
    </div>
  );
}
