import React from "react";
import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container-fluid">
        <header className="App-header">
          <Weather />
        </header>
      </div>
    </div>
  );
}

export default App;
