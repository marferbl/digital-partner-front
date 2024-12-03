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
import ModalDefaultPhoto from "../base/modal-default-photos";
import { FiEdit } from "react-icons/fi";
import { updateMe } from "../../services/auth";

export const ProfileEdit = ({ me, refreshData }) => {
    const toast = useToast()
    const { getToken } = useContext(UserContext);


    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [phone, setPhone] = useState("");
    const [job, setJob] = useState("");
    const [logo, setLogo] = useState('');

    useEffect(() => {
        setEmail(me?.email);
        setName(me?.name);
        setAge(me?.age);
        setPhone(me?.phone);
        setJob(me?.job);
        setLogo(me?.avatar);
    }, [])


    const updateMeURL = useBackendUrlBuilder("/user/update");

    const updateProfile = async () => {
        const storedToken = getToken();
        axios
            .put(
                updateMeURL,
                { email, name, age, phone, job, avatar: logo || me?.avatar },
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

    const onSave = (logo) => {
        updateMe({ email, name, age, phone, job, avatar: logo }).then((res) => {
            setLogo(logo)
        })
    }

    return (
        <Box>
            <Box display={'flex'} alignItems={'center'} flexDir={'column'} color={DARK_COLORS.neutral} p={4}>
                <ModalDefaultPhoto defaultImage={me?.avatar} setLogo={setLogo} onSave={onSave}>
                    <div className="relative w-20 h-20 md:w-40 md:h-40 ml-0 md:ml-10">
                        {/* Image */}
                        <img
                            src={logo || '/profile-photos/profile-photo-1.png'}
                            alt="Profile Avatar"
                            className="w-20 h-20 md:w-40 md:h-40 rounded-xl"
                        />

                        {/* Edit Icon */}
                        <div className="absolute top-0 left-0 bg-neutral rounded-full p-1 shadow-md cursor-pointer">
                            <FiEdit className="text-gray-600" size={20} />
                        </div>
                    </div>

                </ModalDefaultPhoto>
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
