import React from 'react'
import { Box, Heading, Center, Flex } from '@chakra-ui/react'
import { DigitalProfileDoc } from '../../components/digital-profile/digital-profile-doc'

const DigitalProfilePage = () => {
    return (
        <Box>
            <Center pt={10} flexDir='column'>
                <Heading fontFamily={'Roobert'} pb={1}>
                    Vista previa de tu digital profile
                </Heading>
                <DigitalProfileDoc />
            </Center>
        </Box>
    )
}

export default DigitalProfilePage