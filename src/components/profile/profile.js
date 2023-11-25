import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/userContext";
import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  Image,
  Input,
  Text,
  useToast,
} from "@chakra-ui/react";
import { useBackendUrlBuilder } from "../../hooks/useBackendUrlBuilder";
import axios from "axios";
import { ImageUpload } from "./image-upload";

export const Profile = () => {
  const { getToken, loggedUser } = useContext(UserContext);
  const [me, setMe] = useState(null);
  const toast = useToast()

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [phone, setPhone] = useState("");
  const [job, setJob] = useState("");

  const getMeURL = useBackendUrlBuilder("/user/me");
  const updateMeURL = useBackendUrlBuilder("/user/update");

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
        setEmail(res.data.email);
        setName(res.data.name);
        setAge(res.data.age);
        setPhone(res.data.phone);
        setJob(res.data.job);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const updateProfile = async () => {
    const storedToken = getToken();
    axios
      .put(
        updateMeURL,
        { email, name, age, phone, job },
        {
          headers: {
            authorization: `Bearer ${storedToken || ""}`,
          },
        }
      )
      .then((res) => {
        setMe(res.data);
        toast({
          description: "Cambios guardados",
          duration: 4000,
          variant:"left-accent",
          isClosable: false,
          position:'bottom-left'
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  
  return (
    <Box>
      <Heading>Perfil</Heading>
      <Box mt={6} p={5} rounded={"xl"} bgColor={"white"} w={"100%"} display={'flex'} alignItems={'center'} flexDir={'column'}>
        <Center w={"100%"} mb={10}>
          <Image rounded={"xl"} h={100} src={me?.avatar} />
        </Center>
        <Center w={"100%"} mb={10}>
        <ImageUpload refreshData={getMe}/>

        </Center>
        <Text fontWeight={"bold"}>Nombre: </Text>
        <Input value={name} w={300} onChange={(e) => setName(e.target.value)} />
        <Text mt={3} fontWeight={"bold"}>
          Correo electrónico:{" "}
        </Text>
        <Input
          value={email}
          w={300}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Text mt={3} fontWeight={"bold"}>
          Edad:
        </Text>
        <Input
          placeholder="20"
          type={"number"}
          value={age}
          w={300}
          onChange={(e) => setAge(e.target.value)}
        />
        <Text mt={3} fontWeight={"bold"}>
          Teléfono:{" "}
        </Text>
        <Input
          placeholder="600 11 22 33"
          type={"number"}
          value={phone}
          w={300}
          onChange={(e) => setPhone(e.target.value)}
        />
        <Text mt={3} fontWeight={"bold"}>
          Puesto:{" "}
        </Text>
        <Input
          placeholder="Front end developer"
          value={job}
          w={300}
          onChange={(e) => setJob(e.target.value)}
        />
        <Flex justify={"flex-end"} w={"100%"}>
          <Button bg={"cyan.400"} color={"white"} _hover={{bg: "orange.200", color: "gray.600"}} onClick={updateProfile}>Confirmar cambios </Button>
        </Flex>
      </Box>
    </Box>
  );
};
