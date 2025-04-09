function AboutGallery() {
  const images = [
    "/images/Tomohon1.png",
    "/images/Tomohon2.png",
    "/images/Tomohon3.png",
    "/images/Tomohon4.png",
    "/images/Tomohon5.png",
  ];

  const filledImages = [...images, ...images];

  const placeholder = "/images/Placeholder.png"

  return (
    <div className="gallery">
      <div className="gallery-track">
        {filledImages.map((src, index) => (
          <div className="gallery-card">
            <img
              key={index}
              src={src || placeholder}
              alt={`Gallery ${index + 1}`}
              className="gallery-image"
              onError={(e) => (e.target.src = placeholder)}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default AboutGallery