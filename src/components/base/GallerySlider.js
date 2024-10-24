import React from 'react';
import Slider from 'react-slick';
import { Box, Image } from '@chakra-ui/react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";  // Import here
import "../../css/base.css"

const ImageGallerySlider = ({ images }) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };


    return (
        <Box h={{ base: 200, md: 400 }} w={{ base: 200, md: 400 }} mx="auto" mt={5}>
            <Slider {...settings}>
                {images.map((url, index) => (
                    <Box key={index}>
                        <Image src={url} alt={`Gallery image ${index}`} w="100%" h="auto" objectFit="cover" />
                    </Box>
                ))}
            </Slider>
        </Box>
    );
};

export default ImageGallerySlider;
