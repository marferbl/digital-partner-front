import { useContext, useState } from "react";
import axios from "axios";
import { useBackendUrlBuilder } from "../../hooks/useBackendUrlBuilder";
import { UserContext } from "../../context/userContext";
import { Flex, Center, Spinner, Text, Button } from "@chakra-ui/react";

export const ImageUploadInput = ({ url, setLogo, hideConfirm }) => {
    const { getToken } = useContext(UserContext);

    const [file, setFile] = useState(null);
    const [loading, setLoading] = useState(false);
    const [confirmed, setConfirmed] = useState(false);
    const [res, setRes] = useState({});
    const handleSelectFile = (e) => {
        setConfirmed(false);
        setFile(e.target.files[0]);
    };
    const updatePhotoURL = useBackendUrlBuilder(url);
    const handleUpload = async () => {
        const storedToken = getToken();
        try {
            setLoading(true);
            const data = new FormData();
            data.append("logo", file);
            const res = await axios.post(updatePhotoURL, data, {
                headers: {
                    authorization: `Bearer ${storedToken || ""}`,
                },
            });
            setRes(res.data);
            setLogo(res.data.logo)
            setConfirmed(true)
        } catch (error) {
            alert(error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="App" style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', gap: '1rem', padding: '1rem' }}>
            {/* File input */}

            {file ? (
                <Center>
                    <Text>{file.name}</Text>
                </Center>
            ) : null}
            <input
                id="file"
                type="file"
                onChange={handleSelectFile}
                multiple={false}
                style={{
                    display: 'none',
                }}
            />
            {(file && confirmed || !file) && < label htmlFor="file">
                <Button
                    as="span"
                    cursor="pointer"
                    bg="blue.400"
                    color="white"
                    px="4"
                    py="2"
                    rounded="md"
                    _hover={{ bg: 'blue.500' }}
                    size={file ? "xs" : "md"}
                >
                    {file ? "Cambiar la foto" : "Elegir foto"}
                </Button>
            </label>}

            {/* Show confirm button only after a file is selected */}
            {
                file && !confirmed && (
                    <Button
                        onClick={handleUpload}
                        colorScheme="green"
                        disabled={loading}
                        _hover={{ bg: 'green.500' }}
                    >
                        {loading ? (
                            <Flex align="center">
                                <Spinner size="xs" mr={2} />
                                <Text>Uploading...</Text>
                            </Flex>
                        ) : (
                            'Confirmar foto'
                        )}
                    </Button>
                )
            }
        </div >
    );
};
