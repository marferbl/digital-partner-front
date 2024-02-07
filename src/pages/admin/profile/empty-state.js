import { Box, Text, Center } from "@chakra-ui/react";
import React, { useState } from "react";
import { ButtonCreateCorporate } from "../../../components/corporate/button-create-corporate";

export const EmptyCorporateState = ({ refreshCorporate }) => {
    return (
        <Center flexDir={'column'} minH={'300'}>
            <Text mb={3}>
                Todavia no tienes una corporate
            </Text>
            <ButtonCreateCorporate refreshCorporate={refreshCorporate} />
        </Center>

    )
};
