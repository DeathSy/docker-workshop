import { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";

const API_ENDPOINT = 'http://localhost:4000'

function App() {
  const [data, setData] = useState()
  useEffect(() => {
    fetch(`${API_ENDPOINT}/`)
      .then(resp => resp.json())
      .then(resp => setData(resp))
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        {JSON.stringify(data, null, 2)}
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
