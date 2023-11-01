import React from "react";
import "./Forecast.css";

export default function Forecast() {
  return (
    <div className="Forecast p-1 mt-5 text-center container-fluid">
      <h4 className="p-5 mt-5">Forecast to come...</h4>
      <footer className="m-3 p-4 opacity-75">
        This project was coded by Jordan Ashwood and is{" "}
        <a
          href="https://github.com/jordanashwood/ashwood-react-weather"
          target="_blank"
          rel="noopener noreferrer"
        >
          open-sourced on Github.
        </a>
      </footer>
    </div>
  );
}
