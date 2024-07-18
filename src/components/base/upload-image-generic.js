import { useState } from "react";
import { Flex, Center, Image, Text, Box } from "@chakra-ui/react";
import { FcOk } from "react-icons/fc";

export const UploadImageGeneric = ({ url, setLogo, hideConfirm }) => {

    const [file, setFile] = useState(null);
    const [previewUrl, setPreviewUrl] = useState(null);
    const [loading, setLoading] = useState(false);
    const [confirmed, setConfirmed] = useState(false);

    const handleSelectFile = (e) => {
        const selectedFile = e.target.files[0];
        setFile(selectedFile);
        setPreviewUrl(URL.createObjectURL(selectedFile)); // Create a local URL for the file
        handleUpload(selectedFile); // Optionally call handleUpload here if you want to upload immediately
    };

    const handleUpload = async (fileToUpload) => {
        try {
            setLoading(true);
            const data = new FormData();
            data.append("logo", fileToUpload || file);
            setLogo(fileToUpload || file);
            setConfirmed(true);
        } catch (error) {
            alert(error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <Box w='full'>
            <Center w='full' pb={5}>
                {previewUrl && (
                    <Image
                        src={previewUrl}
                        alt="Image preview"
                        objectFit="contain"
                        w={20}
                        h={20}
                        mt={2}
                    />
                )}
            </Center>
            <Text fontWeight={"bold"}>
                Logo:{" "}
            </Text>
            <div className="App" style={{ display: 'flex', alignItems: 'center', padding: 3 }}>
                <input
                    id="file"
                    type="file"
                    onChange={handleSelectFile}
                    multiple={false}
                />
                {file && (
                    <FcOk size={20} />
                )}

                {!hideConfirm && file && !confirmed && (
                    <Center>
                        <Text
                            cursor={'pointer'}
                            bg={"cyan.300"}
                            p={1}
                            rounded={'md'}
                            color={"black"}
                            _hover={{ bg: 'gray.100' }}
                            onClick={() => handleUpload(file)}
                        >
                            Confirmar
                        </Text>
                    </Center>
                )}
                {file && (
                    <>
                        <button onClick={() => handleUpload(file)} className="btn-green">
                            {loading && "subiendo foto..."}
                        </button>
                    </>
                )}
            </div>
        </Box>
    );
};
