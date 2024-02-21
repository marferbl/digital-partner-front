import { Center, Box, Text, Flex } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { COLORS } from '../../../colors/colors'
import { getAllSolutions } from '../../../services/solution'
import SectionMarketPlace from '../../marketplace/section-marketplace'

const MarketplaceSection = () => {
    const [solutions, setSolutions] = useState([])

    useEffect(() => {
        getSolutions();
    }, []);

    const getSolutions = () => {
        getAllSolutions().then((res) => {
            setSolutions(res.data.solutions);
        }
        ).catch((error) => {
            console.log(error);
        }
        );
    };

    console.log("solutions", solutions)


    return (
        <Center>
            <Box maxW={'3xl'} px={{ base: 8, md: 2 }}>
                <SectionMarketPlace list={solutions} />
            </Box>
        </Center>
    )
}

export default MarketplaceSection