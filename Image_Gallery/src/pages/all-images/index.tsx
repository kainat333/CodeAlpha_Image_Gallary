import React, { useState } from 'react';
import { images } from '../../imageData'; // Assuming imageData contains an array of images

const AlGallery: React.FC = () => {
  const [selectedImages, setSelectedImages] = useState<{ src: string; description: string }[]>([]);

  // Function to open the modal with the selected image
  const openImageModal = (image: { src: string; description: string }) => {
    setSelectedImages((prevImages) => [...prevImages, image]);
  };

  // Function to close the modal
  const closeModal = () => {
    setSelectedImages([]);
  };

  return (
    <div className="p-6 bg-[url('/pictures/image1.png')] bg-cover bg-center bg-no-repeat">
      <h2 className="text-2xl font-bold mb-4 text-center">Responsive Image Gallery</h2>

      {/* Image Gallery */}
      <div className="flex flex-wrap -m-2">
        {images.map((image, index: number) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/4 p-2">
            <div
              className="border border-gray-300 hover:border-gray-700 transition-all duration-300 cursor-pointer"
              onClick={() => openImageModal({ src: image.src, description: image.description })}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 text-center bg-gray-800 bg-opacity-50 text-white text-lg font-bold">
                {image.description}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal for Large Image View */}
      {selectedImages.length > 0 && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-8">
          <div className={`relative p-4 shadow-lg bg-white ${selectedImages.length > 2 ? 'max-w-2xl' : 'max-w-4xl'} w-full h-[80vh] flex flex-col justify-center items-center mt-16`}>
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 text-white hover:text-gray-300 text-3xl z-10"
              onClick={closeModal}
            >
              × {/* Close button symbol */}
            </button>

            {/* Large Image */}
            <img
              src={selectedImages[selectedImages.length - 1].src}
              alt="Selected"
              className="w-full h-full max-h-[70vh] max-w-[90vw] object-contain"
            />

            {/* Image Description */}
            <div className="mt-4 bg-gray-800 bg-opacity-70 p-2 text-white text-center text-lg font-semibold w-80">
              {selectedImages[selectedImages.length - 1].description}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AlGallery;
