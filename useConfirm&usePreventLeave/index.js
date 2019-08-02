import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import { useConfirm, usePreventLeave } from "./useConfirm.js";

const App = () => {
  const deleteWorld = () => console.log("delete the world");
  const abort = () => console.log("aborted...");
  const confirmDelete = useConfirm("are you sure", deleteWorld, abort);
  const { enablePrevent, disablePrevent } = usePreventLeave();
  return (
    <div className="App">
      <button onClick={confirmDelete}>delete the world</button>
      <button onClick={enablePrevent}>protect</button>
      <button onClick={disablePrevent}>unprotect</button>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
