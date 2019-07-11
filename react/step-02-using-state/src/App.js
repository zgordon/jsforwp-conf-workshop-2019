// Image useState from React
import React, { useState } from "react";

function App() {
  // Setup state for a userName with a default value of User
  const [userName, setUsername] = useState(`User`);

  // Create a function for what event should do
  function getUserName() {
    // Get the user name with a prompt
    const userName = prompt(`Please enter your full name`);
    // Update the user name in state
    setUsername(userName);
  }
  return (
    <div className="App">
      {/* Display the userName from state */}
      <h1>Hi {userName}!</h1>
      <button onClick={getUserName}>Get User Name</button>
    </div>
  );
}

export default App;
