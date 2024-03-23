import React, { useParams } from 'react-router-dom'
import { Box, Heading, Center, Text } from '@chakra-ui/react'
import { capitalizeFirstLetter } from '../../utils/methods'
import FiltersSection from './Filters'
import MarketplaceSection from '../base/landing/marketplacesection'
import { useState } from 'react'


const Searcher = ({ filters }) => {
    const { term } = useParams()
    const [allFilters, setAllFilters] = useState(filters)

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
            <FiltersSection filters={filters} onChangeFilters={(filters) => updateFilters(filters)} />
            <Center pt={20} flexDir={'column'}>
                <MarketplaceSection term={term} filters={allFilters} />
            </Center>
        </Box >
    )
}

export default Searcher