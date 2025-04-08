import React from 'react'

function AboutGallery() {
  const images = [

  ];

  const filledImages = [...images];
  while (filledImages.length < 5) {
    filledImages.push(null);
  }

  const placeholder = "/images/Placeholder.png"

  return (
    <div className="gallery">
      {filledImages.map((src, index) => (
        <div key={index} className="gallery-card">
          <img
            src={src || placeholder}
            alt={`Gallery ${index + 1}`}
            className="gallery-image"
            onError={(e) => (e.target.src = placeholder)}
          />
        </div>
      ))}
    </div>
  )
}

export default AboutGallery