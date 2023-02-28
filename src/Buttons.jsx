import React from "react";
import AdvancedButtons from "./AdvancedButtons";
import BasicButtons from "./BasicButtons";
import "./Buttons.css";

function Buttons({
  handleErase,
  handleClear,
  handleClick,
  handleCos,
  handleSin,
  handleSqrt,
  handleX2,
  handleX3,
  calculate,
  numbers,
  shouldRenderChild,
  isMounted,
  mountedStyle,
  unmountedStyle,
  handlePie,
}) {
  return (
    <div className="container">
      {shouldRenderChild && (
        <AdvancedButtons
          handleCos={handleCos}
          handleSin={handleSin}
          handleSqrt={handleSqrt}
          handleX2={handleX2}
          handleX3={handleX3}
          isMounted={isMounted}
          mountedStyle={mountedStyle}
          unmountedStyle={unmountedStyle}
          handlePie={handlePie}
        />
      )}

      <BasicButtons
        handleErase={handleErase}
        handleClear={handleClear}
        handleClick={handleClick}
        calculate={calculate}
        numbers={numbers}
      />
    </div>
  );
}

export default Buttons;
