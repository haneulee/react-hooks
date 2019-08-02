import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import { useBeforeLeave } from "./useBeforeLeave.js";

const App = () => {
  const dontLeave = () => console.log("don't leave");
  useBeforeLeave(dontLeave);
  return (
    <div className="App">
      <h1>hello</h1>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
