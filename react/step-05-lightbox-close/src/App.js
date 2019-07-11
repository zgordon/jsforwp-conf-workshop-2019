import React, { useState } from "react";
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

    // Add an event listener to listen for key presses
    document.addEventListener(`keyup`, listenForClose);
  }

  // Create a function for closing the modal
  function closeModal() {
    updateImage({
      src: ``,
      alt: ``
    });
    document.removeEventListener(`keyup`, listenForClose);
  }

  // Create a function for listening for close modal events
  function listenForClose(event) {
    // Check if event.target.id is equal to "overlay"
    // Or if event.key is equal to "Escape"
    if (event.target.id === "overlay" || event.key === "Escape") {
      closeModal();
    }
  }
  return (
    <div className="App">
      <section className="lightbox">
        <img
          onClick={openModal}
          src="/images/artem-sapegin-8c6eS43iq1o-unsplash.jpg"
          alt="Mountains and Lake by Artem Sapegin on Unsplash"
        />
        <img
          onClick={openModal}
          src="/images/cristina-gottardi-R4y_E5ZQDPg-unsplash.jpg"
          alt="Mountain Caynon at Sunset by Cristina Gottardi on Unsplash"
        />
        <img
          onClick={openModal}
          src="/images/ashley-knedler-OwpgxILRR7c-unsplash.jpg"
          alt="Lower Antelope Caynon by Ashley Knedler on Unsplash"
        />
      </section>
      {/* Add an onClick to the overlay to listenForClose */}
      {image.src !== `` && (
        <div id="overlay" onClick={listenForClose}>
          <figure>
            <img src={image.src} alt={image.alt} />
            <figcaption>{image.alt}</figcaption>
          </figure>
        </div>
      )}
    </div>
  );
}

export default App;
