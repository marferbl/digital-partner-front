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
    InputGroup,
    InputRightElement
} from "@chakra-ui/react";
import { useToast } from "@chakra-ui/react";
import axios from "axios";
import { isEmpty } from "../../hooks/isEmpty";
import { changePassword, editPassword, login, signup } from "../../services/auth";
import { UserContext } from "../../context/userContext";
import { COLORS } from "../../colors/colors";
import { AiFillEye } from "react-icons/ai";
import { AiFillEyeInvisible } from "react-icons/ai";

const EditPassword = () => {
    const [showPassword, setShowPassword] = useState(false);
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
        setPassword("");
    };

    const handleSubmit = () => {
        setLoading(true);
        if (isEmpty(password)) {
            setEmptyFieldMessage(true);
        } else {
            editPassword(password)
                .then((res) => {
                    setLoading(false);
                    storeToken(res.data.token);
                    setEmptyFieldMessage(false);
                    toast({
                        title: "OK",
                        description: "Contraseña cambiada",
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
            <Flex justify="center" w={'full'} pb={10}>
                <Text fontSize={14} mr={1} onClick={onOpen} colorScheme="blue" mt={2} cursor={'pointer'} _hover={{ textDecor: 'underline' }}>Cambiar contraseña</Text>
            </Flex>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Cambiar Contraseña</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Box py={0} rounded={"xl"} bgColor={"white"}>
                            <FormControl isRequired my={5}>
                                <FormLabel htmlFor="password">Nueva contraseña</FormLabel>
                                <InputGroup>
                                    <Input
                                        id="password"
                                        placeholder="Password"
                                        type={showPassword ? 'text' : 'password'}
                                        onChange={(e) => setPassword(e.target.value)}
                                        value={password}
                                        onKeyDown={handleKeyPress}
                                    />
                                    <InputRightElement >
                                        <Text
                                            h="1.75rem"
                                            size="sm"
                                            cursor={"pointer"}
                                            onClick={() => setShowPassword(!showPassword)}
                                            marginTop={"35%"}
                                        >
                                            {!showPassword ? <AiFillEye /> : <AiFillEyeInvisible />}
                                        </Text>
                                    </InputRightElement></InputGroup>

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
                            Cambiar contraseña
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
};

export default EditPassword;
