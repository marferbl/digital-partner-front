import React, { useParams } from 'react-router-dom'
import { Box, Heading, Center, Text, GridItem, Grid, Icon, Flex } from '@chakra-ui/react'
import { capitalizeFirstLetter } from '../../utils/methods'
import FiltersSection from './Filters'
import MarketplaceSection from '../base/landing/marketplacesection'
import { useState, useEffect } from 'react'
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { COLORS } from '../../colors/colors';


const Searcher = ({ filters, isFavorites }) => {
    const { term } = useParams()
    const [allFilters, setAllFilters] = useState(filters)
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [termLabel, setTermLabel] = useState(term)

    useEffect(() => {
        setTermLabel(term)
    }, [term])

    useEffect(() => {
        setIsCollapsed(isFavorites)
    }, [isFavorites])


    const getLabelTerm = () => {
        if (!termLabel) return ''
        return capitalizeFirstLetter(decodeURIComponent(termLabel?.replace(/\+/g, ' ')))
    }

    const updateFilters = (filters) => {
        setAllFilters(filters)
    }


    return (
        <Box p={5} >
            <Heading textAlign={'center'} fontFamily={'Montserrat'} fontSize={30}>
                {isFavorites ? 'Tus Favoritos' : termLabel ? 'Mejores resultados sobre' : 'Resultados:'}
            </Heading>
            <Center>
                <Text fontSize={30} fontWeight={'bold'} color={'#00A3FF'}>{getLabelTerm()}</Text>
            </Center>
            <Grid templateColumns="repeat(6, 1fr)" w={'full'}>
                <GridItem colSpan={1}>
                    <Flex cursor={'pointer'} alignItems="center" onClick={() => setIsCollapsed(!isCollapsed)}>
                        <Text fontSize={14}> {isCollapsed ? 'Mostrar filtros' : 'Ocultar filtros'}</Text>
                        <Icon
                            as={!isCollapsed ? FiChevronLeft : FiChevronRight}
                            cursor="pointer"
                            fontSize="20px"
                            color={COLORS.secondary}
                        />
                    </Flex>
                    <div style={{ display: isCollapsed ? 'none' : 'block' }}>
                        <FiltersSection filters={filters} setTermLabel={setTermLabel} onChangeFilters={(filters) => updateFilters(filters)} />
                    </div>
                </GridItem>
                <GridItem colSpan={isCollapsed ? 6 : 5}>
                    <Center pt={5} flexDir={'column'} w='100%'>
                        <MarketplaceSection term={termLabel} filters={allFilters} isCollapsed={isCollapsed} isFavorites={isFavorites} />
                    </Center>
                </GridItem>
            </Grid>


        </Box >
    )
}

export default Searcher