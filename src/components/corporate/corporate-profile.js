import { Box, Image, Flex, Text, Avatar } from '@chakra-ui/react'
import React, { useContext } from 'react'
import { Grid, GridItem } from '@chakra-ui/react'
import GradientButton from '../base/GradientButton'
import CardTemplate from '../base/card-template'
import { Link } from 'react-router-dom'
import { EmptyState } from '../base/empty-state'
import { CardSolutionsCorporate } from './card-solutions-corporate'
import { CardServicesCorporate } from './card-services-corporate'
import { DARK_COLORS } from '../../colors/colors'


export const CorporateProfile = ({ corporate }) => {

    const items = [
        {
            label: 'Soluciones',
            number: 10,
            color: ''
        },
        {
            label: 'Servicios',
            number: 5,
            color: ''
        },
        {
            label: 'Eventos',
            number: 10,
            color: ''
        }
    ]

    return (
        <Box>
            <Grid templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(4, 1fr)' }} gap={6} justifyItems={'center'}>
                <GridItem colSpan={{ base: 1, md: 1 }} borderWidth={1} borderColor='gray.700' rounded={'md'} w='full' p={3}>
                    <Flex pb={4} flexDir='row' align={'center'} pt={3} gap={2}>
                        <Avatar name={corporate?.name} rounded={'md'} />
                        <div>
                            <Text fontSize={16} color='white'> {corporate?.name}</Text>
                            <Text fontSize={14} color={DARK_COLORS.neutral}> {corporate?.cif}</Text>
                        </div>
                    </Flex>
                    <div className="flex flex-wrap justify-between gap-1 p-1 bg-black shadow-md w-full">
                        {items.map((item, index) => (
                            <div key={index} className="flex flex-col items-center text-neutral justify-center w-full md:w-20 p-2 rounded-lg shadow-lg bg-darkgray">
                                <h2 className="text-sm font-semibold">{item.label}</h2>
                                <p className="text-xl font-semibold mt-1 text-white">{item.number}</p>
                            </div>
                        ))}
                    </div>
                </GridItem>
                <GridItem colSpan={{ base: 1, md: 3 }} w='full'>


                </GridItem>
            </Grid>

        </Box >
    )
}
