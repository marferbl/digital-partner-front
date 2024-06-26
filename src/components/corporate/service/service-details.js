import React, { useState, useContext } from "react";
import { Box, Grid, GridItem, Text, Avatar, Button, Tooltip } from "@chakra-ui/react";
import { capitalizeFirstLetter, languageLabelFromValue } from '../../../utils/methods'
import CountryFlag from '../../base/country-flag'
import { Link } from 'react-router-dom'
import { COLORS } from "../../../colors/colors"
import { UserContext } from "../../../context/userContext";
import GradientButton from "../../base/GradientButton";


const ServiceDetails = ({ service }) => {
    const { isLoggedIn } = useContext(UserContext)




    const PARTNER_TYPE_KEYS = {
        'selling': 'Venta',
        'implant': 'Implantador',
        'training': 'Formación'
    }
    const solution = service?.solutionId

    const arrayToSentence = (array) => {
        if (array.length === 1) {
            return PARTNER_TYPE_KEYS[array[0]]
        }
        if (array.length === 2) {
            return `${PARTNER_TYPE_KEYS[array[0]]} y ${PARTNER_TYPE_KEYS[array[1]]}`
        }
        if (array.length > 2) {
            return `${PARTNER_TYPE_KEYS[array[0]]}, ${PARTNER_TYPE_KEYS[array[1]]} y ${PARTNER_TYPE_KEYS[array[1]]} más`
        }
    }

    return (
        <Box mt={6} p={5} rounded={"xl"} bgColor={"white"} w={"100%"}>
            {service && <Grid templateColumns="repeat(8, 1fr)" gap={6} pb={20}>
                <GridItem colSpan={5}>
                    <Box textAlign={'left'} mt={1} rounded={"xl"} bgColor={"white"} w={"100%"} px={10}>
                        <Text fontSize={14} mt={3} fontWeight='bold' textDecor={'underline'}>Corporate:</Text>
                        <Text fontSize={16}>{service?.corporate?.name} </Text>
                        <Text fontSize={14} mt={3} fontWeight='bold' textDecor={'underline'}>Tipo de servicio:</Text>
                        <Text>{capitalizeFirstLetter(service.serviceType)} {service.serviceType === 'partner' && <Text as={'span'}> {'('} {arrayToSentence(service.partnerType)} {')'} </Text>}</Text>
                        {service.serviceType === 'partner' &&
                            <Box>
                                <Text fontSize={14} mt={3} fontWeight='bold' textDecor={'underline'}>Descripción:</Text>
                                <Text>{service.description}</Text>
                            </Box>
                        }
                        <Text fontSize={14} mt={3} fontWeight='bold' textDecor={'underline'}>Idiomas disponibles para el servicio:</Text>
                        <Text>{service?.languages?.map(e => <Text>{languageLabelFromValue(e)}</Text>)}</Text>
                        <Text fontSize={14} mt={3} fontWeight='bold' textDecor={'underline'}>Países disponibles para el servicio:</Text>
                        <Text fontSize={16}>{service?.countries?.map(e => <CountryFlag country={e} />)}</Text>
                        <Box pt={6}>
                            {isLoggedIn ? <a href={`mailto:${service?.corporate?.superadmin?.email}`}>
                                <GradientButton type='green' label='Contactar' />
                            </a> :
                                <Box>
                                    <GradientButton type='green' label='Contactar' disabled />
                                    <Text mt={1} fontSize={12}>Inicia sesión para contactar</Text>
                                </Box>
                            }
                        </Box>
                    </Box>
                </GridItem>
                <GridItem colSpan={3} pr={7}>
                    <Text fontSize={14} mt={3} fontWeight='bold' mb={4} textAlign='center'>{service.serviceType === 'partner' ? 'Solución' : 'Descripción'} :</Text>
                    {service.serviceType === 'partner' ? <Box textAlign={'center'} mt={1} p={5} bgColor={"white"} w={"100%"} minH={300} px={10} rounded='xl' shadow={'xl'} mb={3}>
                        <Avatar size="2xl" name={service.solutionId?.otherSolution || service.solutionId?.name} src={service.solutionId?.logo} mb={5} />
                        <Text fontWeight={'bold'} fontSize={34}>{service.otherSolution || solution?.name}</Text>
                        <Text fontSize={16}>{solution?.website}</Text>
                        {service.otherSolution ? <Text fontSize={14} mt={4}>Esta solución no está dada de alta</Text> : <Button
                            mt={3}
                            variant="solid"
                            bg={COLORS.primary}
                            color="white"
                            _hover={{ bg: 'blue.700' }}
                        >
                            <Link to={isLoggedIn ? `/private/solution/${solution?._id}` : `/solution/${solution?._id}`}><Text fontWeight={'bold'} fontSize={14}>{'Ir a detalles'}</Text></Link>
                        </Button>}
                    </Box> : <Box textAlign={'center'} mt={1} p={5} bgColor={"white"} w={"100%"} minH={300} px={10} rounded='xl' shadow={'xl'} mb={3}>{service.description}</Box>}
                </GridItem>
            </Grid>}
        </Box>
    )
}

export default ServiceDetails