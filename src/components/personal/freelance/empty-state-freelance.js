import { Box, Text, Center } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import { FiTool } from "react-icons/fi";
import { Tooltip } from '@chakra-ui/react'
import { ButtonCreateFreelance } from "./button-create-freelance";
import { COLORS } from "../../../colors/colors";

export const EmptyStateFreelance = ({ refreshCorporate, corporate }) => {


    return (
        <Center flexDir={'column'} minH={'300'}>
            <FiTool size={70} color={COLORS.primary} />
            <Text my={3}>
                No te has dado de alta de freelance
            </Text>
            <Tooltip isDisabled={!!corporate} label={'Crea primero una corporate'}>
                <Box>
                    <ButtonCreateFreelance refreshCorporate={refreshCorporate} disabled={!corporate} />
                </Box>
            </Tooltip>
        </Center>

    )
};
