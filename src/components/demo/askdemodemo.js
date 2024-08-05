import React from 'react'
import { Flex, Text, Box, Icon, Center } from '@chakra-ui/react'
import { FiMail, FiNavigation } from "react-icons/fi";


export const AskForDemoComponent = () => {
    return (
        <Flex mt={6} p={5} rounded={"xl"} bgColor={"white"} w={"100%"} flexDir='column' >
            <Center>
                Puedes solicitar una demo de la solución a través del correo electrónico o enviar una solicitud por la propia página web.
            </Center>
            <Box>

            </Box>
            <Center gap={3} pt={8}>
                <Flex color={'blue.300'} textDecor='online' align={'center'} flexDir='column' gap={4} shadow='lg' p={4} w={160} rounded={'lg'}>
                    <Icon as={FiMail} w={10} h={10} />
                    <Text pointerEvents={'none'} _hover={{ textDecoration: 'underline' }}>
                        <a href={''}>Solicitar demo</a>
                    </Text>
                </Flex>

                <Flex color={'blue.300'} textDecor='online' align={'center'} flexDir='column' gap={4} shadow='lg' p={4} w={160} rounded={'lg'}>
                    <Icon as={FiNavigation} w={10} h={10} />
                    <Text pointerEvents={'none'} _hover={{ textDecoration: 'underline' }}>
                        <a href={''}>Enviar Petición</a>
                    </Text>
                </Flex>
            </Center>
        </Flex>
    )
}
