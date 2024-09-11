import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/userContext";
import {
  Box,
  Text,
  Flex,
} from "@chakra-ui/react";
import { useBackendUrlBuilder } from "../../hooks/useBackendUrlBuilder";
import axios from "axios";
import { ProfileEdit } from "./profile-edit";
import { ProfileUser } from "./profile-user";

export const Profile = () => {
  const { getToken, userView } = useContext(UserContext);
  const [me, setMe] = useState(null);
  const [showEdit, setShowEdit] = useState(false)

  const getMeURL = useBackendUrlBuilder("/user/me");

  const toggleShowEdit = () => {
    setShowEdit(!showEdit)
  }

  useEffect(() => {
    getMe();
  }, []);

  const getMe = async () => {
    const storedToken = getToken();
    axios
      .get(getMeURL, {
        headers: {
          authorization: `Bearer ${storedToken || ""}`,
        },
      })
      .then((res) => {
        setMe(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };


  return (
    <Box mt={6} p={5} rounded={"xl"} bgColor={"white"} minH={400}>
      <Flex w='full' justify='space-between' mb={5} pb={3} borderBottomWidth={1}>
        <Text fontSize={22} >Perfil</Text>
        <Text cursor={'pointer'} onClick={() => setShowEdit(!showEdit)}>{showEdit ? 'Volver' : 'Editar'}</Text>
      </Flex>
      {showEdit ? <ProfileEdit me={me} refreshData={getMe} /> : <ProfileUser me={me} toggleShowEdit={toggleShowEdit} />}
    </Box>
  );
};
