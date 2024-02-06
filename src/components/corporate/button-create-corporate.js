import React, { useState } from 'react'
import { Box, Button, Flex, Text, Input, } from '@chakra-ui/react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Select
} from '@chakra-ui/react'
import { COLORS } from "../../colors/colors";




export const ButtonCreateCorporate = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()

    const [country, setCountry] = useState("");
    const [name, setName] = useState("");
    const [cif, setCif] = useState("");
    const [size, setSize] = useState("");

    return (
        <>
            <Button bg={COLORS.primary} color={'white'} _hover={{bg:'blue.700'}} onClick={onOpen}>Crear corporate</Button>

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Crear Corporate</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody py={5}>
                        <Box fontSize={12} display={'flex'} alignItems={'start'} flexDir={'column'}>
                            <Text fontWeight={"bold"}>Nombre: </Text>
                            <Input value={name} w={300} onChange={(e) => setName(e.target.value)} placeholder={'Corporate Nueva'} />
                            <Flex gap={2}>
                                <Box >
                                    <Text mt={3} fontWeight={"bold"}>
                                        CIF:{" "}
                                    </Text>
                                    <Input
                                        value={cif}
                                        onChange={(e) => setCif(e.target.value)}
                                        placeholder="A12345678"
                                    />
                                </Box>
                                <Box>
                                    <Text mt={3} fontWeight={"bold"}>
                                        Numero de empleados:{" "}
                                    </Text>
                                    <Input
                                        placeholder="20"
                                        type={"number"}
                                        value={size}
                                        onChange={(e) => setSize(e.target.value)}
                                    />
                                </Box>
                            </Flex>


                            <Text mt={3} fontWeight={"bold"}>
                                País:{" "}
                            </Text>
                            <Select placeholder='Select option'>
                                <option value='option1'>Option 1</option>
                                <option value='option2'>Option 2</option>
                                <option value='option3'>Option 3</option>
                            </Select>
                            <Text mt={3} fontWeight={"bold"}>
                                Página web:{" "}
                            </Text>
                            <Input
                                placeholder="www.corporate.com"
                                type={"number"}
                                value={size}
                                onChange={(e) => setSize(e.target.value)}
                            />
                        </Box>
                    </ModalBody>

                    <ModalFooter>
                        <Button variant='ghost' mr={3} onClick={onClose}>
                            cancelar
                        </Button>
                        <Button colorScheme='twitter'>Confirmar</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}
