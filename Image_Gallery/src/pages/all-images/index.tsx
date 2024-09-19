import React from 'react';
import { images } from '../../imageData'; // Import the image data

const AlGallery: React.FC = () => {
  return (
    <div className="p-6 bg-[url('/pictures/main.jpg')] bg-cover bg-center bg-no-repeat">
      <h2 className="text-2xl font-bold mb-4 justify-center">Responsive Image Gallery</h2>

      <div className="flex flex-wrap -m-2">
        {images.map((image, index: number) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/4 p-2">
            <div className="border border-gray-300 hover:border-gray-700 transition-all duration-300">
              <a href={image.src} target="_blank" rel="noopener noreferrer">
                <img src={image.src} alt={image.alt} className="w-full h-48 object-cover" />
              </a>
              <div className="p-4 text-center bg-gray-800 bg-opacity-50 text-white text-lg font-bold">
                {image.description}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AlGallery;
