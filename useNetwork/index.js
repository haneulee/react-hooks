import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import { useNetwork } from "./useNetwork";

const App = () => {
  const handleChange = online => {
    console.log(online ? "online" : "offline");
  };
  const online = useNetwork(handleChange);
  return (
    <div className="App">
      <h1>{online ? "online" : "offline"}</h1>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
