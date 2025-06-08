import React, { useState } from 'react';

const FeedGallery = ({ images }) => {
    const [displayedImages, setDisplayedImages] = useState(images.slice(0, 6));
    const [selectedImage, setSelectedImage] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleSeeMore = () => {
        setDisplayedImages(images);
    };

    const handleImageClick = (image) => {
        setSelectedImage(image);
        setIsModalOpen(true);
    };

    return (
        <div className="w-full max-w-[1500px] mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {displayedImages.map((image, index) => (
                    <div
                        key={index}
                        className="relative"
                    >
                        <img
                            src={image}
                            alt={`Gallery image ${index + 1}`}
                            className="w-full h-[250px] sm:h-[300px] object-cover rounded-lg transition-opacity duration-200 hover:opacity-90 cursor-pointer"
                            onClick={() => handleImageClick(image)}
                        />
                    </div>
                ))}
            </div>

            {images.length > 6 && displayedImages.length === 6 && (
                <div className="flex justify-center">
                    <button
                        onClick={handleSeeMore}
                        className="w-64 mx-auto mt-4 px-4 py-2 border border-white text-white rounded-lg hover:bg-white hover:text-black transition-colors duration-200"
                    >
                        Ver más
                    </button>
                </div>
            )}

            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90">
                    <div className="relative w-full max-w-6xl mx-4">
                        <button
                            onClick={() => setIsModalOpen(false)}
                            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors duration-200"
                        >
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>
                        {selectedImage && (
                            <img
                                src={selectedImage}
                                alt="Selected image"
                                className="w-full h-auto object-contain"
                            />
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default FeedGallery; 