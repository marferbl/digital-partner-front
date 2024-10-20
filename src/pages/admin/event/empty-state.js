import { Box, Text, Center } from "@chakra-ui/react";
import React, { useState } from "react";
import { FiRepeat } from "react-icons/fi";
import { COLORS } from "../../../colors/colors";
import { ButtonCreateEvent } from "../../../components/corporate/events/button-create-event";


export const EmptyServiceEvent = ({ refreshServices }) => {
    return (
        <Center flexDir={'column'} minH={'300'}>
            <FiRepeat size={70} color={COLORS.primary} />
            <Text my={6} fontSize={24}>
                Todavia no tienes eventos dados de alta
            </Text>
            <ButtonCreateEvent refreshEvents={refreshServices} />
        </Center>

    )
};
