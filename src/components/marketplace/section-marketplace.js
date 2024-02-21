import { Box, Text, Grid, GridItem } from '@chakra-ui/react'
import React from 'react'
import CardSoftware from './CardSoftware'

const SectionMarketPlace = ({ list }) => {


    return (
        <Box mb={10}>
            <Grid templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(3, 1fr)' }} gap={6}>
                {list?.map(item => <GridItem><CardSoftware {...item} /></GridItem>)}
            </Grid>
        </Box>
    )
}

export default SectionMarketPlace