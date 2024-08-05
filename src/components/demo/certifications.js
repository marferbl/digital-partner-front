import React from 'react'
import { Flex, Text, Box } from '@chakra-ui/react'

const CertificationsDemo = () => {
    return (
        <Box p={10} maxW={600}>
            <Flex align='center' gap={10} p={4} border='1px solid' borderColor='gray.200' borderRadius={5} my={2}>
                <Text w={300} fontSize='lg' fontWeight='bold'>{'Certificación nivel 1 de uso'}</Text>
                <Text color={'blue.300'} _hover={{ textDecor: 'underline' }}>
                    <a href={''} target='_blank' fontSize='sm'>Ir a la certificación</a>
                </Text>
            </Flex>
            <Flex align='center' gap={10} p={4} border='1px solid' borderColor='gray.200' borderRadius={5} my={2}>
                <Text w={300} fontSize='lg' fontWeight='bold'>{'Certificación nivel 2 de uso'}</Text>
                <Text color={'blue.300'} _hover={{ textDecor: 'underline' }}>
                    <a href={''} target='_blank' fontSize='sm'>Ir a la certificación</a>
                </Text>
            </Flex>
            <Flex align='center' gap={10} p={4} border='1px solid' borderColor='gray.200' borderRadius={5} my={2}>
                <Text w={300} fontSize='lg' fontWeight='bold'>{'Certificación de implantación'}</Text>
                <Text color={'blue.300'} _hover={{ textDecor: 'underline' }}>
                    <a href={''} target='_blank' fontSize='sm'>Ir a la certificación</a>
                </Text>
            </Flex>
        </Box>
    )
}

export default CertificationsDemo