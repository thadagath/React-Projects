import React from "react";
import ToggleButton from "./ToggleButton";

const Config = ({title, toggleState, onToggle}) => (
  <div className="config-row">
    <div className="config-option">
      {title} is <b>{toggleState ? "On" : "Off"}</b>
    </div>
    <div className="config-switch">
      <ToggleButton init={toggleState} toggleBtn={v => onToggle(v)} />
    </div>
  </div>
);

export default Config;
