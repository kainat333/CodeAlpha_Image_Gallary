import React, { useState } from 'react';

type Image = {
  src: string;
  description: string;
};

type ImageGalleryProps = {
  images: Image[];
};

const ImageGallery: React.FC<ImageGalleryProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative w-full h-full">
      {/* Main Image */}
      <div className="relative h-full">
        <img
          src={images[currentIndex].src}
          alt={`Image ${currentIndex + 1}`}
          className="w-full h-full object-cover"
        />
        {/* Image Description */}
        <div className="absolute bottom-14 left-1/2 transform -translate-x-1/2 text-center text-white font-bold text-lg bg-black bg-opacity-50 py-2 px-4 rounded-lg z-10">
          {images[currentIndex].description}
        </div>
        {/* Prev Button */}
        <button
          onClick={handlePrevImage}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 px-4 py-2 bg-gray-800 text-white rounded-full z-20"
        >
          Prev
        </button>
        {/* Next Button */}
        <button
          onClick={handleNextImage}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 px-4 py-2 bg-gray-800 text-white rounded-full z-20"
        >
          Next
        </button>
      </div>

      {/* Thumbnail Navigation */}
      <div className="absolute bottom-2 left-0 right-0 flex justify-center space-x-2 z-10">
        {images.map((image, index) => (
          <button
            key={index}
            className={`w-16 h-10 border ${
              index === currentIndex ? 'border-blue-500' : 'border-gray-300'
            }`}
            onClick={() => setCurrentIndex(index)}
          >
            <img
              src={image.src}
              alt={`Thumbnail ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
