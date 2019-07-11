import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  // Create variables for first and last names
  const firstName = `Zac`;
  const lastName = `Gordon`;

  // Use variables inside of a string
  const fullName = `${firstName} ${lastName}`;

  // Log variables to the console
  console.log(fullName);

  // Use prompt to get information
  const userName = prompt(`Please enter your full name`);

  // Use alert to display information
  alert(`Hi ${userName}!`);

  return (
    <div className="App">
      <header className="App-header">
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
