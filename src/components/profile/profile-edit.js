import { useState, useContext, useEffect } from "react";
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
import { UserContext } from "../../context/userContext";
import EditPassword from "../Login/Edit-password";
import { DARK_COLORS } from "../../colors/colors";

export const ProfileEdit = ({ me, refreshData }) => {
    const toast = useToast()
    const { getToken } = useContext(UserContext);


    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [phone, setPhone] = useState("");
    const [job, setJob] = useState("");

    useEffect(() => {
        setEmail(me?.email);
        setName(me?.name);
        setAge(me?.age);
        setPhone(me?.phone);
        setJob(me?.job);
    }, [])


    const updateMeURL = useBackendUrlBuilder("/user/update");

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
                window.location.reload();
                toast({
                    description: "Cambios guardados",
                    duration: 4000,
                    variant: "left-accent",
                    isClosable: false,
                    position: 'bottom-left'
                });
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <Box>
            <Box display={'flex'} alignItems={'center'} flexDir={'column'} color={DARK_COLORS.neutral} p={4}>
                <Center w={"100%"} mb={10}>
                    <Image rounded={"xl"} h={100} src={me?.avatar} />
                </Center>
                <Center w={"100%"} mb={3}>
                    <ImageUpload refreshData={refreshData} />
                </Center>
                <EditPassword />
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
                    <Button bg={"cyan.400"} color={"white"} _hover={{ bg: "orange.200", color: "gray.600" }} onClick={updateProfile}>Confirmar cambios </Button>
                </Flex>
            </Box>
        </Box>
    );
};
