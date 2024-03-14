import { Center, Box, Text, Flex } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { COLORS } from '../../../colors/colors'
import { getAllSolutions } from '../../../services/solution'
import SectionMarketPlace from '../../marketplace/section-marketplace'

const MarketplaceSection = ({ term, filters }) => {
    const [solutions, setSolutions] = useState([])

    useEffect(() => {
        if (!!term || (filters && Object.keys(filters).length > 0)) getSolutions()
    }, [term, filters]);

    const getSolutions = () => {
        getAllSolutions({ term: term, ...filters }).then((res) => {
            setSolutions(res.data.solutions);

        }
        ).catch((error) => {
            console.log(error);
        }
        );
    };

    return (
        <Center w='full' px={{ base: 2, lg: 5 }}>
            <Box w='full' px={{ base: 8, md: 2 }}>
                <SectionMarketPlace list={solutions} />
            </Box>
        </Center>
    )
}

export default MarketplaceSection