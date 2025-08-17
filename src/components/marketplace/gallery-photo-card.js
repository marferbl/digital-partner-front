import React, { useState } from 'react';

const GalleryPhotoCard = ({ gallery }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Function to handle dot click
    const handleDotClick = (index) => {
        setCurrentIndex(index);
    };

    return (
        <div className="w-full pb-1">
            {/* Image with transition */}
            <img
                src={gallery && gallery.length ? gallery[currentIndex] : 'https://www.shutterstock.com/image-vector/image-icon-600nw-211642900.jpg'}
                alt=""
                className="w-full aspect-video rounded-lg object-cover transition-all duration-500 ease-in-out"
            />

            {/* Dots below the image */}
            <div className="flex justify-center mt-2 space-x-2">
                {gallery && gallery.length ? gallery.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => handleDotClick(index)}
                        className={`w-2 h-2 rounded-full ${currentIndex === index ? 'bg-gray-600' : 'bg-gray-300'
                            } transition-colors duration-300 ease-in-out`}
                    ></button>
                )) : ''}
            </div>
        </div>
    );
};

export default GalleryPhotoCard;
