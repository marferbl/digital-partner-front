import React from 'react'
import { Box, Text } from '@chakra-ui/react';
export const CertificationComponent = () => {
    return (
        <Box>
            <Text fontSize="xl" fontWeight="bold" my={3}>Certificaciones</Text>

            <Box p={4} borderWidth="1px" borderRadius="lg" w={'fit-content'} px={8}>
                Certificación Zoho:
                <Text color={'blue.300'}>
                    <a href="https://www.zoho.com/es-xl/spark/training-certification.html" target="_blank">Ir a la certificación</a>
                </Text>
            </Box>
        </Box>
    )
}
