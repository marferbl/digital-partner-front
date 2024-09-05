import { Box, Image } from '@chakra-ui/react'
import React from 'react'
import { COLORS } from '../../../colors/colors'
import { useTranslation } from 'react-i18next'; // Import useTranslation

export const PhotoFullScreen = () => {
    const { t } = useTranslation('global'); // Use the translation hook

    return (
        <Box position={'relative'}>
            <Image src={"./hero-photo.png"} w={'100%'} h={'xl'} objectFit={'cover'} />
            <Box
                bg={'white'}
                rounded={8}
                position={'absolute'}
                top={{ base: '20%', md: '30%' }}
                left={{ base: 5, md: 20 }}
                p={2}
                fontSize={{ base: 20, md: 30 }}
                maxW={{ base: '70%', md: '40%' }}
            >
                {t('challengeAloneSucceedTogether')}
            </Box>
            <Box
                bg={COLORS.secondary}
                rounded={8}
                position={'absolute'}
                top={{ base: '40%', md: '60%' }}
                left={{ base: 5, md: 20 }}
                color={'white'}
                p={2}
                fontSize={{ base: 16, md: 26 }}
                maxW={{ base: '60%', md: '70%' }}

            >
                {t('formAnUnstoppableTeam')}
            </Box>
        </Box>
    )
}
