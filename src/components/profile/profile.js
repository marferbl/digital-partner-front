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
import AlertDigi from "../base/AlertDigi";
import { getCorporate } from "../../services/corporate";

export const Profile = () => {
  const { getToken, changeUserView } = useContext(UserContext);
  const [me, setMe] = useState(null);
  const [showEdit, setShowEdit] = useState(false)

  const getMeURL = useBackendUrlBuilder("/user/me");
  const [corporate, setCorporate] = useState(null);
  const [hideTag, setHideTag] = useState(false);

  useEffect(() => {
    getMyCorporate();
  }, []);

  const toggleShowEdit = () => {
    setShowEdit(!showEdit)
  }

  const getMyCorporate = async () => {
    getCorporate().then((res) => {
      setCorporate(res.data.corporate);
    }).catch((err) => {
      console.log(err);
    });
  };


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

  const hasCorporate = () => {
    return corporate && corporate._id;
  }


  return (
    <Box mt={6} p={5} rounded={"xl"} bgColor={"black"} minH={400}>
      {(!hasCorporate() && !hideTag) && <AlertDigi text='¿Empresa? Crea ahora tu cuenta Corporate y descubre por qué la gente adora Digitalando'>
        <div className="flex items-center gap-4">
          <span onClick={changeUserView} className="font-semibold py-2 px-6 rounded-lg bg-light cursor-pointer hover:bg-[#2c5282]">¡Crea tu cuenta!</span>
          <span onClick={() => setHideTag(true)} className="font-semibold py-2 px-6 rounded-lg bg-light text-black cursor-pointer hover:bg-[#2c5282]">Más tarde</span>
        </div>
      </AlertDigi>}
      <Flex w='full' justify='space-between' mt={5} pb={3}>
        <Text fontSize={22} >''</Text>
        <Text cursor={'pointer'} color='white' onClick={() => setShowEdit(!showEdit)}>{showEdit ? 'Volver' : 'Editar'}</Text>
      </Flex>
      <Box borderWidth={1} rounded='2xl' >
        {showEdit ? <ProfileEdit me={me} refreshData={getMe} /> : <ProfileUser me={me} toggleShowEdit={toggleShowEdit} />}ç
      </Box>
      <div className="flex items-center justify-center">
        <video src={'/videos/logo-symbol.mp4'} autoPlay loop muted style={{ width: '600px', height: '600px' }} />
      </div>
    </Box >
  );
};
