import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import { useFadeIn } from "./useFadeIn";

const App = () => {
  const fadeIn = useFadeIn(1, 2);
  const fadeIn2 = useFadeIn(5, 10);
  return (
    <div className="App">
      <h1 {...fadeIn}>hello</h1>
      <p {...fadeIn2}>hello</p>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
