import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box, Flex, Text } from "@chakra-ui/react";
import { UserContext } from "../../../context/userContext";
import Navbar from "../../../components/base/navbar";
import { useContext } from "react";
import { IoChevronBack } from "react-icons/io5";
import { getEvent } from "../../../services/event";
import EventDetails from "../../../components/corporate/events/event-details";


const EventDetailsPage = () => {
    const [event, setService] = useState(null);
    const { isLoggedIn } = useContext(UserContext)

    const { id } = useParams();

    useEffect(() => {
        getMyEvent();
    }, []);

    useEffect(() => {
        window.scrollTo(0, 0);
        getMyEvent();
    }, [id])

    const getMyEvent = () => {
        getEvent(id)
            .then((res) => {
                setService(res.data.event);
            })
            .catch((error) => {
                console.log(error);
            });
    };


    const goBack = () => {
        window.scrollTo(0, 0);
        window.history.back();
    }

    return (
        <Box>
            <Box p={5} bgColor={"black"} w={"100%"} minH={'100vh'} px={{ base: 6, md: 20, lg: 32 }}>
                <Flex h={8} align={'center'} pr={3} onClick={() => goBack()} cursor={'pointer'} _hover={{ borderBottomWidth: 1 }} w={'fit-content'}>
                    <IoChevronBack size={20} color={'white'} />
                    <Text ml={2} pt={-4} fontSize={16} color={'white'} fontWeight={'bold'}>Volver</Text>
                </Flex>
                <EventDetails event={event} />
            </Box>
        </Box>

    )
}

export default EventDetailsPage