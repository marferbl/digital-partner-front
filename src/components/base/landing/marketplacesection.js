import { Center, Box, Text, Flex } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import { COLORS } from '../../../colors/colors'
import SectionMarketPlace from '../../marketplace/section-marketplace'

const MarketplaceSection = () => {
    return (
        <Center>
            <Box maxW={'3xl'} px={{base: 8, md:2}}>
                <Flex w={'full'} justify={'end'}>
                    <Link to={'marketplace'}>
                        <Text mb={-5} fontSize={14} color={COLORS.primary}>Ver el marketplace</Text>
                    </Link>
                </Flex>
                <SectionMarketPlace />
            </Box>
        </Center>
    )
}

export default MarketplaceSection