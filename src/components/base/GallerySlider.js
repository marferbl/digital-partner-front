import React from 'react';
import Slider from 'react-slick';
import { Box, Image } from '@chakra-ui/react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";  // Import here
import "../../css/base.css"

const ImageGallerySlider = ({ images, width, height, hideArrows }) => {
    const settings = {
        dots: true,
        arrows: !hideArrows,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };


    return (
        <Box h={{ base: height || 200, md: height || '100%' }} w={{ base: width || 200, md: width || '100%' }} mx="auto" mt={5} bg='transparent'>
            <Slider {...settings}>
                {images.map((url, index) => (
                    <Box key={index} w='full' bg='transparent'>
                        <Image src={url} alt={`Gallery image ${index}`} w="100%" h={'100%'} objectFit="contain" />
                    </Box>
                ))}
            </Slider>
        </Box>
    );
};

export default ImageGallerySlider;
