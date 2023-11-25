import { useContext, useState } from "react";
import axios from "axios";
import { useBackendUrlBuilder } from "../../hooks/useBackendUrlBuilder";
import { UserContext } from "../../context/userContext";
import { Button, Center, Text } from "@chakra-ui/react";

export const ImageUpload = ({ refreshData }) => {
  const { getToken } = useContext(UserContext);

  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [res, setRes] = useState({});
  const handleSelectFile = (e) => {
    setFile(e.target.files[0]);
  };
  const updatePhotoURL = useBackendUrlBuilder("/user/change/avatar");

  const handleUpload = async () => {
    const storedToken = getToken();
    try {
      setLoading(true);
      const data = new FormData();
      data.append("avatar", file);
      const res = await axios.post(updatePhotoURL, data, {
        headers: {
          authorization: `Bearer ${storedToken || ""}`,
        },
      });
      setRes(res.data);
      refreshData();
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <input
        id="file"
        type="file"
        onChange={handleSelectFile}
        multiple={false}
        
      />
      {file &&<Center pt={5}> <Button  bg={"cyan.400"} color={"white"} _hover={{bg: "orange.200", color: "gray.600"}} onClick={handleUpload}>Confirmar</Button> </Center>}

      {file && (
        <>
          <button onClick={handleUpload} className="btn-green">
            {loading && "uploading..."}
          </button>
        </>
      )}
    </div>
  );
};
