import { Center, Box, Text, Icon, Spinner } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { COLORS } from '../../../colors/colors'
import { getAllSolutions } from '../../../services/solution'
import SectionMarketPlace from '../../marketplace/section-marketplace'
import { FiAirplay } from 'react-icons/fi'
import FiltersSection from '../../searcher/Filters'
import { getAllSearch, getOptimizeSearch } from '../../../services/search'
import { getFavorites } from '../../../services/favorite'

const MarketplaceSection = ({ term, filters, isCollapsed, isFavorites }) => {
    const [solutions, setSolutions] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        if (!!term || filters) getSolutions()
    }, [term, filters]);

    useEffect(() => {
        if (isFavorites) {
            getSolutions()
        }
    }, [isFavorites]);



    const getSolutions = () => {
        setLoading(true)
        const featuresToArray = typeof filters.features === 'string' ? filters.features.split(',') : filters.features;
        if (term) {
            getOptimizeSearch(term).then((res) => {
                setLoading(false)
                setSolutions(res.data.results);
            }
            ).catch((error) => {
                setLoading(false)
                console.log(error);
            }
            );
        }
        else {
            const completedFilters = filters;
            completedFilters.features = featuresToArray;
            if (isFavorites) {
                getFavorites({ term: term, ...completedFilters }).then((res) => {
                    setLoading(false)
                    setSolutions(res.data.results);
                }
                ).catch((error) => {
                    setLoading(false)
                    console.log(error);
                }
                );
            }
            else {
                getAllSearch({ term: term, ...completedFilters }).then((res) => {
                    setLoading(false)
                    setSolutions(res.data.results);
                }).catch((error) => {
                    setLoading(false)
                    console.log(error);
                }
                );
            }

        }

    };


    return (
        <Center w='full' flexDir={'column'} px={{ base: 2, lg: 5 }}>
            <Box w='full' px={{ base: 8, md: 2 }} h='full'>
                {loading ? <Center w={isCollapsed ? '100%' : '80%'}> <Spinner
                    thickness='4px'
                    speed='0.65s'
                    emptyColor='gray.200'
                    color='blue.500'
                    size='xl'
                /></Center> : solutions && solutions.length === 0 ?
                    <Center flexDir={'column'} w={isCollapsed ? '100%' : '80%'} h='full' mt={10}>
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
                    <SectionMarketPlace list={solutions} isFavorites={isFavorites} />
                }

            </Box>
        </Center>
    )
}

export default MarketplaceSection