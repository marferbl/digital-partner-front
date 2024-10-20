import { Box, Text, Flex } from "@chakra-ui/react";
import React, { useState, useContext, useEffect } from "react";
import { EmptyServiceEvent, EmptyServiceState } from "./empty-state";
import axios from "axios";
import { CorporateProfile } from "../../../components/corporate/corporate-profile";
import { getServiceByUserCorporate } from "../../../services/service";
import ServicesTable from "../../../components/corporate/service/services-table";
import { ButtonCreateService } from "../../../components/corporate/service/button-create-service";
import { ButtonCreateEvent } from "../../../components/corporate/events/button-create-event";
import { getEventsByCorporate } from "../../../services/event";
import EventsTable from "../../../components/corporate/events/events-table";

export const EventsPage = () => {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        getMyEvents();
    }, []);

    const getMyEvents = async () => {
        getEventsByCorporate().then((res) => {
            setEvents(res.data.events);
        }
        ).catch((error) => {
            console.log(error);
        }
        );
    };

    return (
        <Box mt={6} p={5} rounded={"xl"} bgColor={"white"} w={"100%"} minH={400}>
            <Flex align={'center'} w='full' justify={'space-between'} borderBottomWidth={1}>
                <Text fontSize={22} mb={5} >Eventos</Text>
                <ButtonCreateEvent refreshEvents={getMyEvents} />
            </Flex>

            {events.length === 0 ? <EmptyServiceEvent refreshEvents={getMyEvents} /> : <EventsTable events={events} refreshEvents={getMyEvents} />}
        </Box>
    )
};
