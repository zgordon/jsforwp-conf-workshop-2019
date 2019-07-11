import React from "react";
// Remove unused assets

function App() {
  // Create a function for what event should do
  function getUserName() {
    // Get the user name with a prompt
    const userName = prompt(`Please enter your full name`);
    // Display the username with alert
    alert(`Hi ${userName}!`);
  }
  return (
    <div className="App">
      {/* Attach an event to the button */}
      <button onClick={getUserName}>Get User Name</button>
    </div>
  );
}

export default App;
