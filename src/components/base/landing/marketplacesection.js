import { Center, Box, Text, Icon, Spinner } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { COLORS } from '../../../colors/colors'
import { getAllSolutions } from '../../../services/solution'
import SectionMarketPlace from '../../marketplace/section-marketplace'
import { FiAirplay } from 'react-icons/fi'
import FiltersSection from '../../searcher/Filters'
import { getAllSearch } from '../../../services/search'

const MarketplaceSection = ({ term, filters }) => {
    const [solutions, setSolutions] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        if (!!term || filters) getSolutions()
    }, [term, filters]);

    const getSolutions = () => {
        setLoading(true)
        const featuresToArray = typeof filters.features === 'string' ? filters.features.split(',') : filters.features;
        const completedFilters = filters;
        completedFilters.features = featuresToArray;
        getAllSearch({ term: term, ...completedFilters }).then((res) => {
            setLoading(false)
            setSolutions(res.data.results);

        }
        ).catch((error) => {
            setLoading(false)
            console.log(error);
        }
        );
    };


    return (
        <Center w='full' flexDir={'column'} px={{ base: 2, lg: 5 }}>
            <Box w='full' px={{ base: 8, md: 2 }}>
                {loading ? <Center> <Spinner
                    thickness='4px'
                    speed='0.65s'
                    emptyColor='gray.200'
                    color='blue.500'
                    size='xl'
                /></Center> : solutions && solutions.length === 0 ?
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