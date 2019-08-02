import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import { useClick } from "./useClick.js";
import { useHover } from "./useHover.js";

const App = () => {
  const sayHello = () => console.log("hello");
  const sayBye = () => console.log("bye");
  const title = useClick(sayHello);
  const title2 = useHover(sayBye);
  return (
    <div className="App">
      <h1 ref={title}>hi</h1>
      <h1 ref={title2}>hi</h1>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
