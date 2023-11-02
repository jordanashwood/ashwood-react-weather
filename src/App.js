import React from "react";
import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container-fluid">
        <Weather defaultCity="Charleston" />
        <footer className="p-5">
          This project was coded by Jordan Ashwood and is {""}
          <a
            href="https://github.com/jordanashwood/ashwood-react-weather"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced on Github.
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
