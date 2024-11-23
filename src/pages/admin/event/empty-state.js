import { Box, Text, Center } from "@chakra-ui/react";
import React, { useState } from "react";
import { FiCalendar, FiRepeat } from "react-icons/fi";
import { DARK_COLORS } from "../../../colors/colors";
import { ButtonCreateEvent } from "../../../components/corporate/events/button-create-event";


export const EmptyServiceEvent = ({ refreshEvents }) => {
    return (
        <Center flexDir={'column'} minH={'300'}>
            <FiCalendar size={70} color={'white'} />
            <Text my={6} fontSize={{ base: 18, md: 24 }} textAlign='center' color={DARK_COLORS.neutral}>
                Todavia no tienes eventos dados de alta
            </Text>
            <ButtonCreateEvent refreshEvents={refreshEvents} />
        </Center>

    )
};
