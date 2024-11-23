import React, { useState, useContext, useEffect } from "react";
import { Box, Grid, GridItem, Text, Avatar, Button, Flex, Image } from "@chakra-ui/react";
import { capitalizeFirstLetter, languageLabelFromValue } from '../../../utils/methods'
import CountryFlag from '../../base/country-flag'
import { Link, useParams } from 'react-router-dom'
import { COLORS } from "../../../colors/colors"
import { UserContext } from "../../../context/userContext";
import GradientButton from "../../base/GradientButton";
import { getServicesByCorporate } from "../../../services/service";
import ServicesTable from "./services-table";
import { Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';



const ServiceDetails = ({ service }) => {
    const { isLoggedIn } = useContext(UserContext)
    const [services, setServices] = useState([])
    const { t } = useTranslation("global");

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        service && getServices()
    }, [service])

    const getServices = () => {
        getServicesByCorporate(service.corporate?._id).then((res) => {
            const filteredServices = res.data?.services?.filter((s) => s._id !== service._id)
            setServices(filteredServices)
        }
        ).catch((error) => {
            console.log(error)
        })
    }

    const isDigitalando = () => {
        return service?.corporate?._id === '66e3fb74ded119079e6ec82e'
    }




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
        <Box mt={1} p={3} rounded={"xl"} bgColor={"white"} w={"100%"}>
            {service && <Grid templateColumns="repeat(8, 1fr)" gap={6} pb={1}>
                <GridItem colSpan={8}>
                    <Box textAlign={'left'} mt={1} rounded={"xl"} bgColor={"white"} w={"100%"} px={10}>
                        <Flex align={'center'} justify='space-between' gap={4} pb={3}>
                            <Flex align={'center'} gap={4}>
                                {service?.logo && <Image src={service.logo} alt={service?.title} height={28} width={28} objectFit={'contain'} rounded='100%' />}
                                {service?.title ? <Text fontSize={22} mt={3} fontWeight='bold'>{capitalizeFirstLetter(service.title)}</Text> : ''}
                            </Flex>
                            <Box pt={6}>
                                {isLoggedIn ? <a href={`mailto:${service?.corporate?.superadmin?.email}`}>
                                    <GradientButton type='green' label='Contactar' size={'md'} />
                                </a> :
                                    <Box>
                                        <GradientButton type='green' label='Contactar' disabled size='sm' />
                                        <Text mt={1} fontSize={12}>Inicia sesión para contactar</Text>
                                    </Box>
                                }
                            </Box>
                        </Flex>

                        <Flex align={'center'} justify='space-between' gap={4}>
                            {!isDigitalando() && <Box>
                                <Text fontSize={14} mt={3} fontWeight='bold' textDecor={'underline'}>Corporate:</Text>
                                <Text fontSize={16}>{service?.corporate?.name} </Text>
                            </Box>}
                        </Flex>
                        {service?.serviceType && <Text fontSize={14} mt={3} fontWeight='bold' textDecor={'underline'}>Tipo de servicio:</Text>}
                        <Text>{capitalizeFirstLetter(t(service.serviceType))} {service.serviceType === 'partner' && <Text as={'span'}> {'('} {arrayToSentence(service.partnerType)} {')'} </Text>}</Text>

                        <Text fontSize={14} mt={3} fontWeight='bold' textDecor={'underline'}>Descripción:</Text>
                        <Text>{service.description}</Text>

                        <Text fontSize={14} mt={3} fontWeight='bold' textDecor={'underline'}>Idiomas disponibles para el servicio:</Text>
                        <Text>{service?.languages?.map(e => <Text>{languageLabelFromValue(e)}</Text>)}</Text>
                        {service?.countries?.length ? <Text fontSize={14} mt={3} fontWeight='bold' textDecor={'underline'}>Países disponibles para el servicio:</Text> : ''}
                        <Text fontSize={16}>{service?.countries?.map(e => <CountryFlag country={e} />)}</Text>
                        <Text fontSize={14} mt={3} fontWeight='bold' textDecor={'underline'}>{service.serviceType === 'partner' ? 'Solución:' : ''} </Text>
                        {service.serviceType === 'partner' ? <Box mt={1} p={1} bgColor={"white"} w={"100%"} rounded='xl' mb={3}>
                            <Text fontWeight={'bold'} fontSize={18}>{service.otherSolution || solution?.name}</Text>
                            <Text fontSize={16}>{solution?.website}</Text>
                            {service.otherSolution ? <Text fontSize={14} mt={2}>Esta solución no está dada de alta</Text> :
                                <Link to={isLoggedIn ? `/private/solution/${solution?._id}` : `/solution/${solution?._id}`}><Text fontWeight={'bold'} textDecor='underline' color={'blue.600'} fontSize={14}>{'Ir a detalles'}</Text></Link>
                            }
                        </Box> : ''}
                    </Box>
                </GridItem>

            </Grid>}
            {!isDigitalando() && <Box px={6} mt={4}>
                <Accordion allowToggle>
                    <AccordionItem>
                        <h2>
                            <AccordionButton>
                                <Box flex="1" textAlign="left">
                                    <Text fontSize={14} fontWeight="bold">Ver otros servicios de esta corporate</Text>
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                            {services?.length ? <ServicesTable services={services} smallView={true} /> : 'No hay más servicios de esta corporate'}
                        </AccordionPanel>
                    </AccordionItem>
                </Accordion>
            </Box>}

        </Box >
    )
}

export default ServiceDetails