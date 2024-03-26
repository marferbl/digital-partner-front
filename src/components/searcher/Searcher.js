import React, { useParams } from 'react-router-dom'
import { Box, Heading, Center, Text, GridItem, Grid, Icon, Flex } from '@chakra-ui/react'
import { capitalizeFirstLetter } from '../../utils/methods'
import FiltersSection from './Filters'
import MarketplaceSection from '../base/landing/marketplacesection'
import { useState } from 'react'
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { COLORS } from '../../colors/colors';


const Searcher = ({ filters }) => {
    const { term } = useParams()
    const [allFilters, setAllFilters] = useState(filters)
    const [isCollapsed, setIsCollapsed] = useState(true); // State for collapse/expand


    const getLabelTerm = () => {
        if (!term) return ''
        return capitalizeFirstLetter(decodeURIComponent(term?.replace(/\+/g, ' ')))
    }

    const updateFilters = (filters) => {
        setAllFilters(filters)
    }

    return (
        <Box p={5} >
            <Heading textAlign={'center'} fontFamily={'Montserrat'} fontSize={30}>
                {term ? 'Mejores resultados sobre' : 'Resultados:'}
            </Heading>
            <Center>
                <Text fontSize={30} fontWeight={'bold'} color={'#00A3FF'}>{getLabelTerm()}</Text>
            </Center>
            <Grid templateColumns="repeat(6, 1fr)" w={'full'}>
                <GridItem colSpan={ 1}>
                    <Flex alignItems="center">
                        <Text fontSize={14}> {isCollapsed ? 'Mostrar filtros' : 'Ocultar filtros'}</Text>
                        <Icon
                            as={!isCollapsed ? FiChevronLeft : FiChevronRight}
                            onClick={() => setIsCollapsed(!isCollapsed)}
                            cursor="pointer"
                            fontSize="20px"
                            color={COLORS.secondary}
                        />
                    </Flex>
                    {!isCollapsed && <FiltersSection filters={filters} onChangeFilters={(filters) => updateFilters(filters)} />}
                </GridItem>
                <GridItem colSpan={isCollapsed ? 6 : 5}>
                    <Center pt={5} flexDir={'column'} w='100%'>
                        <MarketplaceSection term={term} filters={allFilters} />
                    </Center>
                </GridItem>
            </Grid>

        </Box >
    )
}

export default Searcher