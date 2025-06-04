import React, { useState, useContext, useEffect } from "react";
import { Box, Grid, GridItem, Text, Avatar, Button, Flex, Image, Checkbox } from "@chakra-ui/react";
import { capitalizeFirstLetter } from '../../../utils/methods'
import { UserContext } from "../../../context/userContext";
import { getEventsByCorporate } from "../../../services/event";
import { useTranslation } from 'react-i18next';
import MapSearcher from "../../base/map-searcher";


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

    console.log(event)
    const solution = event?.solutionId

    return (
        <Box mt={1} p={3} rounded={"xl"} bgColor={"white"} w={"100%"}>
            {event && <Grid templateColumns="repeat(8, 1fr)" gap={6} pb={1}>
                <GridItem colSpan={5}>
                    <Box textAlign={'left'} mt={1} rounded={"xl"} bgColor={"white"} w={"100%"} px={10}>
                        <Flex align={'center'} justify='space-between' gap={4} pb={3}>
                            <Flex align={'center'} gap={4}>
                                {event?.photo && <Image src={event.photo} alt={event?.name} height={28} width={28} objectFit={'contain'} rounded='100%' />}
                                {event?.name ? <Text fontSize={22} mt={3} fontWeight='bold'>{capitalizeFirstLetter(event.name)}</Text> : ''}
                            </Flex>

                        </Flex>
                        <Text mt={3} fontSize={14} color={'blue.600'} _hover={{ textDecor: 'underline' }}>
                            <a href={ensureHTTPS(event.link)} target='_blank' fontSize='sm'>{event.link}</a>
                        </Text>
                        <Text fontSize={14} mt={3} fontWeight='bold' textDecor={'underline'}>Corporate:</Text>
                        <Text fontSize={16}>{event?.corporate?.name} </Text>


                        <Text fontSize={14} mt={3} fontWeight='bold' textDecor={'underline'}>Descripción:</Text>
                        <Text>{event.description}</Text>

                        <Text fontSize={14} mt={3} fontWeight='bold' textDecor={'underline'}>Cuando es:</Text>
                        <Text>{new Date(event.date).toLocaleDateString()} a las {new Date(event.time).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</Text>

                        {event && <Flex align={'center'} gap={2} mt={3}>
                            {eventTypes.map(eventType => (
                                <Checkbox key={eventType.label} isChecked={event.type.includes(eventType.value)}>{capitalizeFirstLetter(eventType.label)}</Checkbox>
                            ))}
                        </Flex>}


                        <Flex align={'center'} gap={4} mt={3}>
                            <Box>
                                <Text fontSize={14} mt={3} fontWeight='bold' textDecor={'underline'}>Duración</Text>
                                <Text>{event.duration}H</Text>
                            </Box>
                            <Box>
                                <Text fontSize={14} mt={3} fontWeight='bold' textDecor={'underline'}>Aforo máximo:</Text>
                                <Text>{event.maximumCapacity}</Text>
                            </Box>
                            <Box>
                                <Text fontSize={14} mt={3} fontWeight='bold' textDecor={'underline'}>Precio:</Text>
                                <Text>{event.price === 0 || event.price === null ? 'GRATIS' : `${event.price} €`}</Text>
                            </Box>
                        </Flex>



                    </Box>
                </GridItem>

                <GridItem colSpan={3}>
                    <span>{event.address}</span>

                    <Box w={300} height={250}>

                        {event.type?.includes('presential') && (
                            <>
                                <MapSearcher onlyMap defaultAddress={event.address} defaultCoordinates={event.coordinates} height='h-80' />
                            </>
                        )}
                    </Box>
                </GridItem>

            </Grid>}

        </Box >
    )
}

export default EventDetails;
