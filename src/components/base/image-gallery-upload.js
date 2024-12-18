import React, { useState, useContext, useEffect } from "react";
import { Box, Button, Flex, Image, Text, IconButton, Spinner } from "@chakra-ui/react";
import { CloseIcon } from "@chakra-ui/icons";
import axios from "axios";
import { UserContext } from '../../context/userContext';
import { useBackendUrlBuilder } from "../../hooks/useBackendUrlBuilder";


export const ImageGalleryUpload = ({ url, setGalleryImages, defaultUrls }) => {
    const { getToken } = useContext(UserContext); // Assuming you use this for token
    const [files, setFiles] = useState([]); // Store the selected files
    const [loading, setLoading] = useState(false); // Show loading while uploading
    const [uploadedUrls, setUploadedUrls] = useState(defaultUrls || []); // Store URLs of uploaded images
    const [parsedImages, setParsedImages] = useState([]); // Store URLs of uploaded images
    const [localDefaultUrls, setLocalDefaultUrls] = useState(defaultUrls || []); // Store URLs of uploaded images
    const [showUploadedTrue, setShowUploadedTrue] = useState(false);


    useEffect(() => {
        if (defaultUrls) {
            setUploadedUrls(defaultUrls);
            setLocalDefaultUrls(defaultUrls);
        }
    }, [defaultUrls]);


    useEffect(() => {
        if (localDefaultUrls) {
            const alreadyUploaded = localDefaultUrls.map(url => {
                return {
                    url: url,
                    isUploaded: true,
                }
            });

            if (showUploadedTrue) {
                setParsedImages(alreadyUploaded);
                return;
            }
            const unique = [...alreadyUploaded, ...files]

            setParsedImages(unique);
        }
    }, [files, localDefaultUrls])


    // Handle file selection
    const handleSelectFiles = (e) => {
        setShowUploadedTrue(false);

        const selectedFiles = Array.from(e.target.files);
        const fileUrls = selectedFiles.map(file => ({
            file,
            url: URL.createObjectURL(file)
        }));
        setFiles(prevFiles => [...prevFiles, ...fileUrls]);
    };

    const photourl = useBackendUrlBuilder(url);

    // Handle removing an image from the gallery
    const handleRemoveFile = (index, fileObj) => {
        if (!fileObj.isUploaded) {
            const updatedFiles = files.filter((_, i) => i !== index);
            setFiles(updatedFiles);
            return;
        }

        const updatedParsedImages = parsedImages.filter(item => item.url !== fileObj.url);
        setLocalDefaultUrls(updatedParsedImages.map(item => item.url));
        const unique = [...new Set([...updatedParsedImages])];
        setParsedImages(unique);
        setGalleryImages(updatedParsedImages.map(item => item.url));

    };

    // Upload the files one by one
    const handleUpload = async () => {
        const storedToken = getToken();
        const uploadedUrlsArray = [];

        setLoading(true);

        for (let i = 0; i < files.length; i++) {
            const fileObj = files[i].file;
            const formData = new FormData();
            formData.append("logo", fileObj);  // Send each file as 'logo' to match your endpoint

            try {
                const res = await axios.post(photourl, formData, {
                    headers: {
                        authorization: `Bearer ${storedToken || ""}`,
                    },
                });
                uploadedUrlsArray.push(res.data.logo); // Collect the uploaded image URLs
            } catch (error) {
                alert(`Error uploading image ${fileObj.name}: ${error.message}`);
            }
        }

        setLoading(false);
        setShowUploadedTrue(true);

        // Update the state with the uploaded image URLs
        setUploadedUrls(uploadedUrlsArray);
        setGalleryImages([...localDefaultUrls, ...uploadedUrlsArray]);  // Send uploaded URLs to the parent component

    };

    return (
        <Box>
            <Flex direction="column" alignItems="center" gap={4}>
                {/* File Input */}
                <input
                    type="file"
                    onChange={handleSelectFiles}
                    multiple
                    style={{ display: "none" }}
                    id="file-input"
                />
                <label htmlFor="file-input">
                    <Button
                        as="span"
                        cursor="pointer"
                        bg="gray.600"
                        color="white"
                        px="4"
                        py="2"
                        rounded="md"
                        _hover={{ bg: "gray.800" }}
                    >
                        {defaultUrls?.length ? 'Elegir más' : 'Elegir imagenes'}
                    </Button>
                </label>

                {/* Display selected images */}
                {parsedImages.length > 0 && (
                    <Box mt={4}>
                        <Flex wrap="wrap" gap={4}>
                            {parsedImages.map((fileObj, index) => (
                                <Box key={index} position="relative">
                                    <Image
                                        src={fileObj.url}
                                        alt={`Selected ${index}`}
                                        boxSize="100px"
                                        objectFit="cover"
                                        borderRadius="md"
                                    />
                                    {/* Remove image button */}
                                    <IconButton
                                        icon={<CloseIcon />}
                                        size="xs"
                                        colorScheme="red"
                                        position="absolute"
                                        top="0"
                                        right="0"
                                        onClick={() => handleRemoveFile(index, fileObj)}
                                    />
                                </Box>
                            ))}
                        </Flex>
                    </Box>
                )}

                {/* Upload Button */}
                {files.length > 0 && (
                    <Button
                        onClick={handleUpload}
                        colorScheme="green"
                        mt={4}
                        isDisabled={loading}
                    >
                        {loading ? (
                            <Flex align="center">
                                <Spinner size="xs" mr={2} />
                                Subiendo...
                            </Flex>
                        ) : (
                            <>
                                {showUploadedTrue > 0 ? (
                                    <Text color="white" fontSize="sm">
                                        Imagenes subidas
                                    </Text>
                                ) : <Text color="white" fontSize="sm">Confirmar imagenes</Text>}

                            </>
                        )}
                    </Button>
                )}


            </Flex>
        </Box>
    );
};
