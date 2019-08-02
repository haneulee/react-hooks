import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import { useTabs } from "./useTabs.js";

const tabArr = [
  {
    tab: "section 1",
    content: "this is a section 1"
  },
  {
    tab: "section 2",
    content: "this is a section 2"
  }
];

const App = () => {
  const { currentItem, changeItem } = useTabs(0, tabArr);

  return (
    <div className="App">
      {tabArr.map((item, index) => (
        <button onClick={() => changeItem(index)}>{item.tab}</button>
      ))}
      <div>{currentItem.content}</div>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
