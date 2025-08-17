import React, { useState, useContext, useEffect } from "react";
import { Box, Grid, GridItem, Text, Avatar, Button, Flex, Image, Checkbox, VStack, HStack, Badge, Icon } from "@chakra-ui/react";
import { capitalizeFirstLetter } from '../../../utils/methods'
import { UserContext } from "../../../context/userContext";
import { getEventsByCorporate } from "../../../services/event";
import { useTranslation } from 'react-i18next';
import MapSearcher from "../../base/map-searcher";
import { FaCalendarAlt, FaClock, FaUsers, FaEuroSign, FaMapMarkerAlt } from 'react-icons/fa';
import FeedGallery from "../../base/FeedGallery";

const EventDetails = ({ event }) => {
    const { isLoggedIn } = useContext(UserContext)
    const [events, setEvents] = useState([])
    const { t } = useTranslation("global");

    useEffect(() => {
        event && getEvents()
    }, [event])

    const getEvents = () => {
        getEventsByCorporate(event.corporate?._id).then((res) => {
            const filteredEvents = res.data?.events?.filter((e) => e._id !== event._id)
            setEvents(filteredEvents)
        }
        ).catch((error) => {
            console.log(error)
        })
    }

    const ensureHTTPS = (url) => {
        if (!url.startsWith('http://') && !url.startsWith('https://')) {
            return `https://${url}`;
        }
        return url;
    };

    const eventTypes = [
        { value: 'remote', label: 'Remoto' },
        { value: 'presential', label: 'Presencial' },
    ]

    const solution = event?.solutionId

    return (
        <Box
            mt={1}
            p={6}
            bgColor={"black"}
            w={"100%"}
            transition="all 0.3s ease"
            _hover={{ transform: 'translateY(-2px)', boxShadow: 'lg' }}
        >
            {event && <Grid templateColumns="repeat(8, 1fr)" gap={8} pb={6}>
                <GridItem colSpan={5}>
                    <VStack spacing={6} align="stretch">
                        <Flex align={'center'} justify='space-between' gap={4}>
                            <Flex align={'center'} gap={4}>
                                {event?.photo && (
                                    <Image
                                        src={event.photo}
                                        alt={event?.name}
                                        height={40}
                                        width={40}
                                        objectFit={'cover'}
                                        rounded='full'
                                        border="2px solid"
                                        borderColor="yellow.400"
                                    />
                                )}
                                <VStack align="start" spacing={1}>
                                    {event?.name && (
                                        <Text fontSize={28} fontWeight='bold' color="white">
                                            {capitalizeFirstLetter(event.name)}
                                        </Text>
                                    )}
                                    <Text color="yellow.300" fontSize="sm">
                                        <a href={ensureHTTPS(event.link)} target='_blank' rel="noopener noreferrer">
                                            {event.link}
                                        </a>
                                    </Text>
                                </VStack>
                            </Flex>
                        </Flex>

                        <Box>
                            <Text fontSize="lg" fontWeight='bold' color="white" mb={2}>Corporate</Text>
                            <Text fontSize="md" color="gray.300">{event?.corporate?.name}</Text>
                        </Box>

                        <Box>
                            <Text fontSize="lg" fontWeight='bold' color="white" mb={2}>Descripción</Text>
                            <Text color="gray.300" lineHeight="tall" textAlign={"justify"}>{event.description}</Text>
                        </Box>

                        <HStack spacing={8} wrap="wrap">
                            <VStack align="start" spacing={1}>
                                <HStack>
                                    <Icon as={FaCalendarAlt} color="yellow.400" />
                                    <Text fontSize="lg" fontWeight='bold' color="white">Fecha</Text>
                                </HStack>
                                <Text color="gray.300">
                                    {new Date(event.date).toLocaleDateString()}
                                </Text>
                            </VStack>

                            <VStack align="start" spacing={1}>
                                <HStack>
                                    <Icon as={FaClock} color="yellow.400" />
                                    <Text fontSize="lg" fontWeight='bold' color="white">Hora</Text>
                                </HStack>
                                <Text color="gray.300">
                                    {new Date(event.time).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                </Text>
                            </VStack>
                        </HStack>

                        <Box>
                            <Text fontSize="lg" fontWeight='bold' color="white" mb={2}>Tipo de Evento</Text>
                            <HStack spacing={4}>
                                {eventTypes.map(eventType => (
                                    <Badge
                                        key={eventType.label}
                                        colorScheme={event.type.includes(eventType.value) ? "yellow" : "gray"}
                                        px={3}
                                        py={1}
                                        borderRadius="full"
                                    >
                                        {capitalizeFirstLetter(eventType.label)}
                                    </Badge>
                                ))}
                            </HStack>
                        </Box>

                        <Grid templateColumns="repeat(3, 1fr)" gap={6}>
                            <VStack align="start" spacing={1}>
                                <HStack>
                                    <Icon as={FaClock} color="yellow.400" />
                                    <Text fontSize="lg" fontWeight='bold' color="white">Duración</Text>
                                </HStack>
                                <Text color="gray.300">{event.duration}H</Text>
                            </VStack>

                            <VStack align="start" spacing={1}>
                                <HStack>
                                    <Icon as={FaUsers} color="yellow.400" />
                                    <Text fontSize="lg" fontWeight='bold' color="white">Aforo</Text>
                                </HStack>
                                <Text color="gray.300">{event.maximumCapacity} personas</Text>
                            </VStack>

                            <VStack align="start" spacing={1}>
                                <HStack>
                                    <Icon as={FaEuroSign} color="yellow.400" />
                                    <Text fontSize="lg" fontWeight='bold' color="white">Precio</Text>
                                </HStack>
                                <Text color="gray.300">{event.price === 0 || event.price === null ? 'GRATIS' : `${event.price} €`}</Text>
                            </VStack>
                        </Grid>
                    </VStack>
                </GridItem>

                <GridItem colSpan={3}>
                    <VStack spacing={4} align="stretch">
                        <Box>
                            <HStack mb={2}>
                                <Icon as={FaMapMarkerAlt} color="yellow.400" />
                                <Text fontSize="lg" fontWeight='bold' color="white">Ubicación</Text>
                            </HStack>
                            <Text color="gray.300">{event.address}</Text>
                        </Box>

                        {event.type?.includes('presential') && (
                            <Box
                                w="100%"
                                height={300}
                                borderRadius="lg"
                                overflow="hidden"
                                boxShadow="lg"
                            >
                                <MapSearcher
                                    onlyMap
                                    defaultAddress={event.address}
                                    defaultCoordinates={event.coordinates}
                                    height='h-80'
                                />
                            </Box>
                        )}
                    </VStack>
                </GridItem>
            </Grid>}
            {
                (event && event.gallery && event.gallery.length > 0) && <FeedGallery images={event.gallery} />
            }
        </Box>
    )
}

export default EventDetails;
