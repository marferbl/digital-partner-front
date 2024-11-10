import { Box, Image, Flex, Text, Avatar } from '@chakra-ui/react'
import React, { useContext } from 'react'
import { Grid, GridItem } from '@chakra-ui/react'
import GradientButton from '../base/GradientButton'
import CardTemplate from '../base/card-template'
import { Link } from 'react-router-dom'
import { EmptyState } from '../base/empty-state'
import { CardSolutionsCorporate } from './card-solutions-corporate'
import { CardServicesCorporate } from './card-services-corporate'


export const CorporateProfile = ({ corporate }) => {

    return (
        <Box>
            <Grid templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(3, 1fr)' }} gap={6} justifyItems={'center'}>
                <GridItem colSpan={1} borderWidth={1} rounded={'md'} shadow={'xl'}>
                    <Flex pb={4} flexDir='column' align={'center'} pt={3}>

                        <Avatar name={corporate?.name} />
                        <Flex px={10} gap={1} flexDir='column' textAlign={'center'} >
                            <Text mt={2} fontSize={20} fontWeight='bold'> {corporate?.name}</Text>
                            <Text mt={2} >{corporate?.cif}</Text>
                            <Text mt={2} fontStyle='italic'>{corporate?.web}</Text>
                        </Flex>
                    </Flex>
                    <Box px={3}>
                        <Box rounded={'lg'} w={'full'} mb={3}>
                            {/* <Box py={3} px={4}>
                            <Text fontSize={14} mr={2}> No tienes corporate.</Text>
                            <Text fontSize={14} mt={2} mr={2}> No tienes perfil de freelance.</Text>
                        </Box> */}
                        </Box>
                    </Box>
                </GridItem>
                <GridItem colSpan={1} w='full'>
                    <CardTemplate>
                        <Text fontWeight="bold" mr={2} textAlign='center' borderBottomWidth={1}> Soluciones</Text>
                        <CardSolutionsCorporate />
                    </CardTemplate>
                    <Box h={2}></Box>

                </GridItem>
                <GridItem w='full' colSpan={1} px={5}>
                    <CardTemplate>
                        <Text fontWeight="bold" mr={2} textAlign='center' borderBottomWidth={1}> Servicio</Text>
                        <CardServicesCorporate />
                    </CardTemplate>
                </GridItem>
            </Grid>

        </Box >
    )
}
