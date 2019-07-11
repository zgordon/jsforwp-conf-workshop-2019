import React, { useState } from "react";
import "./App.css";

function App() {
  // Create a set of images in state
  // Add a unique id to each image
  const [images] = useState([
    {
      id: 111,
      src: `/images/artem-sapegin-8c6eS43iq1o-unsplash.jpg`,
      alt: `Mountain Caynon at Sunset by Cristina Gottardi on Unsplash`
    },
    {
      id: 222,
      src: `/images/cristina-gottardi-R4y_E5ZQDPg-unsplash.jpg`,
      alt: `Mountains and Lake by Artem Sapegin on Unsplash`
    },
    {
      id: 333,
      src: `/images/ashley-knedler-OwpgxILRR7c-unsplash.jpg`,
      alt: `Lower Antelope Caynon by Ashley Knedler on Unsplash`
    }
  ]);

  // Setup state for an image with a default value of { src: ``, alt: `` }
  const [image, updateImage] = useState({ src: ``, alt: `` });
  function openModal(event) {
    updateImage({
      src: event.target.src,
      alt: event.target.alt
    });
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
        {/* Map over the images and create an img tag for each one */}
        {images.map(image => (
          <img
            key={image.id}
            onClick={openModal}
            src={image.src}
            alt={image.alt}
          />
        ))}
      </section>
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
