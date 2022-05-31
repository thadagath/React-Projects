import React, {useState} from "react";

const ToggleButton = ({init, toggle}) => {
  const [isOn, setIsOn] = useState(init);
  const toggleButtonState = () => {
    if (isOn) {
      setIsOn(false);
      toggle(false);
    } else {
      setIsOn(true);
      toggle(true);
    }
  };
  return (
    <div
      className={isOn ? "toggle-btn toggle-btn-on" : "toggle-btn"}
      onClick={toggleButtonState}
    >
      <div
        className={isOn ? "toggle-slider toggle-slider-on" : "toggle-slider"}
      />
    </div>
  );
};

ToggleButton.defaultProps = {
  init: false,
  toggle: () => {}
};

export default ToggleButton;
