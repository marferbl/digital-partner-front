import { Center, Box, Text, Icon, Spinner } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { COLORS } from '../../../colors/colors'
import { getAllSolutions } from '../../../services/solution'
import SectionMarketPlace from '../../marketplace/section-marketplace'
import { FiAirplay } from 'react-icons/fi'

const MarketplaceSection = ({ term, filters }) => {
    const [solutions, setSolutions] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        if (!!term || (filters && Object.keys(filters).length > 0)) getSolutions()
    }, [term, filters]);

    const getSolutions = () => {
        setLoading(true)
        getAllSolutions({ term: term, ...filters }).then((res) => {
            setLoading(false)
            setSolutions(res.data.solutions);

        }
        ).catch((error) => {
            setLoading(false)
            console.log(error);
        }
        );
    };

    return (
        <Center w='full' px={{ base: 2, lg: 5 }}>
            <Box w='full' px={{ base: 8, md: 2 }}>
                {loading ? <Center> <Spinner
                    thickness='4px'
                    speed='0.65s'
                    emptyColor='gray.200'
                    color='blue.500'
                    size='xl'
                /></Center> : solutions.length === 0 ?
                    <Center flexDir={'column'}>
                        <Icon
                            fontSize={60}
                            _groupHover={{
                                color: "white",
                            }}
                            color={COLORS.primary}
                            as={FiAirplay}
                        />
                        <Text pt={6} color={COLORS.blue} fontSize='xl' textAlign='center'>No se encontraron resultados</Text>
                    </Center>
                    :
                    <SectionMarketPlace list={solutions} />
                }

            </Box>
        </Center>
    )
}

export default MarketplaceSection