import React from 'react'
import { Flex, Text, Box } from '@chakra-ui/react'

export const DemoComponent = ({ solution }) => {
    return (
        <Flex mt={6} p={5} rounded={"xl"} bgColor={"white"} w={"100%"} flexDir='column'>
            <Box>
                <Text w='full'>Puedes solicitar una demo de la solución a través del correo electrónico:</Text>
            </Box>
            <Text color={'blue.300'} textDecor='online'>
                <a href={`mailto:${solution?.corporate?.superadmin?.email}`}>Solicitar demo</a>
            </Text>
        </Flex>
    )
}