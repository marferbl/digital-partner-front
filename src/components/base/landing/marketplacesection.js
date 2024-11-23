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
import Pagination from '../../base/Paginate'


const MarketplaceSection = ({ term, filters, isCollapsed, isFavorites, setNumberOfResults }) => {
    const [solutions, setSolutions] = useState([])
    const [loading, setLoading] = useState(false)
    const [page, setPage] = useState(1)
    const [meta, setMeta] = useState({})

    useEffect(() => {
        getSolutions()
    }, [page])


    useEffect(() => {
        if (!!term || filters) {
            setPage(1)
            getSolutions()
        }
    }, [term, filters]);

    useEffect(() => {
        if (isFavorites) {
            getSolutions()
        }
    }, [isFavorites]);

    const scrollTop = () => {
        window.scrollTo({ top: 0 });
    };

    const getSolutions = () => {
        setLoading(true)
        const featuresToArray = typeof filters.features === 'string' ? filters.features.split(',') : filters.features;
        if (term) {
            getOptimizeSearch(term).then((res) => {
                setLoading(false)
                setSolutions(res.data.results);
                setNumberOfResults(res.data.results?.length)
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
                    setNumberOfResults(res.data.results?.length)

                }
                ).catch((error) => {
                    setLoading(false)
                    console.log(error);
                }
                );
            }
            else {
                getAllSearch({ term: term, ...completedFilters, page }).then((res) => {
                    setLoading(false)
                    setSolutions(res.data.results);
                    setMeta(res.data.meta)
                    setNumberOfResults(res.data.meta.totalResults)
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
            <Box w='full' px={{ base: 0, md: 2 }} h='full'>
                {loading ? <Center w={'100%'}> <Spinner
                    thickness='4px'
                    speed='0.65s'
                    emptyColor='gray.200'
                    color='blue.500'
                    size='xl'
                /></Center> : solutions && solutions.length === 0 ?
                    <Center flexDir={'column'} w={'100%'} h='full' mt={20}>
                        <Icon
                            fontSize={60}
                            _groupHover={{
                                color: "white",
                            }}
                            color={COLORS.primary}
                            as={FiAirplay}
                        />
                        <Text pt={6} color={COLORS.blue} fontSize='xl' textAlign='center'>Parece que no tenemos nada interesante para ti...</Text>
                    </Center>
                    :
                    <SectionMarketPlace list={solutions} isFavorites={isFavorites} />
                }
                {meta?.totalPages > 1 && !term && !isFavorites && <Pagination currentPage={page} totalPages={meta.totalPages} setCurrentPage={(value) => {
                    setPage(value)
                    scrollTop()
                }} />}

            </Box>
        </Center>
    )
}

export default MarketplaceSection