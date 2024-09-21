import React, { useState } from 'react';
import { images } from '../../imageData'; // Assuming imageData contains an array of images
import { X } from 'lucide-react'; // Importing Lucide icon

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
        <div className="fixed inset-0 bg-black bg-opacity-95 flex items-center justify-center z-50 p-8">
          <div className="relative bg-white max-w-md w-full h-[86vh] flex flex-col justify-center items-center overflow-hidden">
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 text-black border-2 border-black bg-white rounded-full p-2 flex items-center justify-center z-20"
              onClick={closeModal}
              aria-label="Close modal"
            >
              <X size={22} />
            </button>

            {/* Large Image */}
            <img
              src={selectedImages[selectedImages.length - 1].src}
              alt="Selected"
              className="w-full p-2 h-full object-cover"
            />

          {/* Image Description */}
<div className="absolute bottom-10 p-3 left-1/2 transform -translate-x-1/2 text-white font-bold text-lg bg-black bg-opacity-50 rounded-lg z-10 whitespace-nowrap">
  {selectedImages[selectedImages.length - 1].description}
</div>

          </div>
        </div>
      )}
    </div>
  );
};

export default AlGallery;
