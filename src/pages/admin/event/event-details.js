import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box, Flex, Text } from "@chakra-ui/react";
import { UserContext } from "../../../context/userContext";
import Navbar from "../../../components/base/navbar";
import { useContext } from "react";
import { IoChevronBack } from "react-icons/io5";
import { getEvent } from "../../../services/event";
import EventDetails from "../../../components/corporate/events/event-details";
import { useTranslation } from 'react-i18next';


const EventDetailsPage = () => {
    const [event, setService] = useState(null);
    const { isLoggedIn } = useContext(UserContext)
    const { t } = useTranslation("global");

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
        <Box bgColor="black">
            <Box 
                py={5}
                px={{ base: 6, md: 20, lg: 32 }}
                bgColor={"black"}
                w={"100%"}
                minH={400}
                color={'white'}
            >
                <Flex
                    h={8}
                    align={'center'}
                    pr={3}
                    onClick={goBack}
                    cursor={'pointer'}
                    w={'fit-content'}
                    _hover={{ color: 'yellow.400' }}
                    transition="all 0.3s ease"
                >
                    <IoChevronBack size={20} />
                    <Text ml={2} pt={-4} fontSize={16} fontWeight={'bold'}>{t("back")}</Text>
                </Flex>
                <EventDetails event={event} />
            </Box>
        </Box>

    )
}

export default EventDetailsPage