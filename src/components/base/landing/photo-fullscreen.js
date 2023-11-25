import { Box, Image } from '@chakra-ui/react'
import React from 'react'
import { COLORS } from '../../../colors/colors'

export const PhotoFullScreen = () => {
    return (
        <Box position={'relative'}>
            <Image src={"./hero-photo.png"} w={'100%'} h={'xl'} objectFit={'cover'} />
            <Box bg={'white'} rounded={8} position={'absolute'} top={'30%'} left={20} p={2} fontSize={30}>
                Hacemos guays las cosas,<br /> como de costumbre.
            </Box>
            <Box bg={COLORS.secondary} rounded={8} position={'absolute'} top={'60%'} color={'white'} left={20} p={2} fontSize={26}>
                Hacemos guays las cosas,<br /> como de costumbre.
            </Box>
        </Box>
    )
}
