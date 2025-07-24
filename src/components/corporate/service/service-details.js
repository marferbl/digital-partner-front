import React, { useState, useContext, useEffect } from "react";
import { Box, Grid, GridItem, Text, Avatar, Button, Flex, Image, VStack, HStack, Badge, Icon } from "@chakra-ui/react";
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
import { PlansComponent } from "../solutions/solution-detail/plans-component";
import { ReferencesComponent } from "../solutions/solution-detail/references-component";
import CustomButton from "../../base/CustomButton";
import { FaInfoCircle, FaCreditCard, FaStar, FaBuilding, FaLanguage, FaGlobe, FaLink } from 'react-icons/fa';

const ServiceInfoComponent = ({ service }) => {
    const { t } = useTranslation("global");
    const { isLoggedIn } = useContext(UserContext);
    const [services, setServices] = useState([]);

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
        <Box
            mt={1}
            p={6}
            rounded={"xl"}
            bgColor={"black"}
            w={"100%"}
            transition="all 0.3s ease"
            _hover={{ transform: 'translateY(-2px)', boxShadow: 'lg' }}
        >
            {service && (
                <VStack spacing={6} align="stretch">
                    {!isDigitalando() && (
                        <Box>
                            <HStack mb={2}>
                                <Icon as={FaBuilding} color="yellow.400" />
                                <Text fontSize="lg" fontWeight='bold' color="white">Corporate</Text>
                            </HStack>
                            <Text fontSize="md" color="gray.300">{service?.corporate?.name}</Text>
                        </Box>
                    )}

                    <Box>
                        <HStack mb={2}>
                            <Icon as={FaInfoCircle} color="yellow.400" />
                            <Text fontSize="lg" fontWeight='bold' color="white">Tipo de servicio</Text>
                        </HStack>
                        <Text color="gray.300">
                            {capitalizeFirstLetter(t(service.serviceType))}
                            {service.serviceType === 'partner' && (
                                <Text as={'span'}> {'('} {arrayToSentence(service.partnerType)} {')'} </Text>
                            )}
                        </Text>
                    </Box>

                    <Box>
                        <HStack mb={2}>
                            <Icon as={FaInfoCircle} color="yellow.400" />
                            <Text fontSize="lg" fontWeight='bold' color="white">Descripción</Text>
                        </HStack>
                        <Text color="gray.300">{service.description}</Text>
                    </Box>

                    <Box>
                        <HStack mb={2}>
                            <Icon as={FaLanguage} color="yellow.400" />
                            <Text fontSize="lg" fontWeight='bold' color="white">Idiomas disponibles</Text>
                        </HStack>
                        <VStack align="start" spacing={1}>
                            {service?.languages?.map((e, index) => (
                                <Text key={index} color="gray.300">{languageLabelFromValue(e)}</Text>
                            ))}
                        </VStack>
                    </Box>

                    {service?.countries?.length > 0 && (
                        <Box>
                            <HStack mb={2}>
                                <Icon as={FaGlobe} color="yellow.400" />
                                <Text fontSize="lg" fontWeight='bold' color="white">Países disponibles</Text>
                            </HStack>
                            <HStack spacing={2}>
                                {service?.countries?.map((e, index) => (
                                    <CountryFlag key={index} country={e} />
                                ))}
                            </HStack>
                        </Box>
                    )}

                    {service.serviceType === 'partner' && (
                        <Box
                            p={4}
                            bgColor="gray.800"
                            rounded="xl"
                            border="1px solid"
                            borderColor="yellow.400"
                        >
                            <HStack mb={2}>
                                <Icon as={FaLink} color="yellow.400" />
                                <Text fontSize="lg" fontWeight='bold' color="white">Solución</Text>
                            </HStack>
                            <VStack align="start" spacing={2}>
                                <Text fontWeight={'bold'} fontSize={18} color="white">
                                    {service.otherSolution || solution?.name}
                                </Text>
                                <Text fontSize={16} color="gray.300">{solution?.website}</Text>
                                {service.otherSolution ? (
                                    <Text fontSize={14} color="gray.400">Esta solución no está dada de alta</Text>
                                ) : (
                                    <Link to={isLoggedIn ? `/private/solution/${solution?._id}` : `/solution/${solution?._id}`}>
                                        <Text
                                            fontWeight={'bold'}
                                            color="yellow.400"
                                            fontSize={14}
                                            _hover={{ color: 'yellow.300' }}
                                        >
                                            Ir a detalles
                                        </Text>
                                    </Link>
                                )}
                            </VStack>
                        </Box>
                    )}
                </VStack>
            )}

            {!isDigitalando() && (
                <Box mt={6}>
                    <Accordion allowToggle>
                        <AccordionItem borderColor="gray.700">
                            <AccordionButton>
                                <Box flex="1" textAlign="left">
                                    <Text fontSize={14} fontWeight="bold" color="white">
                                        Ver otros servicios de esta corporate
                                    </Text>
                                </Box>
                                <AccordionIcon color="yellow.400" />
                            </AccordionButton>
                            <AccordionPanel pb={4}>
                                {services?.length ? (
                                    <ServicesTable services={services} smallView={true} />
                                ) : (
                                    <Text color="gray.400">No hay más servicios de esta corporate</Text>
                                )}
                            </AccordionPanel>
                        </AccordionItem>
                    </Accordion>
                </Box>
            )}
        </Box>
    );
};

const ServiceDetails = ({ service }) => {
    const [selectedComponent, setSelectedComponent] = useState(null);
    const [label, setLabel] = useState(null);
    const { isLoggedIn } = useContext(UserContext);

    useEffect(() => {
        if (!selectedComponent && service) {
            renderComponent('Info');
        }
    }, [service]);

    const LINKS = [
        { label: 'Info', component: <ServiceInfoComponent service={service} />, icon: FaInfoCircle },
        { label: 'Adquirir', component: <PlansComponent entity={service} />, icon: FaCreditCard },
        { label: 'Referencias', component: <ReferencesComponent />, icon: FaStar },
    ];

    const renderComponent = (label) => {
        const selectedLink = LINKS.find(link => link.label === label);
        setLabel(selectedLink.label);
        setSelectedComponent(selectedLink ? selectedLink.component : null);
    };

    return (
        <Box bgColor={'black'} color={'white'}>
            <Box p={5} bgColor={"black"} w={"100%"} minH={'100vh'} px={{ base: 6, md: 20, lg: 32 }}>
                <Flex
                    w='full'
                    justify={'space-evenly'}
                    mt={{ base: 4, lg: 4 }}
                    pb={5}
                    px={{ base: 0, md: 10, lg: 20 }}
                    gap={4}
                >
                    {LINKS.map(link => (
                        <Flex
                            key={link.label}
                            align="center"
                            justify="center"
                            borderWidth={label === link.label ? 1 : 0}
                            w={180}
                            py={2}
                            px={3}
                            rounded='xl'
                            fontSize={{ base: 6, md: 13 }}
                            bgColor={label === link.label ? 'white' : 'transparent'}
                            onClick={() => renderComponent(link.label)}
                            color={label === link.label ? 'black' : 'white'}
                            cursor='pointer'
                            transition="all 0.3s ease"
                            _hover={{
                                bgColor: label === link.label ? 'white' : 'gray.800',
                                transform: 'translateY(-2px)'
                            }}
                        >
                            <Icon as={link.icon} mr={2} color={label === link.label ? 'black' : 'yellow.400'} />
                            {link.label}
                        </Flex>
                    ))}
                </Flex>

                {isLoggedIn ? (
                    <Box mt={4} px={{ base: 2, md: 14 }} flex={1}>
                        {selectedComponent}
                    </Box>
                ) : (
                    <Flex w='full' justify={'center'} align={'center'} flexDir='column' mt={4}>
                        <Text mt={6} fontSize='xl' fontWeight='bold' color={'gray.400'}>
                            Debes iniciar sesión para ver más detalles
                        </Text>
                        <Link to={'/start'}>
                            <Text
                                mt={2}
                                fontSize='sm'
                                fontWeight='bold'
                                color={'yellow.400'}
                                _hover={{ color: 'yellow.300' }}
                            >
                                Iniciar sesión
                            </Text>
                        </Link>
                    </Flex>
                )}
            </Box>
        </Box>
    );
};

export default ServiceDetails;