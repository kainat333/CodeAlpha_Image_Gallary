import React, { useState } from 'react';
import { images } from '../imageData'; // Assuming imageData contains an array of images

const AlGallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<{ src: string; description: string } | null>(null);

  // Function to open the modal with the selected image
  const openImageModal = (image: { src: string; description: string }) => {
    setSelectedImage(image);
  };

  // Function to close the modal
  const closeModal = () => {
    setSelectedImage(null);
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
      {selectedImage && (
        <div className="fixed inset-0 bg-transparent flex items-center justify-center z-50">
          <div className="relative p-4 shadow-lg bg-white w-72 h-86 flex flex-col justify-center items-center mt-16">
            {/* Close Button */}
            <button
              className="absolute top-2 right-2 text-gray-700 hover:text-gray-900 text-2xl"
              onClick={closeModal}
            >
              &times; {/* Close button symbol */}
            </button>

            {/* Large Image */}
            <img
              src={selectedImage.src}
              alt="Selected"
              className="w-full h-auto max-h-[90vh] object-contain"
            />

            {/* Image Description */}
            <div className="mt-4 text-center text-lg font-semibold text-gray-800">
              {selectedImage.description}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AlGallery;
