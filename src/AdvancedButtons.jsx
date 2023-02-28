import React from "react";

function AdvancedButtons({
  handleClick,
  handleCos,
  handleSin,
  handleSqrt,
  handleX2,
  handleX3,
  isMounted,
  mountedStyle,
  unmountedStyle,
  handlePie,
}) {
  return (
    <div
      className={"advanced-buttons buttons"}
      style={isMounted ? mountedStyle : unmountedStyle}
    >
      <input
        type="button"
        value="√"
        onClick={handleSqrt}
        className="operator"
      ></input>
      <button onClick={handleX2} className="operator">
        x <sup>2</sup>
      </button>
      <button onClick={handleX3} className="operator">
        x <sup>3</sup>
      </button>
      <input
        type="button"
        value="π"
        onClick={handlePie}
        className="operator"
        name="3.14159265359"
      ></input>
      <input
        type="button"
        value="("
        onClick={handleClick}
        className="operator"
      ></input>
      <input
        type="button"
        value=")"
        onClick={handleClick}
        className="operator"
      ></input>
      <input
        type="button"
        value="sin"
        onClick={handleSin}
        className="operator"
      ></input>
      <input
        type="button"
        value="cos"
        onClick={handleCos}
        className="operator"
      ></input>
    </div>
  );
}

export default AdvancedButtons;
