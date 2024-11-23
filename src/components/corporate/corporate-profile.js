import { Box, Image, Flex, Text, Avatar } from '@chakra-ui/react'
import React, { useState, useEffect } from 'react'
import { Grid, GridItem } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { DARK_COLORS } from '../../colors/colors'
import { dateToString } from '../../utils/dates'
import { getEntitiesByCorporate } from '../../services/corporate'


export const CorporateProfile = ({ corporate }) => {

    const [entities, setEntities] = useState([])
    const [loading, setLoading] = useState(false)

    const items = [
        {
            label: 'Soluciones',
            number: 0,
            color: '',
            key: 'solutions'
        },
        {
            label: 'Servicios',
            number: 0,
            color: '',
            key: 'services'
        },
        {
            label: 'Eventos',
            number: 0,
            color: '',
            key: 'events'
        }
    ]


    useEffect(() => {
        setLoading(true)
        getEntitiesByCorporate().then((res) => {
            setEntities(res.data.entities)
            setLoading(false)

        }).catch((error) => {
            console.log(error)
            setLoading(false)

        })
    }, [])




    return (
        <Box>
            <Grid templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(5, 1fr)' }} gap={6} justifyItems={'center'}>
                <GridItem colSpan={{ base: 1, md: 2 }} w='full' p={3}>
                    <Box borderWidth={1} borderColor='gray.700' rounded={'md'} p={6} w='full'>
                        <Flex pb={4} flexDir='row' align={'center'} pt={3} gap={2}>
                            <Avatar name={corporate?.name} rounded={'md'} />
                            <div>
                                <Text fontSize={16} color='white'> {corporate?.name}</Text>
                                <Text fontSize={14} color={DARK_COLORS.neutral}> {corporate?.cif}</Text>
                            </div>
                        </Flex>


                        <div className="flex gap-1 p-1 bg-black shadow-md w-full my-4">
                            {items.map((item, index) => (
                                <div key={index} className="flex flex-col items-center text-neutral justify-center w-full md:w-1/3 p-2 py-4 rounded-lg shadow-lg bg-darkgray">
                                    <h2 className="text-sm font-semibold">{item.label}</h2>
                                    <p className="text-2xl font-semibold mt-1 text-white">{loading ? '-' : entities[item.key]}</p>
                                </div>
                            ))}
                        </div>
                    </Box>
                    <Box borderWidth={1} borderColor='gray.700' rounded={'md'} p={6} w='full' mt={6}>
                        <Flex pb={4} flexDir='row' align={'center'} pt={3} gap={2}>
                            <div className='w-full pr-10'>
                                <Text fontSize={16} color='white' mb={4}> Información</Text>
                                <div className='flex justify-between items-center w-full font-light'>
                                    <Text fontSize={14} color={DARK_COLORS.neutral}> Plan actual</Text>
                                    <Text fontSize={14} color={DARK_COLORS.neutral}> Seller </Text>
                                </div>
                                <div className='flex justify-between items-center w-full my-4 font-light'>
                                    <Text fontSize={14} color={DARK_COLORS.neutral}> Cuenta creada</Text>
                                    <Text fontSize={14} color={DARK_COLORS.neutral}> {dateToString(new Date(corporate?.createdAt || corporate?.superadmin?.createdAt))}</Text>
                                </div>
                                <div className='flex justify-between items-center w-full font-light'>
                                    <Text fontSize={14} color={DARK_COLORS.neutral}> Correo</Text>
                                    <Text fontSize={14} color={DARK_COLORS.neutral}> {corporate?.superadmin?.email}</Text>
                                </div>
                            </div>
                        </Flex>



                    </Box>
                </GridItem>
                <GridItem colSpan={{ base: 1, md: 3 }} w='full' p={4} position={'relative'}>
                    <img src='/charts/apariciones-buscador.png' alt='Apariciones en buscador' className='w-full h-full blur-sm opacity-60' />
                    <div className='absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center gap-4'>
                        <Text fontSize={24} color='black'> Proximamente...</Text>
                    </div>
                </GridItem>
            </Grid>

        </Box >
    )
}
