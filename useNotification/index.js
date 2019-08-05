import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import { useNotification } from "./useNotification";

const App = () => {
  const triggerNoti = useNotification("can I sit here?", {
    body: "I want to sit here"
  });

  return (
    <div className="App" style={{ height: "1000vh" }}>
      <button onClick={triggerNoti}>notification !</button>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
