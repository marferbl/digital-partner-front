import { Box, Text, Grid, GridItem } from '@chakra-ui/react'
import React from 'react'
import CardService from './CardService'
import CardSoftware from './CardSoftware'

const SectionMarketPlace = ({ list, isFavorites }) => {


    return (
        <Box mb={10} w='full'>
            <Grid w='full' templateColumns={{ md: 'repeat(2, 1fr)', lg: 'repeat(4, 1fr)' }} gap={3}>
                {list?.map(item => <GridItem colSpan={1} key={item._id}>
                    {item.lineType === 'solutions' ? <CardSoftware {...item} isFavorites={isFavorites} /> : <CardService item={item} isFavorites={isFavorites} />}
                </GridItem>)}
            </Grid>
        </Box>
    )
}

export default SectionMarketPlace