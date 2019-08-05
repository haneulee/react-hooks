import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import { useFullscreen } from "./useFullscreen";

const App = () => {
  const callback = val => {
    console.log(val ? "full" : "small");
  };
  const { element, exitFull, triggerFull } = useFullscreen(callback);

  return (
    <div className="App" style={{ height: "1000vh" }}>
      <div ref={element}>
        <img
          src={"https://s.pstatic.net/static/www/img/2018/sp_login_v180727.png"}
          alt=""
        />
        <button onClick={exitFull}>exit fullscreen</button>
      </div>
      <button onClick={triggerFull}>make fullscreen</button>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
