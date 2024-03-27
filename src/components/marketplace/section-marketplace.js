import { Box, Text, Grid, GridItem } from '@chakra-ui/react'
import React from 'react'
import CardService from './CardService'
import CardSoftware from './CardSoftware'

const SectionMarketPlace = ({ list }) => {


    return (
        <Box mb={10} w='full'>
            <Grid w='full' templateColumns={{ md: 'repeat(2, 1fr)', lg: 'repeat(4, 1fr)' }} gap={3}>
                {list?.map(item => <GridItem colSpan={1} key={item._id}>
                    {item.lineType === 'solutions' ? <CardSoftware {...item} /> : <CardService item={item} />}
                </GridItem>)}
            </Grid>
        </Box>
    )
}

export default SectionMarketPlace