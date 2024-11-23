import { Box, Text, Center } from "@chakra-ui/react";
import React, { useState } from "react";
import { ButtonCreateCorporate } from "../../../components/corporate/button-create-corporate";
import { FiDatabase } from "react-icons/fi";
import { COLORS } from "../../../colors/colors";

export const EmptyCorporateState = ({ refreshCorporate }) => {
    return (
        <Center flexDir={'column'} minH={'300'}>
            <FiDatabase size={70} color={'white'} />
            <Text my={6} fontSize={24} color='white'>
                Todavia no tienes una corporate
            </Text>
            <ButtonCreateCorporate refreshCorporate={refreshCorporate} />
        </Center>

    )
};
