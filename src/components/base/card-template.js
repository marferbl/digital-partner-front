import React from 'react'
import { Box } from '@chakra-ui/react'

const CardTemplate = ({ children, props }) => {

    return (
        <Box colSpan={1} shadow='lg' borderWidth={1} rounded={'lg'} p={4} w='full' minH={150} {...props}>
            {children}
        </Box>
    )
}

export default CardTemplate