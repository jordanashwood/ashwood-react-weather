import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <Weather />
        </header>
        <footer>
          This project was coded by Jordan Ashwood and is{" "}
          <a href="" target="_blank" rel="noopener noreferrer">
            open-sourced on Github.
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
