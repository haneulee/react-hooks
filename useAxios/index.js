import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import { useAxios } from "./useAxios";

const App = () => {
  const { loading, data, error, refetch } = useAxios({
    url: "https://yts.lt/api/v2/list_movies.json"
  });

  return (
    <div className="App" style={{ height: "1000vh" }}>
      <div>{JSON.stringify(data)}</div>
      <div>{loading && "Loading..."}</div>
      <button onClick={refetch}>refetch !</button>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
