import { Box, Text, Grid, GridItem } from '@chakra-ui/react'
import React from 'react'
import CardService from './CardService'
import CardSoftware from './CardSoftware'
import CardEvent from './CardEvent'
import CardFreelance from './CardFreelance'

const SectionMarketPlace = ({ list, isFavorites }) => {



    return (
        <Box mb={10} w='full'>
            <Grid w='full' templateColumns={{ base: '(repeat(1, 1fr))', md: 'repeat(3, 1fr)', lg: 'repeat(4, 1fr)' }} gap={3}>
                {list?.map(item => <GridItem colSpan={1} key={item._id}>
                    {item.lineType === 'solutions' ? <CardSoftware {...item} isFavorites={isFavorites} /> : item.lineType === 'services' ? <CardService item={item} isFavorites={isFavorites} /> : item.lineType === 'events' ? <CardEvent item={item} /> : <CardFreelance item={item} isFavorites={isFavorites} />}
                </GridItem>)}
            </Grid>
        </Box>
    )
}

export default SectionMarketPlace