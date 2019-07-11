// Image useState from React
import React, { useState } from "react";
// Image CSS
import "./App.css";

function App() {
  // Setup state for an image with a default value of { src: ``, alt: `` }
  const [image, updateImage] = useState({ src: ``, alt: `` });

  // Create a function for opening the modal
  function openModal(event) {
    // Update the value of image in state
    updateImage({
      // Set the src of the image based on event.target
      src: event.target.src,
      // Set the alt of the image based on event.target
      alt: event.target.alt
    });
  }
  return (
    <div className="App">
      <section className="lightbox">
        {/* Set the onClick of the first img to openModal */}
        <img
          onClick={openModal}
          src="/images/artem-sapegin-8c6eS43iq1o-unsplash.jpg"
          alt="Mountains and Lake by Artem Sapegin on Unsplash"
        />
        <img
          src="/images/cristina-gottardi-R4y_E5ZQDPg-unsplash.jpg"
          alt="Mountain Caynon at Sunset by Cristina Gottardi on Unsplash"
        />
        <img
          src="/images/ashley-knedler-OwpgxILRR7c-unsplash.jpg"
          alt="Lower Antelope Caynon by Ashley Knedler on Unsplash"
        />
      </section>
      {/* Display the overlay div if image.src is not empty */}
      {image.src !== `` && <div id="overlay" />}
    </div>
  );
}

export default App;
