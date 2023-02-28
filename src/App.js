import { useState, useEffect } from "react";
import "./App.css";
import Buttons from "./Buttons";
import useDelayUnmount from "./useDelayUnmount";

function App() {
  const [numbers, setNumbers] = useState("");
  const [title, setTitle] = useState("Calculator");
  const [titleChange, setTitleChange] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const shouldRenderChild = useDelayUnmount(isMounted, 400);
  const mountedStyle = { animation: "inAnimation 500ms ease-in" };
  const unmountedStyle = { animation: "outAnimation 510ms ease-in" };

  const handleToggleClicked = () => {
    setIsMounted(!isMounted);

    if (isMounted === false) {
      setTitle("Semi-complicated Calculator");
    } else {
      setTitle("Calculator");
    }
  };

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
    <>
      <h1>{title}</h1>
      <div className="button-wrap">
        <button className="main-btn" onClick={handleToggleClicked}>
          More options
        </button>
      </div>
      <Buttons
        handleErase={handleErase}
        handleClear={handleClear}
        handleClick={handleClick}
        handleCos={handleCos}
        handleSin={handleSin}
        calculate={calculate}
        handleSqrt={handleSqrt}
        handleX2={handleX2}
        handleX3={handleX3}
        handlePie={handlePie}
        numbers={numbers}
        shouldRenderChild={shouldRenderChild}
        isMounted={isMounted}
        mountedStyle={mountedStyle}
        unmountedStyle={unmountedStyle}
      />
    </>
  );
}

export default App;
