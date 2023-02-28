import React, { useState } from "react";
import AdvancedButtons from "./AdvancedButtons";
import BasicButtons from "./BasicButtons";
import "./Buttons.css";
import useDelayUnmount from "./useDelayUnmount";

function Buttons({ isMounted }) {
  const [numbers, setNumbers] = useState("");
  const shouldRenderChild = useDelayUnmount(isMounted, 400);
  const renderedChild = useDelayUnmount(isMounted, 400);
  const mountedStyle = { animation: "inAnimation 500ms ease-in" };
  const unmountedStyle = { animation: "outAnimation 510ms ease-in" };
  const animateOnMount = { animation: "inAnimation2 500ms ease-in" };
  const animateOnUnmount = { animation: "outAnimation2 510ms ease-in" };

  const handleErase = () => {
    setNumbers(numbers.substring(0, numbers.length - 1));
  };

  const handleClear = () => {
    setNumbers("");
  };

  const handleClick = (e) => {
    setNumbers(numbers + e.target.value);
    console.log(e.target.value);
  };

  const handlePie = (e) => {
    setNumbers(numbers + e.target.name);
  };

  const handleCos = (e) => {
    setNumbers(Math.cos(numbers));
  };

  const handleSin = (e) => {
    setNumbers(Math.sin(numbers));
  };

  const handleSqrt = (e) => {
    setNumbers(Math.sqrt(numbers));
  };

  const handleX2 = () => {
    setNumbers(Math.pow(numbers, 2));
  };

  const handleX3 = () => {
    setNumbers(Math.pow(numbers, 3));
  };

  const calculate = (e) => {
    if (numbers === "") {
      setNumbers("");
    } else {
      setNumbers(eval(numbers));
    }
  };
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
        isMounted={isMounted}
        mountedStyle={animateOnMount}
        unmountedStyle={animateOnUnmount}
      />
    </div>
  );
}

export default Buttons;
