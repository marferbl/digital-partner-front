import React from 'react'
import { Box, Text } from '@chakra-ui/react'

export const CardPanel = ({ children, title }) => {
    return (
        <Box borderWidth={1} rounded={'lg'} h={'full'} >
            <Text width={'100%'} bg={'gray.100'} roundedTopEnd={'lg'} roundedTopStart={'lg'} textAlign={'center'} py={1}>{title}</Text>
            <Box maxH={400} overflow={'scroll'} p={2}>
                {children}
            </Box>
        </Box>
    )
}
