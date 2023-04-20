import React, { useEffect, useState } from "react";
import AdvancedButtons from "./AdvancedButtons";
import BasicButtons from "./BasicButtons";
import "./Buttons.css";
import useDelayUnmount from "./useDelayUnmount";

function Buttons({ isMounted }) {
  /*All of my managed states*/
  const [numbers, setNumbers] = useState("");
  const shouldRenderChild = useDelayUnmount(isMounted, 400);
  const mountedStyle = { animation: "inAnimation 750ms ease-in" };
  const unmountedStyle = { animation: "outAnimation 750ms ease-in" };
  const animateOnMount = {
    animation: "inAnimation2 750ms ease-in",
    right: "-200px",
  };
  const animateOnUnmount = {
    animation: "outAnimation2 750ms ease-in",
    right: "-150px",
  };

  /*Input validation to not include letters and fire events on certain keys*/
  const re = new RegExp("^[0-9 ()+-/*]$");

  const validateInput = (key) => {
    return re.test(key);
  };

  const keyPress = (e) => {
    let key = e.key;
    let isValid = validateInput(key);

    if (isValid) {
      handleClick(e.key);
    } else if (e.key === "Backspace") {
      handleErase();
    } else if (e.key === "Enter") {
      calculate();
    } else {
      e.preventDefault();
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", keyPress);
    return () => document.removeEventListener("keydown", keyPress);
  });

  /*Functions for every calculator button*/
  const handleErase = () => {
    setNumbers(numbers.substring(0, numbers.length - 1));
  };

  const handleClear = () => {
    setNumbers("");
  };

  const handleClick = (e) => {
    if (typeof e === "object") {
      setNumbers(numbers + e.target.value);
    } else {
      setNumbers(numbers + e);
    }
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

  const calculate = () => {
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
