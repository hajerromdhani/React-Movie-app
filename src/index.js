import React from "react";
import ReactDOM from "react-dom";
import MovieApp from "./MovieApp";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <MovieApp />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
