import { useState } from "react";
import "./App.css";
import Buttons from "./Buttons";

function App() {
  const [title, setTitle] = useState("Calculator");
  const [isMounted, setIsMounted] = useState(false);

  const handleToggleClicked = () => {
    setIsMounted(!isMounted);

    /*Change title if complicated section of calculator is showing*/
    if (isMounted === false) {
      setTitle("Semi-complicated Calculator");
    } else {
      setTitle("Calculator");
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
      <Buttons isMounted={isMounted} />
    </>
  );
}

export default App;
