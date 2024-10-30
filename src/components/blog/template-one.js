import React from 'react';

const TemplateOne = ({ config }) => {
    return (
        <div>
            {config ? (
                <div>
                    <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold">{config.title}</h2>
                    <h3 className="text-md md:text-lg lg:text-xl font-semibold text-gray-500 mt-4 mb-8">
                        {config.subtitle}
                    </h3>

                    {/* First Text Section with Image */}
                    <div className="flex flex-col md:flex-row items-start gap-4 mt-2">
                        <div>
                            {config.subtitlesSections[0] && (
                                <h4 className="text-lg md:text-xl font-semibold text-gray-700">{config.subtitlesSections[0]}</h4>
                            )}
                            <p className="text-sm md:text-base mt-2">{config.textSections[0]}</p>
                        </div>
                        {config.imageLinks[0] && (
                            <img src={config.imageLinks[0]} alt="Image 1" className="w-full md:w-1/3 h-auto rounded" />
                        )}
                    </div>

                    {/* Remaining Text Sections with Subtitles and Images */}
                    <div className="mt-4 space-y-6">
                        {config.textSections.slice(1).map((text, index) => (
                            <div key={index} className="space-y-2">
                                {config.subtitlesSections[index + 1] && (
                                    <h4 className="text-lg md:text-xl font-semibold text-gray-700">
                                        {config.subtitlesSections[index + 1]}
                                    </h4>
                                )}
                                <p className="text-sm md:text-base text-gray-700">{text}</p>
                                {config.imageLinks[index + 1] && (
                                    <img
                                        src={config.imageLinks[index + 1]}
                                        alt={`Image ${index + 2}`}
                                        className="w-full md:w-1/3 h-auto rounded mt-2"
                                    />
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default TemplateOne;
