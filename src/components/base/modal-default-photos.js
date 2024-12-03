import React, { useEffect, useState } from "react";
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalCloseButton,
    Flex,
    Box,
    Image,
    Grid,
    Text,
    useDisclosure,
    ModalFooter,
} from "@chakra-ui/react";
import { ImageUploadInput } from "./image-upload.js";
import CustomButton from "./CustomButton";
import { DARK_COLORS } from "../../colors/colors.js";

const ModalDefaultPhoto = ({ setLogo, children, defaultImage, onSave }) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const defaultImages = [
        "https://res.cloudinary.com/df82flqqr/image/upload/v1732793991/digitalando_3d_logo_grass_01_lzhzdw.jpg",
        "https://res.cloudinary.com/df82flqqr/image/upload/v1732793991/digitalando_3d_logo_paint_02_bsdq4p.jpg",
        "https://res.cloudinary.com/df82flqqr/image/upload/v1732793991/digitalando_3d_logo_bacon_01_la3cmo.jpg",
        "https://res.cloudinary.com/df82flqqr/image/upload/v1732793991/digitalando_3d_logo_metal_08_h3wkt2.jpg",
        "https://res.cloudinary.com/df82flqqr/image/upload/v1732793991/digitalando_3d_logo_fire_02_gv25ml.jpg",
        "https://res.cloudinary.com/df82flqqr/image/upload/v1732793990/digitalando_3d_logo_cheese_01_hvtd3z.jpg",
        "https://res.cloudinary.com/df82flqqr/image/upload/v1732793991/digitalando_3d_logo_coffee_01_mcqaeq.jpg"
    ];

    const [selectedImage, setSelectedImage] = useState(defaultImage);

    const handleImageClick = (image) => {
        setSelectedImage(image);
    };

    useEffect(() => {
        setSelectedImage(defaultImage);
    }, [defaultImage]);


    const sendPhoto = () => {
        onSave(selectedImage)
        onClose()
    }



    return (
        <>
            {/* Button to Open Modal */}
            <div onClick={onOpen}>
                {children}
            </div>

            {/* Modal */}
            <Modal isOpen={isOpen} onClose={onClose} size={{base: 'xl', md: "2xl"}}>
                <ModalOverlay />
                <ModalContent bg="black" shadow={'xl'} borderWidth={1} borderColor='white' p={6} color='white'>
                    <ModalHeader as={Text}>
                        Elige una foto de perfil
                    </ModalHeader>
                    <ModalCloseButton />
                    <ModalBody >
                        <Box display={{ base: "block", md: "flex" }} gap={{ base: 4, lg: 24 }} >
                            {/* Left Column */}
                            <Flex>
                                {selectedImage && <img src={selectedImage} alt="Selected" class="w-20 h-20" />}
                                <Box mb={{ base: 4, md: 0 }}>
                                    <ImageUploadInput url={`image/upload`} setLogo={setLogo} hideLink />
                                </Box>
                            </Flex>

                            {/* Right Column */}
                            <Box flex="1">
                                <Text fontSize="lg" fontWeight="medium" mb={4} color={DARK_COLORS.neutral}>
                                    O selecciona una predeterminada
                                </Text>
                                <Flex flexWrap='wrap' gap={4}>
                                    {defaultImages.map((image, index) => (
                                        <Box
                                            key={index}
                                            cursor="pointer"
                                            borderWidth="2px"
                                            borderColor={selectedImage === image ? "blue.500" : "gray.300"}
                                            borderRadius="lg"
                                            overflow="hidden"
                                            onClick={() => handleImageClick(image)}
                                        >
                                            <Image src={image} alt={`Default ${index + 1}`} height={14} width={14}  />
                                        </Box>
                                    ))}
                                </Flex>
                            </Box>
                        </Box>
                    </ModalBody>
                    <ModalFooter>
                        <CustomButton onClick={sendPhoto} text='Guardar' showIcon></CustomButton>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
};

export default ModalDefaultPhoto;
