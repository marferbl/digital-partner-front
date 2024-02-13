import { Box, Image, Flex, Text } from '@chakra-ui/react'
import React, { useContext } from 'react'
import { EditIcon } from "@chakra-ui/icons";
import { Grid, GridItem } from '@chakra-ui/react'
import { CardPanel } from '../base/card-panel'
import { TeamCard } from './team-card'


export const CorporateProfile = ({ corporate }) => {

    return (
        <Box>
            <Grid templateColumns={{ base: 'repeat(2, 1fr)', lg: 'repeat(5, 1fr)' }} gap={6}>
                <GridItem colSpan={2} w='100%'>
                    <CardPanel title={'Detalles'}>
                        <Flex w={'full'} justify={'space-between'}>
                            <Image rounded={"xl"} h={100} src={corporate?.logo} />
                        </Flex>
                        <Flex gap={3} pt={5} flexDir={'column'}>
                            <Flex gap={2}>
                                <Text fontSize={18} fontWeight={'bold'}>Nombre: </Text>
                                <Text fontSize={18}>{corporate?.name}</Text>
                            </Flex>
                            <Flex gap={2}>
                                <Text fontSize={18} fontWeight={'bold'}>CIF: </Text>
                                <Text fontSize={18}>{corporate?.cif}</Text>
                            </Flex>
                            <Flex gap={2}>
                                <Text fontSize={18} fontWeight={'bold'}>País: </Text>
                                <Text fontSize={18}>{corporate?.country}</Text>
                            </Flex>
                            <Flex gap={2}>
                                <Text fontSize={18} fontWeight={'bold'}>Web: </Text>
                                <Text fontSize={18}>{corporate?.web}</Text>
                            </Flex>
                            <Flex w={'fit-content'} px={2} py={1} rounded='lg' cursor={'pointer'} _hover={{ shadow: 'md' }} h={'fit-content'} gap={2} align={'center'} >
                                <Text>
                                    Editar campos
                                </Text>
                                <EditIcon />
                            </Flex>
                        </Flex>
                    </CardPanel>
                </GridItem>
                <GridItem w='100%' colSpan={2} h={'100%'} rounded={'lg'}>
                    <TeamCard />
                </GridItem>
                <GridItem colSpan={{ base: 2, lg: 1 }} w='100%' rounded={'lg'} />
            </Grid>

        </Box >
    )
}
