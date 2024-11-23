import { Box, Text, Center } from "@chakra-ui/react";
import React, { useState } from "react";
import { ButtonCreateCorporate } from "../../../components/corporate/button-create-corporate";
import { FiRepeat } from "react-icons/fi";
import { DARK_COLORS } from "../../../colors/colors";
import { ButtonCreateService } from "../../../components/corporate/service/button-create-service";

export const EmptyServiceState = ({ refreshServices }) => {
    return (
        <Center flexDir={'column'} minH={'300'}>
            <FiRepeat size={70} color={'white'} />
            <Text my={6} fontSize={{ base: 18, md: 24 }} textAlign='center' color={DARK_COLORS.neutral}>
                Todavia no tienes servicios dados de alta
            </Text>
            <ButtonCreateService refreshServices={refreshServices} />
        </Center>

    )
};
