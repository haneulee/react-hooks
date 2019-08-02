import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import { useTitle } from "./useTitle.js";

const App = () => {
  const titleUpdator = useTitle("loading...");
  setTimeout(() => titleUpdator("home"), 5000);
  return <div className="App" />;
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
