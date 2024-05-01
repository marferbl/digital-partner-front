import { useContext, useState } from "react";
import axios from "axios";
import { useBackendUrlBuilder } from "../../hooks/useBackendUrlBuilder";
import { UserContext } from "../../context/userContext";
import { Button, Center, Text } from "@chakra-ui/react";

export const ImageUploadInput = ({ url, setLogo }) => {
    const { getToken } = useContext(UserContext);

    const [file, setFile] = useState(null);
    const [loading, setLoading] = useState(false);
    const [confirmed, setConfirmed] = useState(false);
    const [res, setRes] = useState({});
    const handleSelectFile = (e) => {
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
        <div className="App" style={{ display: 'flex', alignItems: 'center', padding: 3 }} >
            <input
                id="file"
                type="file"
                onChange={handleSelectFile}
                multiple={false}

            />
            {file && !confirmed && < Center > <Text cursor={'pointer'} bg={"cyan.300"} p={1} rounded={'md'} color={"black"} _hover={{ bg: 'gray.100' }} onClick={handleUpload}>Confirmar</Text> </Center>}

            {
                file && (
                    <>
                        <button onClick={handleUpload} className="btn-green">
                            {loading && "subiendo foto..."}
                        </button>
                    </>
                )
            }
        </div >
    );
};
