import "./App.css";
import Weather from "./Weather";
import Forecast from "./Forecast";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <Weather />
          <Forecast />
        </header>
      </div>
    </div>
  );
}

export default App;
