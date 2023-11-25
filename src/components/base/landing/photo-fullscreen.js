import { Box, Image } from '@chakra-ui/react'
import React from 'react'
import { COLORS } from '../../../colors/colors'

export const PhotoFullScreen = () => {
    return (
        <Box position={'relative'}>
            <Image src={"./hero-photo.png"} w={'100%'} h={'xl'} objectFit={'cover'} />
            <Box bg={'white'} rounded={8} position={'absolute'} top={{ base: '20%', md: '30%' }} left={{ base: 5, md: 20 }} p={2} fontSize={{ base: 20, md: 30 }}>
                Desafía solo, triunfad juntos.<br /> Esta es tu comunidad.
            </Box>
            <Box bg={COLORS.secondary} rounded={8} position={'absolute'} top={{ base: '40%', md: '60%' }} left={{ base: 5, md: 20 }} color={'white'} p={2} fontSize={{ base: 16, md: 26 }}>
                Forma un equipo imparable<br /> rompiendo estándares.
            </Box>
        </Box>
    )
}
