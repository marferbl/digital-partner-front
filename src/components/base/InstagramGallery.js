import React, { useState } from 'react';
import { Box, SimpleGrid, Image, Button, Modal, ModalOverlay, ModalContent, ModalBody, ModalCloseButton, useDisclosure } from '@chakra-ui/react';

const InstagramGallery = ({ images }) => {
    const [displayedImages, setDisplayedImages] = useState(images.slice(0, 6));
    const [selectedImage, setSelectedImage] = useState(null);
    const { isOpen, onOpen, onClose } = useDisclosure();

    const handleSeeMore = () => {
        setDisplayedImages(images);
    };

    const handleImageClick = (image) => {
        setSelectedImage(image);
        onOpen();
    };

    return (
        <Box>
            <SimpleGrid columns={{ base: 2, md: 3 }} spacing={4}>
                {displayedImages.map((image, index) => (
                    <Box
                        key={index}
                        position="relative"
                        cursor="pointer"
                        onClick={() => handleImageClick(image)}
                        _hover={{ opacity: 0.9 }}
                        transition="opacity 0.2s"
                    >
                        <Image
                            src={image}
                            alt={`Gallery image ${index + 1}`}
                            w="100%"
                            h="300px"
                            objectFit="cover"
                            borderRadius="md"
                        />
                    </Box>
                ))}
            </SimpleGrid>

            {images.length > 6 && displayedImages.length === 6 && (
                <Button
                    mt={4}
                    colorScheme="blue"
                    variant="outline"
                    onClick={handleSeeMore}
                    w="full"
                >
                    See More
                </Button>
            )}

            <Modal isOpen={isOpen} onClose={onClose} size="6xl">
                <ModalOverlay />
                <ModalContent bg="black">
                    <ModalCloseButton color="white" />
                    <ModalBody p={0}>
                        {selectedImage && (
                            <Image
                                src={selectedImage}
                                alt="Selected image"
                                w="100%"
                                h="auto"
                                objectFit="contain"
                            />
                        )}
                    </ModalBody>
                </ModalContent>
            </Modal>
        </Box>
    );
};

export default InstagramGallery; 