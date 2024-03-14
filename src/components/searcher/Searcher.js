import React, { useParams } from 'react-router-dom'
import { Box, Heading, Center, Text } from '@chakra-ui/react'
import { capitalizeFirstLetter } from '../../utils/methods'
import FiltersSection from './Filters'
import MarketplaceSection from '../base/landing/marketplacesection'


const Searcher = ({ filters }) => {
    const { term } = useParams()

    const getLabelTerm = () => {
        if (!term) return 'digitales'
        return capitalizeFirstLetter(decodeURIComponent(term?.replace(/\+/g, ' ')))

    }
    return (
        <Box p={5} >

            <Heading textAlign={'center'} fontFamily={'Montserrat'} fontSize={30}>
                {term ? 'Mejores soluciones digitales sobre' : 'Viendo todas las soluciones'}
            </Heading>
            <Center>
                <Text fontSize={30} fontWeight={'bold'} color={'#00A3FF'}>{getLabelTerm()}</Text>
            </Center>
            {/* <FiltersSection /> */}
            <Center pt={20} flexDir={'column'}>
                <MarketplaceSection term={term} filters={filters} />
            </Center>
        </Box >
    )
}

export default Searcher