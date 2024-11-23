import React, { useState, useContext, useRef } from "react";
import {
    Text,
    Box,
    FormControl,
    FormLabel,
    Input,
    Button,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Flex,
} from "@chakra-ui/react";
import { useToast } from "@chakra-ui/react";
import axios from "axios";
import { isEmpty } from "../../hooks/isEmpty";
import { changePassword, login, signup } from "../../services/auth";
import { UserContext } from "../../context/userContext";
import { useNavigate } from "react-router-dom";
import { COLORS, DARK_COLORS } from "../../colors/colors";

const ChangePassword = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    const toast = useToast();
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [emptyFieldMessage, setEmptyFieldMessage] = useState(false);

    const { storeToken, authenticateUser } = useContext(UserContext);
    const buttonRef = useRef(null);

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault(); // Prevent form submission
            buttonRef.current.click(); // Simulate a click on the "Entrar" button
        }
    };

    const resetFields = () => {
        setEmail("");
        setPassword("");
    };

    const handleSubmit = () => {
        setLoading(true);
        if (isEmpty(email)) {
            setEmptyFieldMessage(true);
        } else {
            changePassword(email)
                .then((res) => {
                    setLoading(false);
                    storeToken(res.data.token);
                    setEmptyFieldMessage(false);
                    authenticateUser();
                    toast({
                        title: "OK",
                        description: "Correo enviado",
                        status: "success",
                        duration: 5000,
                        isClosable: true,
                    });
                    onClose();
                })
                .catch((err) => {
                    console.log(err);
                    setLoading(false);
                    toast({
                        title: "ERROR",
                        description: err.response.data.message,
                        status: "error",
                        duration: 5000,
                        isClosable: true,
                    });
                });
            resetFields();
        }
    };

    return (
        <>
            <Flex justify="end" w={'full'}>
                <Text fontSize={14} color={DARK_COLORS.neutral} mr={1} onClick={onOpen} colorScheme="blue" mt={2} cursor={'pointer'} _hover={{ textDecor: 'underline' }}>Contraseña olvidada</Text>
            </Flex>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Contraseña olvidada</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Box py={0} rounded={"xl"} bgColor={"white"}>
                            <FormControl isRequired my={5}>
                                <FormLabel htmlFor="email">Correo electronico</FormLabel>
                                <Input
                                    id="email"
                                    placeholder="email"
                                    onChange={(e) => setEmail(e.target.value)}
                                    value={email}
                                    onKeyDown={handleKeyPress}
                                />
                            </FormControl>


                            {emptyFieldMessage && (
                                <Text my={2} color={"red"}>
                                    Rellena todos los campos
                                </Text>
                            )}
                        </Box>
                    </ModalBody>

                    <ModalFooter>
                        <Button
                            ref={buttonRef} // Assign a ref to the button
                            bg={COLORS.primary}
                            color={'white'}
                            type="submit"
                            onClick={handleSubmit}
                            isLoading={loading}
                        >
                            Enviar correo de recuperación
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
};

export default ChangePassword;
